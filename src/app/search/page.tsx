import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/search</h1>
      <Link href="/post/1">View Post</Link>
      <Link href="/search/filter">Open Filter</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}

