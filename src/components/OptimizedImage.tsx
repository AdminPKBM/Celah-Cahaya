import React, { useEffect, useState } from 'react';
import { optimizeImageUrl, preloadLCPImage } from '../utils/imageOptimizer';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  isLCP?: boolean;
  quality?: number;
  className?: string;
  pictureClassName?: string;
}

/**
 * High-performance, Core Web Vitals optimized image component
 * - Serves WebP via modern <picture> and srcset
 * - High fetchpriority & eager loading for LCP Hero elements
 * - Async decoding & native lazy loading for below-the-fold assets
 * - Preserves aspect ratio to prevent Cumulative Layout Shift (CLS)
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  isLCP = false,
  quality = 80,
  className = '',
  pictureClassName = '',
  loading,
  fetchPriority,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  // Preload LCP hero images in head
  useEffect(() => {
    if (isLCP && src && !hasError) {
      const cleanup = preloadLCPImage(src, {
        width: typeof width === 'number' ? width : 1200
      });
      return cleanup;
    }
  }, [isLCP, src, width, hasError]);

  const webpSrc = optimizeImageUrl(src, {
    width: typeof width === 'number' ? width : 1200,
    quality,
    format: 'webp'
  });

  const originalSrc = src;
  const isWebPSource = webpSrc.endsWith('.webp') || webpSrc.includes('fm=webp');

  return (
    <picture className={`inline-block overflow-hidden ${pictureClassName}`}>
      {/* Modern WebP format source */}
      {!hasError && isWebPSource && (
        <source
          type="image/webp"
          srcSet={webpSrc}
        />
      )}

      {/* Fallback Image */}
      <img
        src={hasError ? originalSrc : (isWebPSource ? webpSrc : originalSrc)}
        alt={alt}
        width={width}
        height={height}
        loading={isLCP ? 'eager' : (loading || 'lazy')}
        fetchPriority={isLCP ? 'high' : (fetchPriority || 'auto')}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        style={aspectRatio ? { aspectRatio } : undefined}
        className={`${className} transition-opacity duration-300`}
        {...rest}
      />
    </picture>
  );
};
