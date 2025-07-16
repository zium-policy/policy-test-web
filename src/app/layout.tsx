'use client';

import './globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!localStorage.getItem('deviceId')) {
      localStorage.setItem('deviceId', crypto.randomUUID());
    }
  }, []);

  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}



