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
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.contact', path: '/contact' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold">{t('footer.brand')}</h3>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              {t('footer.description')}
            </p>
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
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
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
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
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
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <a
                href="https://pf.kakao.com/_example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.16 4.56 6.48-.2.72-.72 2.64-.84 3.04-.12.52.2.52.4.36.16-.12 2.52-1.68 3.56-2.36.76.12 1.52.16 2.32.16 5.52 0 10-3.48 10-7.68S17.52 3 12 3z"/>
                </svg>
                KakaoTalk
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
