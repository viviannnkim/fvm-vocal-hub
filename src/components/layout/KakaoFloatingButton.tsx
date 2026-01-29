import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function KakaoFloatingButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://pf.kakao.com/_example"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] text-[#3C1E1E] shadow-lg transition-transform hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
      aria-label={t('cta.kakao')}
    >
      <svg className="h-7 w-7 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.16 4.56 6.48-.2.72-.72 2.64-.84 3.04-.12.52.2.52.4.36.16-.12 2.52-1.68 3.56-2.36.76.12 1.52.16 2.32.16 5.52 0 10-3.48 10-7.68S17.52 3 12 3z"/>
      </svg>
    </a>
  );
}
