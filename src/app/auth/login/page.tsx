import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <h1>/auth/login</h1>
      <Link href="/auth/signup">Sign Up</Link>
    </div>
  );
}
