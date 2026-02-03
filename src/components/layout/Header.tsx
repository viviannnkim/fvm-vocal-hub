import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon, Mic, Monitor, Users, Globe as GlobeIcon, Sprout, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const services = [
  { key: 'private', path: '/services/private', icon: Mic },
  { key: 'online', path: '/services/online', icon: Monitor },
  { key: 'group', path: '/services/group', icon: Users },
  { key: 'global', path: '/services/global', icon: GlobeIcon },
  { key: 'kids', path: '/services/kids', icon: Sprout },
];

function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className={className}>
      <path d="M10 0C4.4767 0 0 3.46596 0 7.74549C0 10.5302 1.89737 12.9709 4.74004 14.3335C4.53072 15.1007 3.98379 17.1049 3.87576 17.5348C3.74072 18.0706 4.07157 18.0574 4.2944 17.9185C4.46995 17.806 7.03579 16.0929 8.14315 15.3587C8.74409 15.4447 9.36529 15.491 10 15.491C15.5233 15.491 20 12.025 20 7.74549C20 3.46596 15.5233 0 10 0Z" fill="currentColor"/>
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/curriculum', label: t('nav.curriculum') },
    { path: '/instructors', label: t('nav.instructors') },
    { path: '/reviews', label: t('nav.reviews') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border/40 bg-background" style={{ isolation: 'isolate' }}>
      <div className="container flex h-14 md:h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="text-lg md:text-xl font-bold tracking-tight text-primary">
            FVM
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline-block">
            From Vivian Music
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            to="/"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
              location.pathname === '/' ? 'text-accent' : 'text-foreground/80'
            )}
          >
            {t('nav.home')}
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-accent data-[state=open]:text-accent">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.key}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <service.icon className="h-4 w-4 text-accent" />
                              {t(`service.${service.key}`)}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t(`service.${service.key}.desc`)}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/services"
                          className="flex items-center justify-center gap-2 rounded-md bg-primary p-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          {t('services.viewAll')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.path ? 'text-accent' : 'text-foreground/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hidden sm:flex"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden gap-1 sm:flex"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">{language}</span>
          </Button>

          {/* CTA Button */}
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:flex">
            <a
              href="https://pf.kakao.com/_WvSxjxj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <KakaoIcon className="text-[#3C1E1E]" />
              {t('cta.kakao')}
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative z-50 h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 bottom-0 top-14 z-40 bg-background lg:hidden">
        <nav className="h-full overflow-y-auto">
          <div className="container py-6">
            {/* Main Navigation */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground hover:bg-muted'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-colors",
                    location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                  )} />
                </Link>
              ))}
            </div>

            {/* Services Grid */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t('nav.services')}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.key}
                    to={service.path}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-all",
                      "bg-card border border-border/50 hover:border-accent/50 hover:bg-accent/5",
                      location.pathname === service.path && "border-accent/50 bg-accent/5"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      location.pathname === service.path
                        ? "bg-accent text-accent-foreground"
                        : "bg-accent/10 text-accent"
                    )}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">
                      {t(`service.${service.key}`)}
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 mt-3 rounded-xl bg-muted px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('services.viewAll')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Settings Row */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={toggleTheme}
                  className="flex-1 h-12 justify-center gap-2 rounded-xl"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={toggleLanguage}
                  className="flex-1 h-12 justify-center gap-2 rounded-xl"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{language === 'ko' ? 'English' : '한국어'}</span>
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="w-full h-14 text-base rounded-xl bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90 shadow-lg"
              >
                <a
                  href="https://pf.kakao.com/_WvSxjxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <KakaoIcon className="text-[#3C1E1E]" />
                  {t('cta.kakao')}
                </a>
              </Button>
            </div>

            {/* Bottom Spacing for safe area */}
            <div className="h-8" />
          </div>
        </nav>
        </div>
      )}
    </header>
  );
}
