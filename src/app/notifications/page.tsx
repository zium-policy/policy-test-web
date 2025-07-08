import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/notifications</h1>
      <Link href="/post/1">Go to Post</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}
