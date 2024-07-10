'use client';

import { Button, Input } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function App() {
  const router = useRouter();

  const onClick = () => {
    alert('Click Button');
    router.push('/testPost/step2');
  };

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
      <h1>test page</h1>
      <Input placeholder="input text"></Input>
      <Button colorScheme="teal" variant="solid" onClick={onClick}>
        Button
      </Button>
      <p>
        <Link href="/">go back</Link>
      </p>
    </>
  );
}
