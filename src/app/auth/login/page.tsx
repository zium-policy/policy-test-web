import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4">
        <Link href="/home">
          <button className="text-xl">✕</button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">🍃</span>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">BizFit</h1>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              애플로 로그인
            </button>
            <button className="w-full bg-yellow-400 text-black py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
              카카오톡으로 로그인
            </button>
            <button className="w-full bg-green-500 text-white py-4 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Naver로 로그인
            </button>
            <button className="w-full bg-white border border-gray-300 text-gray-700 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              구글로 로그인
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              로그인 시 <Link href="/terms" className="underline">이용약관</Link> 및{' '}
              <Link href="/privacy" className="underline">개인정보처리방침</Link>에 동의하게 됩니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
