// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

// package.json scripts to add:
/*
{
  "scripts": {
    "build": "next build",
    "build:static": "next build && next export",
    "serve:static": "npx serve out"
  }
}
*/

// Required modifications for static export:

// 1. Remove redirect from app/page.tsx
// app/page.tsx
export default function RootPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">🍃</span>
        </div>
        <h1 className="text-2xl font-bold text-blue-600 mb-4">BizFit</h1>
        <p className="text-gray-600 mb-6">내게 딱 맞는 지원사업</p>
        <div className="space-y-3">
          <a
            href="/home/"
            className="block w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            시작하기
          </a>
          <a
            href="/auth/login/"
            className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            로그인
          </a>
        </div>
      </div>
    </div>
  );
}

// 2. Update navigation links to use <a> tags instead of Next.js Link for static export
// Example for MobileBottomNav component:

function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
      <a href="/home/" className="flex flex-col items-center p-2 text-blue-600">
        <div className="w-6 h-6 mb-1">🏠</div>
        <span className="text-xs">홈</span>
      </a>
      <a href="/search/" className="flex flex-col items-center p-2 text-gray-600">
        <div className="w-6 h-6 mb-1">🔍</div>
        <span className="text-xs">공고조회</span>
      </a>
      <a href="/liked/" className="flex flex-col items-center p-2 text-gray-600">
        <div className="w-6 h-6 mb-1">❤️</div>
        <span className="text-xs">찜</span>
      </a>
      <a href="/my/" className="flex flex-col items-center p-2 text-gray-600">
        <div className="w-6 h-6 mb-1">👤</div>
        <span className="text-xs">마이</span>
      </a>
    </nav>
  );
}

// 3. For forms that need to submit data, use client-side handling
// Example for business registration form:

'use client';

import { useState } from 'react';

export default function BusinessSignupPage() {
  const [formData, setFormData] = useState({
    businessNumber: '',
    companyName: '',
    // ... other fields
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in localStorage for static site
    if (typeof window !== 'undefined') {
      localStorage.setItem('businessData', JSON.stringify(formData));
      // Navigate using window.location for static sites
      window.location.href = '/auth/signup/business/details/';
    }
  };

  // ... rest of component
}

// 4. For data persistence in static site, use localStorage
// Example utility functions:

// utils/storage.ts
export const storage = {
  // User data
  setUserData: (data: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userData', JSON.stringify(data));
    }
  },

  getUserData: () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('userData');
      return data ? JSON.parse(data) : null;
    }
    return null;
  },

  // Liked policies
  getLikedPolicies: () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('likedPolicies');
      return data ? JSON.parse(data) : [];
    }
    return [];
  },

  setLikedPolicies: (policies: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('likedPolicies', JSON.stringify(policies));
    }
  },

  // Notifications
  getNotifications: () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('notifications');
      return data ? JSON.parse(data) : [];
    }
    return [];
  },

  setNotifications: (notifications: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notifications', JSON.stringify(notifications));
    }
  },

  // Settings
  getSettings: () => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('settings');
      return data ? JSON.parse(data) : { pushNotifications: false };
    }
    return { pushNotifications: false };
  },

  setSettings: (settings: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('settings', JSON.stringify(settings));
    }
  }
};

// 5. Update pages to use static data and localStorage
// Example for HomePage with static data:

'use client';

import { useEffect, useState } from 'react';
import { storage } from '../utils/storage';

export default function HomePage() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Load user data from localStorage
    const data = storage.getUserData();
    setUserData(data);
  }, []);

  const userName = userData?.name || '길동';

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-lg font-semibold">BizFit</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">안녕하세요, {userName}님</span>
          <a href="/notifications/" className="relative">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </a>
        </div>
      </header>

      {/* Static policy data */}
      <main className="px-4 py-6">
        <div className="mb-6">
          <h1 className="text-lg font-medium mb-2">내게 딱 맞는 지원사업</h1>
          <p className="text-sm text-gray-600">
            메인 진입시, 나에게 맞는 맞춤정책을 유튜브 숏츠 형식으로 빠르게 내용을 파악할수 있게끔 적용
          </p>
        </div>

        <PolicyCard
          title="2025년 용산구 골목상권 공동체 육성 및 활성화 지원 사업 추가 공고"
          agency="용산구청"
          period="24.05.01(수)~25.12.31(수)"
          amount="1,500만원"
          location="서울특별시 용산구"
          matchRate="70%"
          tags={["축제", "홍보사업", "이벤트사업"]}
        />
      </main>

      <MobileBottomNav />
    </div>
  );
}

// 6. Build and deployment commands:
/*
# To build static site:
npm run build
npm run export

# The static files will be in the 'out' directory
# You can serve them with any static file server:
npx serve out

# Or deploy to services like:
# - Netlify: drag and drop the 'out' folder
# - Vercel: connect your repo and enable static export
# - GitHub Pages: upload 'out' contents to gh-pages branch
# - Any CDN or static hosting service
*/

// 7. .gitignore additions for static export:
/*
# Static export
/out/
*.tsbuildinfo
*/

// 8. For GitHub Pages deployment, add this to package.json:
/*
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build && npm run export",
    "deploy": "gh-pages -d out"
  }
}
*/
