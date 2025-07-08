import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/list</h1>
      <Link href="/search">Go to Search</Link>
      <Link href="/notifications">Go to Notifications</Link>
    </div>
  );
}

