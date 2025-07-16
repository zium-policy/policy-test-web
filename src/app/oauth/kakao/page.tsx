'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function KakaoRedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;

    console.log(code)
    const login = async () => {
      try {
        const res = await fetch('http://localhost:8080/auth/oauth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            provider: 'KAKAO',
            code,
            platform: /iPhone|Android/i.test(navigator.userAgent)
              ? 'CHROME'
              : 'IOS',
            deviceId: localStorage.getItem('deviceId') || '1234567890',
          }),
        });

        if (!res.ok) throw new Error('OAuth failed');
        const data = await res.json();

        localStorage.setItem('accessToken', data.accessToken)

        router.push('/home');
      } catch (err) {
        console.error(err);
        router.push('/error/500');
      }
    };

    login();
  }, [searchParams, router]);

  return <div className="p-6 text-center text-gray-600">카카오 로그인 중...</div>;
}
