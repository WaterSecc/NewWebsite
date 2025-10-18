import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Providers from './providers';
import LoadingScreen from '@/components/progressBar/LoadingScreen';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import "../../styles/index.css";
import 'leaflet/dist/leaflet.css';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // ✅ This line is now async-safe
  const locale = params?.locale;

  if (!['en', 'fr'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
