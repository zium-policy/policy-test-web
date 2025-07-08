'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BusinessSignupPage() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [formData, setFormData] = useState({
    businessNumber: '',
    companyName: '',
    representative: '',
    businessLocation: '',
    industry: '',
    businessType: '',
    establishedDate: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.businessNumber) {
      newErrors.businessNumber = '필수 입력입니다.';
    } else if (!/^\d{3}-\d{2}-\d{5}$/.test(formData.businessNumber)) {
      newErrors.businessNumber = '유효하지 않은 사업자등록번호입니다. (###-##-#####)';
    }

    if (!formData.companyName) {
      newErrors.companyName = '필수 입력입니다.';
    } else if (formData.companyName.length < 2) {
      newErrors.companyName = '2자 이상 입력해주세요.';
    }

    if (!formData.representative) {
      newErrors.representative = '필수 입력입니다.';
    } else if (formData.representative.length < 2) {
      newErrors.representative = '2자 이상 입력해주세요.';
    }

    if (!formData.businessLocation) {
      newErrors.businessLocation = '필수 입력입니다.';
    } else if (formData.businessLocation.length < 5) {
      newErrors.businessLocation = '5자 이상 입력해주세요.';
    }

    if (!formData.industry) {
      newErrors.industry = '필수 선택입니다.';
    }

    if (!formData.businessType) {
      newErrors.businessType = '필수 선택입니다.';
    }

    if (!formData.establishedDate) {
      newErrors.establishedDate = '필수 입력입니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      window.location.href = '/auth/signup/business/details';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="p-4 flex items-center border-b">
        <Link href="/auth/signup" className="mr-3">
          <span className="text-xl">←</span>
        </Link>
        <h1 className="text-lg font-semibold">사업자등록정보 입력</h1>
        <button
          onClick={() => setShowCancelModal(true)}
          className="ml-auto text-gray-600"
        >
          취소
        </button>
      </header>

      <main className="px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              사업자등록번호 *
            </label>
            <input
              type="text"
              placeholder="281-29-48292"
              value={formData.businessNumber}
              onChange={(e) => handleInputChange('businessNumber', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.businessNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.businessNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.businessNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              상호 (법인명) *
            </label>
            <input
              type="text"
              placeholder="지음지식서비스"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.companyName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              업종 *
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.industry ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">선택하세요</option>
              <option value="음식점업">음식점업</option>
              <option value="제조업">제조업</option>
              <option value="소매업">소매업</option>
              <option value="서비스업">서비스업</option>
            </select>
            {errors.industry && (
              <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              업태 *
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => handleInputChange('businessType', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.businessType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">선택하세요</option>
              <option value="한식 일반 음식점업">한식 일반 음식점업</option>
              <option value="양식 음식점업">양식 음식점업</option>
              <option value="중식 음식점업">중식 음식점업</option>
            </select>
            {errors.businessType && (
              <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              대표자 *
            </label>
            <input
              type="text"
              placeholder="이영수"
              value={formData.representative}
              onChange={(e) => handleInputChange('representative', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.representative ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.representative && (
              <p className="text-red-500 text-xs mt-1">{errors.representative}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              사업장 (소재지) *
            </label>
            <input
              type="text"
              placeholder="창업로 42"
              value={formData.businessLocation}
              onChange={(e) => handleInputChange('businessLocation', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.businessLocation ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.businessLocation && (
              <p className="text-red-500 text-xs mt-1">{errors.businessLocation}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              개업일 * (ex: 1999.01.01)
            </label>
            <input
              type="text"
              placeholder="1890.10.10"
              value={formData.establishedDate}
              onChange={(e) => handleInputChange('establishedDate', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.establishedDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.establishedDate && (
              <p className="text-red-500 text-xs mt-1">{errors.establishedDate}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              다음
            </button>
          </div>
        </form>
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
