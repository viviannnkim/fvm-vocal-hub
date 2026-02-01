import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n';

const services = [
  { key: 'private', path: '/services/private' },
  { key: 'online', path: '/services/online' },
  { key: 'group', path: '/services/group' },
  { key: 'global', path: '/services/global' },
  { key: 'kids', path: '/services/kids' },
];

const quickLinks = [
  { key: 'nav.curriculum', path: '/curriculum' },
  { key: 'nav.instructors', path: '/instructors' },
  { key: 'nav.reviews', path: '/reviews' },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function NaverBlogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
    </svg>
  );
}

function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.16 4.56 6.48-.2.72-.72 2.64-.84 3.04-.12.52.2.52.4.36.16-.12 2.52-1.68 3.56-2.36.76.12 1.52.16 2.32.16 5.52 0 10-3.48 10-7.68S17.52 3 12 3z"/>
    </svg>
  );
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/from.vivian.music',
    icon: InstagramIcon,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@from.vivian',
    icon: YouTubeIcon,
  },
  {
    name: 'Naver Blog',
    href: 'https://m.blog.naver.com/vivian_artistt',
    icon: NaverBlogIcon,
  },
  {
    name: 'KakaoTalk',
    href: 'https://pf.kakao.com/_WvSxjxj',
    icon: KakaoIcon,
  },
];

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="border-t bg-muted/50 text-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Social */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold">{t('footer.brand')}</h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.key}>
                  <Link
                    to={service.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {t(`service.${service.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t('footer.contact')}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>서울시 관악구 봉천로 218 B1</p>
              <a
                href="https://pf.kakao.com/_WvSxjxj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <KakaoIcon className="h-4 w-4" />
                {language === 'ko' ? '카카오톡 문의' : 'KakaoTalk'}
              </a>
            </div>
          </div>
        </div>

        {/* Business Info & Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-muted-foreground">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span>프롬 비비안 뮤직</span>
              <span className="hidden sm:inline">|</span>
              <span>대표: 김지빈</span>
              <span className="hidden sm:inline">|</span>
              <span>사업자등록번호: 851-14-01025</span>
            </div>
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
