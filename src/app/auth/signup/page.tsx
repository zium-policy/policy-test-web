'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [showCancelModal, setShowCancelModal] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <button
          onClick={() => setShowCancelModal(true)}
          className="text-xl"
        >
          ✕
        </button>
        <h1 className="text-lg font-semibold">프로필 생성</h1>
        <div></div>
      </header>

      <main className="flex-1 px-6 py-8">
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-medium mb-8 text-center">사업자 유형</h2>

          <div className="space-y-4">
            <Link
              href="/auth/signup/business"
              className="block w-full bg-gray-600 text-white py-4 rounded-lg font-medium text-center hover:bg-gray-700 transition-colors"
            >
              소상공인
            </Link>
            <Link
              href="/auth/signup/startup"
              className="block w-full bg-gray-600 text-white py-4 rounded-lg font-medium text-center hover:bg-gray-700 transition-colors"
            >
              예비 창업자
            </Link>
          </div>
        </div>
      </main>

      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium mb-2">회원가입을 취소하시겠습니까?</h3>
            <p className="text-gray-600 mb-4 text-sm">
              취소 시, 지금까지의 입력한 정보는 저장되지 않습니다
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded text-gray-600"
              >
                취소
              </button>
              <Link
                href="/home"
                className="flex-1 py-2 bg-blue-500 text-white rounded text-center"
              >
                확인
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
