'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MyPage() {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-4 py-3 flex items-center border-b">
        <div className="flex items-center flex-1">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
          <div>
            <h2 className="font-medium">홍길동</h2>
            <p className="text-sm text-gray-600">hong@ziumks.com</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">활성화된</span>
              <span className="text-xs text-gray-500">프로필 정보</span>
            </div>
          </div>
        </div>
        <Link href="/notifications" className="relative">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Link>
      </header>

      <main className="px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm border mb-4">
          <Link href="/my/profile" className="flex items-center justify-between p-4 border-b">
            <span>사용자 정보 수정</span>
            <span className="text-gray-400">→</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border mb-4">
          <div className="p-4">
            <h3 className="font-medium mb-3">알림 설정</h3>
            <div className="flex items-center justify-between">
              <span>푸시 알림</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    pushNotifications ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    pushNotifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
                <span className="text-xs text-gray-600 ml-2">
                  {pushNotifications ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-600"
          >
            로그아웃
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-600"
          >
            회원 탈퇴
          </button>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex gap-4">
            <Link href="/terms" className="underline">(주)지음지식서비스</Link>
            <Link href="/terms" className="underline">이용약관</Link>
            <Link href="/privacy" className="underline">개인정보처리방침</Link>
          </div>
          <p>대표이사: 이영수 | 주소: 경기도 성남시 수정구</p>
          <p>창업로 42 (시흥동 293) 판교제2테크로밸리</p>
          <p>경기기업성장센터 532호 | TEL: 031-722-2091</p>
        </div>
      </main>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium mb-2">로그아웃</h3>
            <p className="text-gray-600 mb-4">로그아웃 하시겠습니까?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded text-gray-600"
              >
                취소
              </button>
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                }}
                className="flex-1 py-2 bg-blue-500 text-white rounded"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium mb-2">회원 탈퇴</h3>
            <p className="text-gray-600 mb-4">
              탈퇴하시겠습니까? 탈퇴 시, 저장된 정보가 삭제되며 복구되지 않습니다.
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
                  setShowDeleteModal(false);
                }}
                className="flex-1 py-2 bg-red-500 text-white rounded"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
