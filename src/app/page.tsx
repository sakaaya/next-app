import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        <Link href="/list">go to List</Link>
      </p>
      <p>
        <Link href="/testPost">go to testPost</Link>
      </p>
    </>
  );
}
