'use client';

import Link from 'next/link';
import { useState } from 'react';

function PolicyListItem({
  id,
  title,
  agency,
  period,
  amount,
  matchRate,
  tags,
  onRemove
}: {
  id: number;
  title: string;
  agency: string;
  period: string;
  amount: string;
  matchRate: string;
  tags: string[];
  onRemove: (id: number) => void;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900 flex-1 pr-2 text-sm">{title}</h3>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="text-gray-400 hover:text-red-500"
          >
            🗑️
          </button>
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

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium mb-2">공고 목록을 삭제하시겠습니까?</h3>
            <p className="text-gray-600 mb-4 text-sm">
              삭제 시, 찜한 공고 리스트에서 삭제됩니다.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded text-gray-600"
              >
                취소
              </button>
              <button
                onClick={() => {
                  onRemove(id);
                  setShowDeleteModal(false);
                }}
                className="flex-1 py-2 bg-red-500 text-white rounded"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function LikedPage() {
  const [likedPolicies, setLikedPolicies] = useState([
    {
      id: 1,
      title: "소상공인 정책지원금",
      agency: "국토교통부",
      period: "2025.07.18 D-10",
      amount: "1억 5천만원",
      matchRate: "60%",
      tags: ["소상공인", "보조금"]
    },
    {
      id: 2,
      title: "소상공인 정책지원금",
      agency: "국토교통부",
      period: "2025.07.18 D-10",
      amount: "1억 5천만원",
      matchRate: "60%",
      tags: ["소상공인", "보조금"]
    },
    {
      id: 3,
      title: "소상공인 정책지원금",
      agency: "국토교통부",
      period: "2025.07.18 D-10",
      amount: "1억 5천만원",
      matchRate: "60%",
      tags: ["소상공인", "보조금"]
    }
  ]);

  const handleRemovePolicy = (id: number) => {
    setLikedPolicies(prev => prev.filter(policy => policy.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-4 py-3 flex items-center border-b">
        <h1 className="text-lg font-semibold">내가 찜한 공고</h1>
        <div className="ml-auto">
          <Link href="/notifications" className="relative">
            <span className="text-xl">🔔</span>
          </Link>
        </div>
      </header>

      <main className="px-4 py-4">
        {likedPolicies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <p className="text-gray-500">찜한 공고가 없습니다</p>
            <Link
              href="/search"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
            >
              공고 찾아보기
            </Link>
          </div>
        ) : (
          likedPolicies.map((policy) => (
            <PolicyListItem
              key={policy.id}
              id={policy.id}
              title={policy.title}
              agency={policy.agency}
              period={policy.period}
              amount={policy.amount}
              matchRate={policy.matchRate}
              tags={policy.tags}
              onRemove={handleRemovePolicy}
            />
          ))
        )}
      </main>
    </div>
  );
}
