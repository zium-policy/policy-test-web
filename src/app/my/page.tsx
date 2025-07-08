import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/my</h1>
      <Link href="/notifications">Notifications</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}
