import Link from "next/link";

const businessAreas = [
  {
    number: "01",
    title: "리페어 장비 사업",
    summary: "폴더블 디바이스 전용 수리 장비 개발 및 공급",
    description:
      "LCTech Holdings는 폴더블 스마트폰을 비롯한 차세대 디바이스의 디스플레이 수리에 특화된 고정밀 장비를 자체 개발합니다. 자동화 수리 시스템을 통해 기술 숙련도와 관계없이 일관된 품질의 서비스를 구현합니다.",
    bullets: ["폴더블 디스플레이 전용 리페어 장비 설계·제조", "자동화 수리 시스템으로 공정 효율 극대화", "파트너사 전용 장비 공급 및 유지보수 지원", "지속적인 장비 업그레이드 및 기술 지원"],
    bg: "white",
  },
  {
    number: "02",
    title: "기술 라이선스 사업",
    summary: "독점 기술 제공, 공정 표준화, 전문 교육 프로그램",
    description:
      "자체 보유한 LCTech Holdings 특허 기술을 라이선스 방식으로 제공하여 파트너사의 기술 경쟁력을 높입니다. 표준화된 공정 시스템과 체계적인 교육 프로그램을 통해 서비스 품질을 균일하게 유지합니다.",
    bullets: ["융합 세정 및 무손상 분리 기술 라이선스 제공", "표준 공정 매뉴얼 및 운영 가이드라인 공급", "현장 중심 기술 교육 및 자격 인증 프로그램", "기술 변화에 대응하는 정기 업데이트 지원"],
    bg: "gray",
  },
  {
    number: "03",
    title: "프랜차이즈 플랫폼 사업",
    summary: "리페어 가맹 운영, 장비·자재 공급, 로열티 기반 수익 모델",
    description:
      "BRICKSTECH 플랫폼 기반의 리페어 프랜차이즈 시스템을 운영합니다. FoldCare를 포함한 서비스 운영 경험을 바탕으로 가맹점에 장비와 자재를 일괄 공급하고, 로열티 기반의 안정적인 수익 구조로 파트너와 함께 성장합니다.",
    bullets: ["전국 리페어 가맹 네트워크 구축 및 운영", "장비·자재 통합 공급 채널 제공", "로열티 기반 수익 배분 구조", "BRICKSTECH 플랫폼을 통한 원스톱 운영 관리"],
    bg: "white",
  },
  {
    number: "04",
    title: "친환경 리퍼비시 사업",
    summary: "디스플레이 재사용, ESG 가치 실현, 자원 순환 경제",
    description: "손상된 폴더블 디스플레이를 복원·재사용하는 리퍼비시 사업을 통해 전자 폐기물을 줄이고 ESG 경영 가치를 실현합니다. 자원 순환 경제 모델로 지속 가능한 비즈니스 생태계를 구축합니다.",
    bullets: ["폴더블 디스플레이 복원 및 리퍼비시 처리", "전자 폐기물 감소를 통한 환경 부담 최소화", "ESG 지표 개선 및 지속가능경영 지원", "친환경 공정 인증 추진 및 탄소중립 로드맵"],
    bg: "gray",
  },
  {
    number: "05",
    title: "미래 확장 사업",
    summary: "폴더블 태블릿·노트북·차량용 디스플레이로 영역 확장",
    description:
      "스마트폰을 넘어 폴더블 태블릿, 노트북 디스플레이, 차량용 인포테인먼트 디스플레이 수리 시장으로 사업 영역을 확장합니다. 디스플레이 리페어 기술의 응용 범위를 지속 넓혀 미래 시장을 선점합니다.",
    bullets: ["폴더블 태블릿 디스플레이 수리 기술 개발", "노트북 OLED 디스플레이 리페어 솔루션", "차량용 디스플레이(IVI) 수리 시장 진출", "글로벌 시장 진출을 위한 기술 표준화 추진"],
    bg: "white",
  },
];

export default function BusinessPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #050A18 0%, #0D1A4A 60%, #1428A0 100%)",
          minHeight: "60vh",
        }}
        className="relative flex flex-col items-center justify-center px-6 py-24"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, #2563EB 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1428A0 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300 uppercase">LCTech Holdings</p>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">사업분야</h1>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-200">
            <Link href="/" className="transition-colors hover:text-white">
              홈
            </Link>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white">사업분야</span>
          </nav>
        </div>
      </section>

      {/* 사업 영역 개요 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Business Overview</p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">사업 영역 개요</h2>
          <p className="mx-auto max-w-3xl text-base leading-9 text-gray-600">
            LCTech Holdings는 폴더블 디바이스 리페어 생태계를 구성하는 5개의 핵심 사업 영역을 운영합니다. 장비 개발부터 기술 라이선스, 프랜차이즈 플랫폼, 친환경 리퍼비시, 미래 확장 사업까지 리페어
            산업 전 밸류체인을 통합 관리하여 지속 가능한 성장을 추구합니다.
          </p>

          {/* 사업 영역 번호 요약 */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {businessAreas.map((area) => (
              <a
                key={area.number}
                href={`#area-${area.number}`}
                className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-600 hover:text-white"
              >
                <span className="font-mono text-xs font-bold opacity-70">{area.number}</span>
                {area.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 사업 영역 */}
      {businessAreas.map((area) => (
        <section key={area.number} id={`area-${area.number}`} style={{ background: area.bg === "gray" ? "#F8FAFC" : "#FFFFFF" }} className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
              {/* Left: 번호 */}
              <div className="flex flex-col justify-start pt-2">
                <span className="select-none font-mono text-[6rem] font-black leading-none tracking-tighter lg:text-[8rem]" style={{ color: "#1428A0", opacity: 0.15 }} aria-hidden="true">
                  {area.number}
                </span>
                <span className="-mt-4 font-mono text-2xl font-bold tracking-wide" style={{ color: "#1428A0" }}>
                  {area.number}
                </span>
              </div>

              {/* Right: 내용 */}
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase">Business Area</p>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{area.title}</h3>
                <p className="mb-4 text-base font-medium text-blue-600">{area.summary}</p>
                <p className="mb-8 text-base leading-8 text-gray-600">{area.description}</p>

                <ul className="space-y-3">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "#1428A0" }} aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm leading-7 text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 문의 CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1428A0 0%, #2563EB 100%)",
        }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">Contact</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">사업 파트너십 문의</h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-blue-100">
            LCTech Holdings와 함께 리페어 산업의 미래를 열어가실 파트너를 찾습니다. 사업 제휴, 가맹 문의, 기술 라이선스 등 모든 파트너십 관련 문의를 환영합니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-blue-700"
            >
              파트너십 문의하기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-blue-100 transition-all duration-200 hover:text-white">
              회사소개 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
