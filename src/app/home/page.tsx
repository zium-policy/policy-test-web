import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>/home</h1>
      <nav className="flex flex-col gap-2 mt-4">
        <Link href="/notifications">Notifications</Link>
        <Link href="/list">List</Link>
        <Link href="/liked">Liked</Link>
        <Link href="/my">My</Link>
        <Link href="/post/1">Sample Post</Link>
        <Link href="/auth/login">Login</Link>
      </nav>
    </div>
  );
}

