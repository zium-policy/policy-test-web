import Link from 'next/link';

function PolicyCard({ title, agency, period, amount, location, matchRate, tags }: {
  title: string;
  agency: string;
  period: string;
  amount: string;
  location: string;
  matchRate: string;
  tags: string[];
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-gray-900 flex-1 pr-2">{title}</h3>
        <button className="text-gray-400">❤️</button>
      </div>

      <div className="space-y-2 text-sm text-gray-600 mb-3">
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2">📅</span>
          <span>{period}</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2">🏢</span>
          <span>{agency}</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2">👥</span>
          <span>골목상권을 기반으로 하는 30명 이상의 소상공인 단체</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2">📍</span>
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2">💰</span>
          <span className="font-medium">{amount}</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2">🎯</span>
          <span className="text-red-500 font-medium">{matchRate}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="text-sm text-gray-600 mb-4">
        <p>축제 / 홍보사업 : 지역상권 활성화를 위한 거리축제, 플리마켓 운영및 영상제작, 온라인 홍보등</p>
        <p>이벤트 사업 : 고객유치를 위한 공동세일, 쿠폰 발행등 마케팅 활동</p>
        <p className="mt-2 font-medium">방문 접수</p>
        <p>컨설턴트 또는 대행업체의 대리접수및 일괄접수 불가 (단체 대표 신청 원칙)</p>
      </div>

      <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium">
        공고 홈페이지 바로가기
      </button>
    </div>
  );
}

export default function HomePage() {
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
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>
      </header>

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
    </div>
  );
}

