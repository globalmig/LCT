import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050A18] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">LCT Holdings</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>서울특별시 강남구 테헤란로 123</li>
              <li>LCT빌딩 10층</li>
              <li className="pt-2">TEL: 02-1234-5678</li>
              <li>FAX: 02-1234-5679</li>
              <li>사업자등록번호: 123-45-67890</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">빠른메뉴</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "홈" },
                { href: "/about", label: "회사소개" },
                { href: "/business", label: "사업분야" },
                { href: "/contact", label: "문의" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-[#2563EB] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">사업문의</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 text-xs mb-1">이메일</span>
                <a
                  href="mailto:business@lctholdings.com"
                  className="hover:text-[#2563EB] transition-colors duration-200"
                >
                  business@lctholdings.com
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-gray-500 text-xs mb-1">전화</span>
                <a
                  href="tel:0212345678"
                  className="hover:text-[#2563EB] transition-colors duration-200"
                >
                  02-1234-5678
                </a>
              </li>
              <li className="pt-2 text-gray-500 text-xs">
                평일 09:00 – 18:00 (주말·공휴일 제외)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-500">
          © 2024 LCT Holdings. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
