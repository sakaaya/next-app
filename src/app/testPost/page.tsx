'use client';

import { Button, Input } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();

  const onClick = () => {
    alert('Click Button');
    router.push('/testPost/step2');
  };
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
