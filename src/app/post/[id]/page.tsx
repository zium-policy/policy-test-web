import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/post/:id</h1>
      <Link href="/home">Back to Home</Link>
    </div>
  );
}
