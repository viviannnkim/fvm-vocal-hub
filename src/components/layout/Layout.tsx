import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { KakaoFloatingButton } from './KakaoFloatingButton';

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
}

export function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative z-0">{children}</main>
      {!hideFooter && <Footer />}
      <KakaoFloatingButton />
    </div>
  );
}
