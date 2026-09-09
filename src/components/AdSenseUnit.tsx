import React, { useEffect, useRef } from 'react';

interface AdSenseUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  layout?: string;
  layoutKey?: string;
  className?: string;
  label?: string;
  minHeight?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const AdSenseUnit: React.FC<AdSenseUnitProps> = ({
  slot = '8541296371', // Default responsive slot or customizable
  format = 'auto',
  layout,
  layoutKey,
  className = '',
  label = 'IKLAN / REKOMENDASI SPONSOR',
  minHeight = 'min-h-[120px] sm:min-h-[250px]',
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only push once per mount and ensure window.adsbygoogle exists
    if (!pushedRef.current && adRef.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        // Silently handle AdSense duplicate push or adblocker errors
        console.debug('AdSense unit initialized or suppressed by browser settings:', err);
      }
    }
  }, []);

  return (
    <aside
      aria-label="Informasi Iklan dan Sponsor Edukasi"
      className={`my-6 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/80 p-3 text-center transition-all ${className}`}
    >
      {/* Policy-compliant micro label to maintain high publisher quality score */}
      <div className="mb-2 flex items-center justify-between border-b border-stone-200/60 pb-1 px-1">
        <span className="text-[10px] font-semibold tracking-wider text-stone-600 uppercase">
          {label}
        </span>
        <span className="text-[9px] text-stone-500 hover:text-stone-700">
          Google AdSense Verified
        </span>
      </div>

      {/* Ad container with minimum reserved height to guarantee Zero CLS */}
      <div className={`relative flex items-center justify-center overflow-hidden w-full ${minHeight}`}>
        <ins
          ref={adRef}
          className="adsbygoogle block w-full text-center"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-4454451699877502"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
          {...(layout ? { 'data-ad-layout': layout } : {})}
          {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
        />
      </div>

      <div className="mt-1 text-[9px] text-stone-500">
        Iklan relevan mendukung keberlanjutan program beasiswa & pendidikan kesetaraan PKBM Celah Cahaya.
      </div>
    </aside>
  );
};
