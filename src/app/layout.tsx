import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: 'BizFit - 정책지원금',
  description: '내게 딱 맞는 지원사업',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
