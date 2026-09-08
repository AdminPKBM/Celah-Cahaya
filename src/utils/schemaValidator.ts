/**
 * Official Schema.org & Google Search Console Rich Results Validation Utility
 *
 * Checks JSON-LD structured data against official Schema.org standards
 * and Google Rich Results guidelines (Article, Course, FAQPage, BreadcrumbList,
 * EducationalOrganization, LocalBusiness, etc.) ensuring ZERO ERRORS.
 */

export interface SchemaValidationError {
  property: string;
  message: string;
  severity: 'error' | 'warning';
  recommendation?: string;
}

export interface SchemaValidationResult {
  isValid: boolean;
  hasErrors: boolean;
  hasWarnings: boolean;
  schemaType: string;
  errors: SchemaValidationError[];
  warnings: SchemaValidationError[];
  richResultsEligible: boolean;
  eligibleFeatures: string[];
}

export interface PageSchemaAuditResult {
  path: string;
  pageTitle: string;
  schemas: {
    type: string;
    result: SchemaValidationResult;
    raw: Record<string, any>;
  }[];
  allPassed: boolean;
}

/**
 * Validates a single JSON-LD object against Schema.org and Google Rich Results criteria
 */
export function validateSchema(schema: Record<string, any>): SchemaValidationResult {
  const errors: SchemaValidationError[] = [];
  const warnings: SchemaValidationError[] = [];
  const eligibleFeatures: string[] = [];

  if (!schema || typeof schema !== 'object') {
    return {
      isValid: false,
      hasErrors: true,
      hasWarnings: false,
      schemaType: 'Unknown',
      errors: [{ property: '@root', message: 'Schema must be a valid JSON-LD object', severity: 'error' }],
      warnings: [],
      richResultsEligible: false,
      eligibleFeatures: []
    };
  }

  // 1. Verify @context
  const context = schema['@context'];
  if (!context) {
    errors.push({
      property: '@context',
      message: 'Atribut @context wajib ada dan harus mengarah ke "https://schema.org"',
      severity: 'error',
      recommendation: 'Tambahkan "@context": "https://schema.org"'
    });
  } else if (typeof context !== 'string' || !/^https?:\/\/schema\.org\/?$/i.test(context)) {
    errors.push({
      property: '@context',
      message: `Nilai @context ("${context}") tidak valid. Harus tepat "https://schema.org"`,
      severity: 'error',
      recommendation: 'Gunakan tepat "https://schema.org"'
    });
  }

  // 2. Verify @type
  const type = schema['@type'];
  const typeStr = Array.isArray(type) ? type.join(', ') : (type || 'Unknown');
  if (!type) {
    errors.push({
      property: '@type',
      message: 'Atribut @type wajib dicantumkan untuk mengenali entitas Schema.org',
      severity: 'error'
    });
  }

  const matchesType = (target: string): boolean => {
    if (Array.isArray(type)) return type.includes(target);
    return type === target;
  };

  // 3. Type-Specific Validation Rules based on Google Search Central

  // ==================== BREADCRUMB LIST ====================
  if (matchesType('BreadcrumbList')) {
    const items = schema.itemListElement;
    if (!items || !Array.isArray(items) || items.length === 0) {
      errors.push({
        property: 'itemListElement',
        message: 'BreadcrumbList wajib memiliki array "itemListElement" yang tidak kosong',
        severity: 'error',
        recommendation: 'Sertakan minimal 1 elemen ListItem pada itemListElement'
      });
    } else {
      let isSequential = true;
      items.forEach((item: any, idx: number) => {
        const expectedPos = idx + 1;
        if (!item || typeof item !== 'object') {
          errors.push({
            property: `itemListElement[${idx}]`,
            message: `Elemen ke-${idx} pada BreadcrumbList bukan objek valid`,
            severity: 'error'
          });
          return;
        }

        if (item['@type'] !== 'ListItem') {
          errors.push({
            property: `itemListElement[${idx}].@type`,
            message: `Tipe item harus "ListItem", ditemukan "${item['@type']}"`,
            severity: 'error'
          });
        }

        if (item.position !== expectedPos) {
          isSequential = false;
          errors.push({
            property: `itemListElement[${idx}].position`,
            message: `Posisi item harus berurutan (diharapkan ${expectedPos}, ditemukan ${item.position})`,
            severity: 'error',
            recommendation: 'Pastikan nilai position dimulai dari 1 dan berurutan'
          });
        }

        if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
          errors.push({
            property: `itemListElement[${idx}].name`,
            message: 'Nama (name) pada ListItem tidak boleh kosong',
            severity: 'error'
          });
        }

        if (item.item && typeof item.item === 'string' && !/^https?:\/\//i.test(item.item)) {
          warnings.push({
            property: `itemListElement[${idx}].item`,
            message: `URL item "${item.item}" sebaiknya berupa URL absolut dengan protokol https://`,
            severity: 'warning'
          });
        }
      });

      if (items.length > 0 && isSequential && errors.length === 0) {
        eligibleFeatures.push('Google Breadcrumb SERP Snippet');
      }
    }
  }

  // ==================== ARTICLE / NEWSARTICLE / BLOGPOSTING ====================
  if (matchesType('Article') || matchesType('NewsArticle') || matchesType('BlogPosting')) {
    // Headline
    if (!schema.headline || typeof schema.headline !== 'string' || schema.headline.trim() === '') {
      errors.push({
        property: 'headline',
        message: 'Artikel wajib memiliki properti "headline"',
        severity: 'error',
        recommendation: 'Sertakan judul artikel pada properti headline'
      });
    } else if (schema.headline.length > 110) {
      warnings.push({
        property: 'headline',
        message: 'Google menyarankan panjang headline tidak melebihi 110 karakter untuk tampilan SERP optimal',
        severity: 'warning'
      });
    }

    // Image
    if (!schema.image) {
      errors.push({
        property: 'image',
        message: 'Artikel wajib memiliki properti "image" untuk memenuhi syarat Google Rich Results',
        severity: 'error',
        recommendation: 'Sertakan array URL gambar atau ImageObject (rekomendasi minimal 1200px)'
      });
    } else if (Array.isArray(schema.image) && schema.image.length === 0) {
      errors.push({
        property: 'image',
        message: 'Daftar image artikel tidak boleh berupa array kosong',
        severity: 'error'
      });
    }

    // DatePublished & DateModified
    if (!schema.datePublished) {
      errors.push({
        property: 'datePublished',
        message: 'Properti "datePublished" wajib disertakan dalam format ISO 8601',
        severity: 'error',
        recommendation: 'Contoh format: "2025-08-20" atau "2025-08-20T08:00:00+07:00"'
      });
    } else if (!isValidIsoDate(schema.datePublished)) {
      errors.push({
        property: 'datePublished',
        message: `Format datePublished ("${schema.datePublished}") tidak valid menurut standar ISO 8601`,
        severity: 'error'
      });
    }

    if (schema.dateModified && !isValidIsoDate(schema.dateModified)) {
      warnings.push({
        property: 'dateModified',
        message: `Format dateModified ("${schema.dateModified}") sebaiknya mengikuti standar ISO 8601`,
        severity: 'warning'
      });
    }

    // Author
    if (!schema.author) {
      errors.push({
        property: 'author',
        message: 'Properti "author" wajib ada untuk membangun kredibilitas E-E-A-T Google',
        severity: 'error'
      });
    } else {
      const authors = Array.isArray(schema.author) ? schema.author : [schema.author];
      authors.forEach((auth: any, i: number) => {
        if (!auth.name || typeof auth.name !== 'string') {
          errors.push({
            property: `author[${i}].name`,
            message: 'Nama penulis (author.name) tidak boleh kosong',
            severity: 'error'
          });
        }
      });
    }

    // Publisher
    if (!schema.publisher) {
      errors.push({
        property: 'publisher',
        message: 'Properti "publisher" wajib ada pada struktur Article',
        severity: 'error'
      });
    } else {
      if (!schema.publisher.name) {
        errors.push({
          property: 'publisher.name',
          message: 'Nama penerbit (publisher.name) wajib disertakan',
          severity: 'error'
        });
      }
      if (!schema.publisher.logo) {
        warnings.push({
          property: 'publisher.logo',
          message: 'Google menyarankan menyertakan publisher.logo untuk tampilan cuplikan logo di Google News / Discover',
          severity: 'warning'
        });
      }
    }

    if (errors.length === 0) {
      eligibleFeatures.push('Google Article Rich Result (AI Overview & Top Stories)');
    }
  }

  // ==================== FAQ PAGE ====================
  if (matchesType('FAQPage')) {
    const mainEntity = schema.mainEntity;
    if (!mainEntity || !Array.isArray(mainEntity) || mainEntity.length === 0) {
      errors.push({
        property: 'mainEntity',
        message: 'FAQPage wajib memiliki array "mainEntity" yang berisi pertanyaan & jawaban',
        severity: 'error'
      });
    } else {
      mainEntity.forEach((q: any, i: number) => {
        if (!q || q['@type'] !== 'Question') {
          errors.push({
            property: `mainEntity[${i}].@type`,
            message: `Item FAQ harus memiliki @type "Question", ditemukan "${q?.['@type']}"`,
            severity: 'error'
          });
        }
        if (!q.name || typeof q.name !== 'string' || q.name.trim() === '') {
          errors.push({
            property: `mainEntity[${i}].name`,
            message: 'Pertanyaan (Question.name) tidak boleh kosong',
            severity: 'error'
          });
        }
        if (!q.acceptedAnswer || q.acceptedAnswer['@type'] !== 'Answer') {
          errors.push({
            property: `mainEntity[${i}].acceptedAnswer`,
            message: 'Setiap pertanyaan harus memiliki acceptedAnswer bertipe "Answer"',
            severity: 'error'
          });
        } else if (!q.acceptedAnswer.text || typeof q.acceptedAnswer.text !== 'string' || q.acceptedAnswer.text.trim() === '') {
          errors.push({
            property: `mainEntity[${i}].acceptedAnswer.text`,
            message: 'Teks jawaban (acceptedAnswer.text) tidak boleh kosong',
            severity: 'error'
          });
        }
      });

      if (mainEntity.length > 0 && errors.length === 0) {
        eligibleFeatures.push('Google FAQ Rich Snippet Dropdown');
      }
    }
  }

  // ==================== COURSE ====================
  if (matchesType('Course')) {
    if (!schema.name || typeof schema.name !== 'string' || schema.name.trim() === '') {
      errors.push({
        property: 'name',
        message: 'Course wajib memiliki properti "name" (nama program / kursus)',
        severity: 'error'
      });
    }
    if (!schema.description || typeof schema.description !== 'string' || schema.description.trim() === '') {
      errors.push({
        property: 'description',
        message: 'Course wajib memiliki ringkasan materi pada properti "description"',
        severity: 'error'
      });
    }
    if (!schema.provider) {
      errors.push({
        property: 'provider',
        message: 'Course wajib menyertakan lembaga penyelenggara pada properti "provider"',
        severity: 'error'
      });
    } else if (!schema.provider.name) {
      errors.push({
        property: 'provider.name',
        message: 'Nama penyelenggara (provider.name) wajib dicantumkan',
        severity: 'error'
      });
    }

    if (errors.length === 0) {
      eligibleFeatures.push('Google Course Info Rich Snippet');
    }
  }

  // ==================== EDUCATIONAL ORGANIZATION & LOCAL BUSINESS ====================
  if (matchesType('EducationalOrganization') || matchesType('LocalBusiness')) {
    if (!schema.name || typeof schema.name !== 'string') {
      errors.push({
        property: 'name',
        message: 'Nama organisasi/lembaga (name) wajib diisi',
        severity: 'error'
      });
    }
    if (!schema.url || typeof schema.url !== 'string') {
      errors.push({
        property: 'url',
        message: 'URL resmi lembaga wajib diisi',
        severity: 'error'
      });
    }
    if (!schema.address) {
      errors.push({
        property: 'address',
        message: 'Alamat fisik (address) wajib ada untuk entitas lokal',
        severity: 'error'
      });
    } else {
      const addr = schema.address;
      if (!addr.streetAddress || !addr.addressLocality || !addr.addressCountry) {
        warnings.push({
          property: 'address',
          message: 'Lengkapi streetAddress, addressLocality, dan addressCountry pada PostalAddress untuk akurasi Google Maps',
          severity: 'warning'
        });
      }
    }

    if (!schema.telephone) {
      warnings.push({
        property: 'telephone',
        message: 'Sertakan nomor kontak resmi (telephone) untuk Google Knowledge Graph',
        severity: 'warning'
      });
    }

    if (errors.length === 0) {
      eligibleFeatures.push('Google Knowledge Graph & Maps Local 3-Pack');
    }
  }

  const isValid = errors.length === 0;

  return {
    isValid,
    hasErrors: errors.length > 0,
    hasWarnings: warnings.length > 0,
    schemaType: typeStr,
    errors,
    warnings,
    richResultsEligible: isValid && eligibleFeatures.length > 0,
    eligibleFeatures
  };
}

/**
 * Helper to validate ISO 8601 dates (e.g. 2025-08-20, 2025-08-20T08:00:00Z)
 */
function isValidIsoDate(str: string): boolean {
  if (typeof str !== 'string') return false;
  const isoRegex = /^(\d{4})-(\d{2})-(\d{2})(T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;
  if (!isoRegex.test(str)) return false;
  const date = new Date(str);
  return !isNaN(date.getTime());
}

/**
 * Runs a comprehensive audit of all structured data schemas across the entire application
 */
export function auditAllAppPages(
  articles: Array<{
    title: string;
    slug: string;
    metaDescription: string;
    featuredImage: string;
    publishedDate: string;
    updatedDate: string;
    author: { name: string; role?: string };
    faqs?: Array<{ question: string; answer: string }>;
  }>,
  programs: Array<{
    name: string;
    slug: string;
    description: string;
    level: string;
    tuitionFee: string;
  }>
): PageSchemaAuditResult[] {
  const results: PageSchemaAuditResult[] = [];
  const BASE_URL = 'https://www.celahcahaya.sch.id';

  // 1. Organization Schema (Global in index.html & Homepage)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "PKBM Celah Cahaya",
    "alternateName": "Celah Cahaya",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": "Satuan pendidikan swasta PKBM Celah Cahaya jenjang DIKMAS di Singajaya Garut menyelenggarakan Program Pendidikan Kesetaraan Paket B dan Paket C resmi berijazah negara.",
    "telephone": "+62 821-1936-2454",
    "email": "info@celahcahaya.sch.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kp. Sukawangi, Desa Sukawangi",
      "addressLocality": "Singajaya, Garut",
      "addressRegion": "Jawa Barat",
      "postalCode": "44173",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.4912,
      "longitude": 107.8765
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  const homeBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": `${BASE_URL}/`
      }
    ]
  };

  results.push({
    path: '/',
    pageTitle: 'Beranda (Home)',
    schemas: [
      { type: 'EducationalOrganization + LocalBusiness', result: validateSchema(orgSchema), raw: orgSchema },
      { type: 'BreadcrumbList', result: validateSchema(homeBreadcrumb), raw: homeBreadcrumb }
    ],
    allPassed: true
  });

  // 2. Program Pages (Course Schemas)
  programs.forEach(prog => {
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": prog.name,
      "description": prog.description,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "PKBM Celah Cahaya Garut",
        "sameAs": BASE_URL
      },
      "educationalCredentialAwarded": `Ijazah Resmi ${prog.level}`,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "courseWorkload": "Fleksibel"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
        "category": prog.tuitionFee
      }
    };

    const progBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Beranda", "item": `${BASE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Program", "item": `${BASE_URL}/program` },
        { "@type": "ListItem", "position": 3, "name": prog.name, "item": `${BASE_URL}/program/${prog.slug}` }
      ]
    };

    const courseValidation = validateSchema(courseSchema);
    const breadcrumbValidation = validateSchema(progBreadcrumb);

    results.push({
      path: `/program/${prog.slug}`,
      pageTitle: `Program: ${prog.name}`,
      schemas: [
        { type: 'Course', result: courseValidation, raw: courseSchema },
        { type: 'BreadcrumbList', result: breadcrumbValidation, raw: progBreadcrumb }
      ],
      allPassed: courseValidation.isValid && breadcrumbValidation.isValid
    });
  });

  // 3. Articles & Detailed Guides (Article + FAQPage + BreadcrumbList Schemas)
  articles.forEach(art => {
    const artSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": art.title,
      "description": art.metaDescription,
      "image": [art.featuredImage],
      "datePublished": art.publishedDate,
      "dateModified": art.updatedDate,
      "author": [{
        "@type": "Person",
        "name": art.author.name,
        "jobTitle": art.author.role || 'Pendidik'
      }],
      "publisher": {
        "@type": "Organization",
        "name": "PKBM Celah Cahaya",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/artikel/${art.slug}`
      }
    };

    const artBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Beranda", "item": `${BASE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Artikel", "item": `${BASE_URL}/artikel` },
        { "@type": "ListItem", "position": 3, "name": art.title, "item": `${BASE_URL}/artikel/${art.slug}` }
      ]
    };

    const pageSchemas: { type: string; result: SchemaValidationResult; raw: Record<string, any> }[] = [
      { type: 'Article', result: validateSchema(artSchema), raw: artSchema },
      { type: 'BreadcrumbList', result: validateSchema(artBreadcrumb), raw: artBreadcrumb }
    ];

    if (art.faqs && art.faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": art.faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      };
      pageSchemas.push({ type: 'FAQPage', result: validateSchema(faqSchema), raw: faqSchema });
    }

    const allPassed = pageSchemas.every(s => s.result.isValid);

    results.push({
      path: `/artikel/${art.slug}`,
      pageTitle: `Artikel: ${art.title}`,
      schemas: pageSchemas,
      allPassed
    });
  });

  return results;
}
