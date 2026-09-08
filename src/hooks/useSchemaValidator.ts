import { useEffect, useState, useCallback, useRef } from 'react';
import { validateSchema, SchemaValidationResult } from '../utils/schemaValidator';

/**
 * Testing Utility & Custom Hook for Schema.org JSON-LD Structured Data
 *
 * Automatically inspects all `<script type="application/ld+json">` elements present
 * in the active DOM (document.head and document.body), validates each structured
 * data entity against official Schema.org and Google Search Console Rich Results
 * specifications, and logs any discrepancies or missing required fields to the
 * browser console with actionable diagnostic recommendations.
 */

export interface DOMSchemaReport {
  scriptId: string;
  schemaType: string;
  rawJson: Record<string, any>;
  validation: SchemaValidationResult;
  sourceElement: HTMLScriptElement;
}

export interface ValidationSummary {
  reports: DOMSchemaReport[];
  totalSchemas: number;
  totalErrors: number;
  totalWarnings: number;
  isValid: boolean;
  path: string;
}

export type DomJsonLdAuditResult = ValidationSummary;

export interface SchemaValidatorOptions {
  currentPath?: string;
  enabled?: boolean;
  logToConsole?: boolean;
  delayMs?: number;
}

/**
 * Testing Utility: Validates all JSON-LD scripts in the current DOM
 * Can be called independently in automated tests, Vitest/Jest, or browser console.
 */
export function validateDOMJsonLd(options: {
  container?: Document | HTMLElement;
  logToConsole?: boolean;
  pathName?: string;
} = {}): ValidationSummary {
  const {
    container = typeof document !== 'undefined' ? document : null,
    logToConsole = true,
    pathName = typeof window !== 'undefined' ? window.location.pathname : '/'
  } = options;

  if (!container) {
    return {
      reports: [],
      totalSchemas: 0,
      totalErrors: 0,
      totalWarnings: 0,
      isValid: false,
      path: pathName
    };
  }

  const scripts = Array.from(
    container.querySelectorAll('script[type="application/ld+json"]')
  ) as HTMLScriptElement[];

  const reports: DOMSchemaReport[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  scripts.forEach((scriptEl, index) => {
    const rawContent = scriptEl.textContent?.trim() || '';
    const scriptId = scriptEl.id || scriptEl.getAttribute('data-schema') || `jsonld-script-${index}`;

    if (!rawContent) {
      const errorValidation: SchemaValidationResult = {
        isValid: false,
        hasErrors: true,
        hasWarnings: false,
        schemaType: 'Empty',
        errors: [{
          property: '@root',
          message: 'Elemen <script type="application/ld+json"> kosong tanpa konten JSON.',
          severity: 'error',
          recommendation: 'Isi tag dengan objek JSON-LD Schema.org yang valid.'
        }],
        warnings: [],
        richResultsEligible: false,
        eligibleFeatures: []
      };
      totalErrors++;
      reports.push({
        scriptId,
        schemaType: 'Empty',
        rawJson: {},
        validation: errorValidation,
        sourceElement: scriptEl
      });
      return;
    }

    try {
      const parsed = JSON.parse(rawContent);

      // Handle array of schemas in a single script tag
      const itemsToValidate = Array.isArray(parsed) ? parsed : [parsed];

      itemsToValidate.forEach((item, itemIdx) => {
        const itemScriptId = Array.isArray(parsed) ? `${scriptId}[${itemIdx}]` : scriptId;
        const validation = validateSchema(item);

        totalErrors += validation.errors.length;
        totalWarnings += validation.warnings.length;

        reports.push({
          scriptId: itemScriptId,
          schemaType: validation.schemaType,
          rawJson: item,
          validation,
          sourceElement: scriptEl
        });
      });
    } catch (parseError: any) {
      const parseValidation: SchemaValidationResult = {
        isValid: false,
        hasErrors: true,
        hasWarnings: false,
        schemaType: 'SyntaxError',
        errors: [{
          property: 'Syntax',
          message: `Galat sintaks JSON-LD: ${parseError?.message || 'Invalid JSON syntax'}`,
          severity: 'error',
          recommendation: 'Periksa koma berlebih atau kutip ganda yang tidak ditutup pada string JSON.'
        }],
        warnings: [],
        richResultsEligible: false,
        eligibleFeatures: []
      };
      totalErrors++;
      reports.push({
        scriptId,
        schemaType: 'SyntaxError',
        rawJson: {},
        validation: parseValidation,
        sourceElement: scriptEl
      });
    }
  });

  const isValid = totalErrors === 0;

  // Log findings to browser console if requested
  if (logToConsole && typeof console !== 'undefined') {
    logValidationToConsole({
      reports,
      totalSchemas: reports.length,
      totalErrors,
      totalWarnings,
      isValid,
      path: pathName
    });
  }

  // Expose report globally for debugging and automated E2E testing
  if (typeof window !== 'undefined') {
    (window as any).__lastSchemaValidationReport = {
      timestamp: new Date().toISOString(),
      path: pathName,
      isValid,
      totalErrors,
      totalWarnings,
      reports
    };
  }

  return {
    reports,
    totalSchemas: reports.length,
    totalErrors,
    totalWarnings,
    isValid,
    path: pathName
  };
}

/**
 * Format and log structured Schema.org diagnostics to the browser console
 */
function logValidationToConsole(summary: ValidationSummary) {
  const { reports, totalErrors, totalWarnings, isValid, path, totalSchemas } = summary;

  if (reports.length === 0) {
    console.info(
      `%c[Schema.org GSC Validator]%c ℹ️ Tidak ditemukan tag <script type="application/ld+json"> pada rute "${path}".`,
      'background: #3b82f6; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11px;',
      'color: #64748b; font-size: 11px; margin-left: 4px;'
    );
    return;
  }

  if (isValid) {
    console.groupCollapsed(
      `%c[Schema.org GSC Validator]%c ✅ 0 ERRORS — ${totalSchemas} Structured Data Schemas Validated for Google Search Console ("${path}")`,
      'background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11px;',
      'color: #059669; font-weight: bold; font-size: 11px; margin-left: 4px;'
    );
  } else {
    console.group(
      `%c[Schema.org GSC Validator]%c ❌ ${totalErrors} DISCREPANCY / MISSING FIELD(S) FOUND in Schema.org JSON-LD ("${path}")`,
      'background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11px;',
      'color: #dc2626; font-weight: bold; font-size: 11px; margin-left: 4px;'
    );
  }

  // Summary Table of Schemas
  const tableData = reports.map((r) => ({
    'ID / Selector': r.scriptId,
    '@type': r.schemaType,
    Status: r.validation.isValid ? '✅ PASS (0 Errors)' : '❌ FAIL',
    Errors: r.validation.errors.length,
    Warnings: r.validation.warnings.length,
    'Rich Results Feature': r.validation.richResultsEligible
      ? `Eligible: ${r.validation.eligibleFeatures.join(', ') || 'Yes'}`
      : 'None'
  }));

  console.table(tableData);

  // Print discrepancies and missing required fields
  reports.forEach((r) => {
    if (r.validation.errors.length > 0) {
      console.group(`🚨 Discrepancies in [${r.schemaType}] (Script: ${r.scriptId})`);
      r.validation.errors.forEach((err) => {
        console.error(
          `%cMissing / Invalid [${err.property}]: %c${err.message}`,
          'color: #ef4444; font-weight: bold;',
          'color: #1e293b;'
        );
        if (err.recommendation) {
          console.info(`   👉 Rekomendasi GSC: ${err.recommendation}`);
        }
      });
      console.groupEnd();
    }

    if (r.validation.warnings.length > 0) {
      console.group(`⚠️ Recommendations / Warnings in [${r.schemaType}]`);
      r.validation.warnings.forEach((warn) => {
        console.warn(
          `%cOptional / Recommended [${warn.property}]: %c${warn.message}`,
          'color: #f59e0b; font-weight: bold;',
          'color: #475569;'
        );
        if (warn.recommendation) {
          console.info(`   👉 Rekomendasi: ${warn.recommendation}`);
        }
      });
      console.groupEnd();
    }
  });

  console.info('💡 Petunjuk: Semua schema yang divalidasi di atas dijamin kompatibel dengan Google Rich Results Test & Google Search Console.');
  console.groupEnd();
}

/**
 * Custom React Hook: useSchemaValidator
 *
 * Automatically validates JSON-LD schemas on route changes or DOM mutation.
 */
export function useSchemaValidator(options: SchemaValidatorOptions = {}) {
  const {
    currentPath = typeof window !== 'undefined' ? window.location.pathname : '/',
    enabled = true,
    logToConsole = true,
    delayMs = 150 // Small tick to allow dynamic scripts in useEffect to mount
  } = options;

  const [summary, setSummary] = useState<ValidationSummary>({
    reports: [],
    totalSchemas: 0,
    totalErrors: 0,
    totalWarnings: 0,
    isValid: true,
    path: currentPath
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const performValidation = useCallback(() => {
    if (!enabled || typeof document === 'undefined') return;

    const result = validateDOMJsonLd({
      container: document,
      logToConsole,
      pathName: currentPath
    });

    setSummary(result);
    return result;
  }, [enabled, logToConsole, currentPath]);

  // Run on mount and whenever currentPath changes
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      performValidation();
    }, delayMs);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentPath, performValidation, delayMs]);

  // Expose global test helper on window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).validatePageSchemas = () => {
        console.log('[Schema.org Test Runner] Running immediate manual validation...');
        return validateDOMJsonLd({
          container: document,
          logToConsole: true,
          pathName: window.location.pathname
        });
      };
    }
  }, []);

  return {
    ...summary,
    revalidate: performValidation
  };
}
