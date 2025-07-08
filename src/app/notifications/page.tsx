'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NotificationsPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: '[추천] 길동님에게 꼭 맞는 정책이 도착했어요!',
      time: '5분 전',
      type: 'recommendation'
    },
    {
      id: 2,
      title: '[마감 임박] K-Pass 신청이 3일 후 종료됩니다.',
      time: '36분 전',
      type: 'deadline'
    },
    {
      id: 3,
      title: '[신청 오픈] 소상공인 창업 지원금 오늘부터 신청..',
      time: '2024.12.01',
      type: 'announcement'
    },
    {
      id: 4,
      title: '[알림] 소상공인 방역지원금 공고 내용이 수정....',
      time: '2024.09.01',
      type: 'update'
    },
    {
      id: 5,
      title: '[추천] 사업자등록증 정보 기반으로 맞춤 정책 2...',
      time: '2024.08.01',
      type: 'recommendation'
    },
    {
      id: 6,
      title: '[알림] 경기 청년선정자 발표일...',
      time: '2024.07.01',
      type: 'update'
    },
    {
      id: 7,
      title: '[추천] 길동님, 소상공인 맞춤형 정책 3건을 새로...',
      time: '2024.06.01',
      type: 'recommendation'
    },
    {
      id: 8,
      title: '[마감 임박] 청년 소상공인 지원 신청 마감까지...',
      time: '2024.05.01',
      type: 'deadline'
    },
    {
      id: 9,
      title: '[추천] 사업장 정보 기반으로 새로운 정책이 추...',
      time: '2024.01.01',
      type: 'recommendation'
    }
  ]);

  const handleDeleteAll = () => {
    setNotifications([]);
    setShowDeleteModal(false);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'recommendation': return '💡';
      case 'deadline': return '⏰';
      case 'announcement': return '📢';
      case 'update': return 'ℹ️';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-3 flex items-center border-b">
        <Link href="/home" className="mr-3">
          <span className="text-xl">←</span>
        </Link>
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-lg font-semibold">BizFit</span>
        </div>
        <Link href="/home" className="text-blue-600">
          <span className="text-sm">홈 (메인페이지)</span>
        </Link>
      </header>

      <main className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">알림</h1>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="text-sm text-gray-600"
          >
            전체삭제
          </button>
        </div>

        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <p className="text-gray-500">알림이 없습니다</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">
                    {getNotificationIcon(notification.type)}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">
                      {notification.title}
                    </h3>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium mb-2">모든 알림 삭제</h3>
            <p className="text-gray-600 mb-4">
              모든 알림이 삭제됩니다. 삭제하시겠습니까?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded text-gray-600"
              >
                취소
              </button>
              <button
                onClick={handleDeleteAll}
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
