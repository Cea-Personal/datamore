'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
}
