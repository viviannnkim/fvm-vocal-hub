import { useLanguage } from '@/lib/i18n';

function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 20 18" fill="currentColor">
      <path d="M10 0C4.4767 0 0 3.46596 0 7.74549C0 10.5302 1.89737 12.9709 4.74004 14.3335C4.53072 15.1007 3.98379 17.1049 3.87576 17.5348C3.74072 18.0706 4.07157 18.0574 4.2944 17.9185C4.46995 17.806 7.03579 16.0929 8.14315 15.3587C8.74409 15.4447 9.36529 15.491 10 15.491C15.5233 15.491 20 12.025 20 7.74549C20 3.46596 15.5233 0 10 0Z"/>
    </svg>
  );
}

export function KakaoFloatingButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://pf.kakao.com/_WvSxjxj"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] text-[#3C1E1E] shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
      aria-label={t('cta.kakao')}
    >
      <KakaoIcon className="h-6 w-6" />
    </a>
  );
}
