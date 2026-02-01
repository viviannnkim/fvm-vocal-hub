import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon, Mic, Monitor, Users, Globe as GlobeIcon, Sprout } from 'lucide-react';
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

function KakaoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M10 0C4.4767 0 0 3.46596 0 7.74549C0 10.5302 1.89737 12.9709 4.74004 14.3335C4.53072 15.1007 3.98379 17.1049 3.87576 17.5348C3.74072 18.0706 4.07157 18.0574 4.2944 17.9185C4.46995 17.806 7.03579 16.0929 8.14315 15.3587C8.74409 15.4447 9.36529 15.491 10 15.491C15.5233 15.491 20 12.025 20 7.74549C20 3.46596 15.5233 0 10 0Z" fill="#371C1D"/>
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">
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
        <div className="flex items-center gap-2">
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
              <KakaoIcon />
              {t('cta.kakao')}
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground/80 hover:bg-muted'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Services Submenu */}
              <div className="mt-2 border-t pt-2">
                <p className="px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">
                  {t('nav.services')}
                </p>
                {services.map((service) => (
                  <Link
                    key={service.key}
                    to={service.path}
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <service.icon className="h-4 w-4 text-accent" />
                    {t(`service.${service.key}`)}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="justify-start gap-2"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="justify-start gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {language === 'ko' ? 'English' : '한국어'}
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a
                    href="https://pf.kakao.com/_WvSxjxj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <KakaoIcon />
                    {t('cta.kakao')}
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
