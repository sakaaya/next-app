import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lerning Page',
  description: 'Lerning Page With NextJs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    script.id = 'GTM-test';
    script.innerHTML = `
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W7P01QQX97"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W7P01QQX97');
        </script>
          `;
    document.head.appendChild(script);
  }
  return (
    <>
      <html lang="en">
        <head></head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
