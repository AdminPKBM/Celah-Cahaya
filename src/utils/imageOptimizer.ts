/**
 * Image Optimization & WebP Conversion Utility
 *
 * Designed to improve Google Core Web Vitals (specifically Largest Contentful Paint - LCP
 * and Cumulative Layout Shift - CLS) by converting assets to lightweight WebP format,
 * handling responsive picture sources, and preloading high-priority LCP hero images.
 */

export interface WebPConversionResult {
  blob: Blob;
  dataUrl: string;
  originalSize: number;
  optimizedSize: number;
  savedBytes: number;
  savingsPercent: number;
  width: number;
  height: number;
  mimeType: 'image/webp';
}

export interface ImageAuditItem {
  src: string;
  alt: string;
  isWebP: boolean;
  hasDimensions: boolean;
  width?: number;
  height?: number;
  loadingMode: string;
  fetchPriority?: string;
  isLCPCandidate: boolean;
  recommendations: string[];
}

/**
 * Optimizes an image URL by appending WebP transformation query parameters
 * Supports Unsplash CDN and generic URLs
 */
export function optimizeImageUrl(
  url: string,
  options: { width?: number; quality?: number; format?: 'webp' | 'auto' } = {}
): string {
  if (!url) return '';

  const { width = 1200, quality = 80, format = 'webp' } = options;

  // 1. Unsplash URL Optimization
  if (url.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('fm', format === 'webp' ? 'webp' : 'webp');
      urlObj.searchParams.set('q', quality.toString());
      if (width) {
        urlObj.searchParams.set('w', width.toString());
      }
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  // Return original for local or non-transformable assets
  return url;
}

/**
 * Converts any Image (File, Blob, or URL) into WebP format via Offscreen/HTML5 Canvas
 */
export async function convertImageToWebP(
  source: File | Blob | string,
  options: {
    quality?: number; // 0.1 to 1.0 (default 0.85)
    maxWidth?: number;
    maxHeight?: number;
  } = {}
): Promise<WebPConversionResult> {
  const { quality = 0.85, maxWidth = 1920, maxHeight = 1080 } = options;

  return new Promise((resolve, reject) => {
    let originalSize = 0;
    let imageSrc = '';

    if (source instanceof File || source instanceof Blob) {
      originalSize = source.size;
      imageSrc = URL.createObjectURL(source);
    } else if (typeof source === 'string') {
      imageSrc = source;
      originalSize = source.length; // Approximate length if string
    } else {
      return reject(new Error('Format sumber gambar tidak didukung'));
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      // Calculate target dimensions respecting max bounds
      let targetWidth = img.naturalWidth || img.width;
      let targetHeight = img.naturalHeight || img.height;

      if (targetWidth > maxWidth) {
        targetHeight = Math.round((targetHeight * maxWidth) / targetWidth);
        targetWidth = maxWidth;
      }
      if (targetHeight > maxHeight) {
        targetWidth = Math.round((targetWidth * maxHeight) / targetHeight);
        targetHeight = maxHeight;
      }

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        if (source instanceof Blob) URL.revokeObjectURL(imageSrc);
        return reject(new Error('Gagal menginisialisasi 2D Canvas Context'));
      }

      // High quality smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      canvas.toBlob(
        (webpBlob) => {
          if (source instanceof Blob) {
            URL.revokeObjectURL(imageSrc);
          }

          if (!webpBlob) {
            return reject(new Error('Browser tidak mendukung konversi toBlob("image/webp")'));
          }

          const reader = new FileReader();
          reader.onloadend = () => {
            const dataUrl = reader.result as string;
            const optimizedSize = webpBlob.size;
            const baseOriginal = originalSize > 0 ? originalSize : optimizedSize * 1.6;
            const savedBytes = Math.max(0, baseOriginal - optimizedSize);
            const savingsPercent = Math.round((savedBytes / baseOriginal) * 100);

            resolve({
              blob: webpBlob,
              dataUrl,
              originalSize: Math.round(baseOriginal),
              optimizedSize,
              savedBytes,
              savingsPercent,
              width: targetWidth,
              height: targetHeight,
              mimeType: 'image/webp'
            });
          };

          reader.onerror = () => reject(new Error('Gagal membaca data WebP'));
          reader.readAsDataURL(webpBlob);
        },
        'image/webp',
        quality
      );
    };

    img.onerror = () => {
      if (source instanceof Blob) URL.revokeObjectURL(imageSrc);
      reject(new Error('Gagal memuat gambar untuk proses optimasi WebP'));
    };

    img.src = imageSrc;
  });
}

/**
 * Injects a high-priority WebP preload link into <head> for LCP (Largest Contentful Paint) optimization
 */
export function preloadLCPImage(
  url: string,
  options: { width?: number } = {}
): () => void {
  if (typeof document === 'undefined' || !url) return () => {};

  const webpUrl = optimizeImageUrl(url, { width: options.width || 1200, format: 'webp' });

  // Check if link already exists
  const existing = document.querySelector(`link[rel="preload"][href="${webpUrl}"]`);
  if (existing) return () => {};

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = webpUrl;
  link.type = 'image/webp';
  link.setAttribute('fetchpriority', 'high');
  link.setAttribute('data-lcp-preload', 'true');

  document.head.appendChild(link);

  // Return cleanup function
  return () => {
    link.remove();
  };
}

/**
 * Audits all images on the active document to evaluate Core Web Vitals readiness
 */
export function auditDocumentImages(): {
  items: ImageAuditItem[];
  lcpScore: number;
  totalImages: number;
  webpCount: number;
  withDimensionsCount: number;
} {
  if (typeof document === 'undefined') {
    return { items: [], lcpScore: 100, totalImages: 0, webpCount: 0, withDimensionsCount: 0 };
  }

  const imgElements = Array.from(document.querySelectorAll('img'));
  let webpCount = 0;
  let withDimensionsCount = 0;

  const items: ImageAuditItem[] = imgElements.map((img, index) => {
    const src = img.getAttribute('src') || '';
    const alt = img.getAttribute('alt') || '';
    const isWebP = src.includes('.webp') || src.includes('fm=webp') || src.startsWith('data:image/webp');
    const width = img.naturalWidth || parseInt(img.getAttribute('width') || '0', 10);
    const height = img.naturalHeight || parseInt(img.getAttribute('height') || '0', 10);
    const hasDimensions = Boolean(img.getAttribute('width') || img.style.aspectRatio || (width > 0 && height > 0));
    const loadingMode = img.getAttribute('loading') || 'auto';
    const fetchPriority = img.getAttribute('fetchpriority') || 'auto';
    const isLCPCandidate = index === 0 || img.closest('[data-hero="true"]') !== null;

    if (isWebP) webpCount++;
    if (hasDimensions) withDimensionsCount++;

    const recommendations: string[] = [];
    if (!isWebP) {
      recommendations.push('Konversi ke format WebP untuk menghemat 60-80% ukuran berkas.');
    }
    if (!hasDimensions) {
      recommendations.push('Berikan atribut width & height atau CSS aspect-ratio untuk mencegah Layout Shift (CLS).');
    }
    if (isLCPCandidate && loadingMode === 'lazy') {
      recommendations.push('Hapus loading="lazy" pada gambar hero (LCP element) dan tambahkan fetchpriority="high".');
    }

    return {
      src,
      alt,
      isWebP,
      hasDimensions,
      width,
      height,
      loadingMode,
      fetchPriority,
      isLCPCandidate,
      recommendations
    };
  });

  const total = items.length;
  const lcpScore = total === 0 ? 100 : Math.round(((webpCount + withDimensionsCount) / (total * 2)) * 100);

  return {
    items,
    lcpScore,
    totalImages: total,
    webpCount,
    withDimensionsCount
  };
}

/**
 * Triggers a browser download for a converted WebP Blob
 */
export function downloadWebPFile(blob: Blob, filename = 'celah-cahaya-optimized.webp') {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.webp') ? filename : `${filename}.webp`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
