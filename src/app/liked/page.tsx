import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/liked</h1>
      <Link href="/post/1">View Post</Link>
      <Link href="/auth/login">Login</Link>
      <Link href="/notifications">notifications</Link>
    </div>
  );
}
