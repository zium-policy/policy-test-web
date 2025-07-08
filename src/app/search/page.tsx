'use client';

import Link from 'next/link';
import { useState } from 'react';

function PolicyListItem({ title, agency, period, amount, matchRate, tags }: {
  title: string;
  agency: string;
  period: string;
  amount: string;
  matchRate: string;
  tags: string[];
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-900 flex-1 pr-2 text-sm">{title}</h3>
        <button className="text-gray-400">❤️</button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
        <div>지역 : 전국</div>
        <div>지원금 : {amount}</div>
        <div>접수 마감일: {period}</div>
        <div className="text-red-500 font-medium">매칭률 : {matchRate}</div>
      </div>

      <div className="flex gap-1 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-800 text-white text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-lg font-semibold">BizFit</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">안녕하세요, 길동님</span>
          <Link href="/notifications" className="relative">
            <span className="text-xl">🔔</span>
          </Link>
        </div>
      </header>

      <div className="bg-white px-4 py-3 border-b">
        <div className="flex gap-2 mb-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="검색어 입력"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-3 top-2.5 text-gray-400">🔍</button>
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 text-gray-600"
            >
              취소
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-1">
            정렬 <span>▼</span>
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-1"
          >
            필터 <span>▼</span>
          </button>
        </div>

        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs flex items-center gap-1">
            서울특별시 전체 <button>✕</button>
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-xs flex items-center gap-1">
            경영 <button>✕</button>
          </span>
        </div>
      </div>

      <main className="px-4 py-4">
        <PolicyListItem
          title="소상공인 정책지원금"
          agency="국토교통부"
          period="2025.07.18 D-10"
          amount="1억 5천만원"
          matchRate="55%"
          tags={["소상공인", "보조금"]}
        />
        <PolicyListItem
          title="소상공인 정책지원금"
          agency="국토교통부"
          period="2025.07.18 D-10"
          amount="1억 5천만원"
          matchRate="60%"
          tags={["소상공인", "보조금"]}
        />
        <PolicyListItem
          title="소상공인 정책지원금"
          agency="국토교통부"
          period="2025.07.18 D-10"
          amount="1억 5천만원"
          matchRate="20%"
          tags={["소상공인", "보조금"]}
        />

        <div className="text-center py-4">
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg">
            더보기
          </button>
        </div>
      </main>
    </div>
  );
}
