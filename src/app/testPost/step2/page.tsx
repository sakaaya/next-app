'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    let script = null;
    if (document.querySelector('#GTM-test') === null) {
      script = document.createElement('script');
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
  }, []);
  return (
    <>
      <h1>Thanks Page</h1>
      <p>
        <Link href="/">go home</Link>
      </p>
    </>
  );
}
