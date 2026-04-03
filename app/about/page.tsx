import Link from "next/link";

export default function AboutPage() {
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
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #2563EB 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1428A0 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-blue-300 uppercase">
            LCT Holdings
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            회사소개
          </h1>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-200">
            <Link href="/" className="transition-colors hover:text-white">
              홈
            </Link>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white">회사소개</span>
          </nav>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: 소개 텍스트 */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
                About Us
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                LCT Holdings
              </h2>
              <div className="space-y-4 text-base leading-8 text-gray-600">
                <p>
                  LCT Holdings는 폴더블 디바이스 리페어 산업을 기반으로 설립된 기술 기반 홀딩스 기업입니다.
                  빠르게 성장하는 스마트 디바이스 수리 시장에서 독보적인 기술력과 노하우를 바탕으로
                  산업 표준을 선도하고 있습니다.
                </p>
                <p>
                  기술·장비·가맹 네트워크를 통합 운영하는 플랫폼 구조를 통해 파트너사에 체계적인
                  솔루션을 제공하며, 수리 산업의 전 과정을 표준화하고 있습니다.
                </p>
                <p>
                  자체 개발한 LCTech 기술을 기반으로 차세대 리페어 산업 표준을 구축하고,
                  BRICKSTECH 플랫폼을 통해 전국 파트너 네트워크와 긴밀히 연결됩니다.
                </p>
              </div>
            </div>

            {/* Right: 숫자 통계 */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "설립연도", value: "2023", unit: "년" },
                { label: "보유특허", value: "3", unit: "+" },
                { label: "파트너사", value: "20", unit: "+" },
                { label: "서비스지역", value: "전국", unit: "" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center"
                >
                  <span className="text-4xl font-bold tracking-tight text-blue-700 sm:text-5xl">
                    {stat.value}
                    <span className="text-2xl text-blue-400">{stat.unit}</span>
                  </span>
                  <span className="mt-3 text-sm font-medium text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 제공 서비스 */}
      <section style={{ background: "#F8FAFC" }} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
              Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              제공 서비스
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "수리용 기계 공급",
                desc: "고정밀 폴더블 디바이스 수리 장비를 개발·제조하여 파트너사에 안정적으로 공급합니다.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: "리페어 필름 및 자재 공급",
                desc: "디스플레이 복원에 최적화된 고품질 리페어 필름과 전용 자재를 지속 공급합니다.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "기술 교육 및 운영 시스템",
                desc: "현장 중심의 기술 교육 프로그램과 체계적인 운영 시스템으로 파트너 역량을 강화합니다.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "표준 공정 매뉴얼 제공",
                desc: "LCT가 자체 개발한 표준 공정 매뉴얼로 균일한 서비스 품질을 전국 어디서나 유지합니다.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "지속 기술 지원",
                desc: "기술 환경 변화에 대응하는 지속적인 업데이트와 전담 기술 지원 서비스를 제공합니다.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-7 text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 및 특허 */}
      <section
        style={{ background: "#050A18" }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
              Technology & Patents
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              LCTech 융합 세정 기술
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-400">
              자체 특허 보유 기술을 바탕으로 폴더블 디스플레이 수리의 새로운 기준을 제시합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "융합 세정 기술",
                desc: "복수의 세정 방식을 융합하여 디스플레이 표면의 이물질과 잔여 접착제를 완전 제거하는 독자 기술입니다.",
                badge: "특허 등록",
              },
              {
                title: "무손상 분리 기술",
                desc: "폴더블 디스플레이의 정밀 레이어를 손상 없이 분리·복원하는 비파괴 공정 기술로 수율을 극대화합니다.",
                badge: "특허 출원",
              },
              {
                title: "친환경 공정",
                desc: "유해 화학물질 사용을 최소화하고 자원 재활용률을 높인 친환경 리페어 공정으로 ESG 가치를 실현합니다.",
                badge: "자체 개발",
              },
            ].map((tech) => (
              <div
                key={tech.title}
                className="rounded-2xl border p-8"
                style={{ borderColor: "#2563EB", background: "rgba(37,99,235,0.06)" }}
              >
                <span
                  className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                  style={{ background: "rgba(37,99,235,0.2)", color: "#93C5FD" }}
                >
                  {tech.badge}
                </span>
                <h3 className="mb-3 text-xl font-bold text-white">{tech.title}</h3>
                <p className="text-sm leading-7 text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRICKSTECH 연동 */}
      <section
        style={{
          background: "linear-gradient(135deg, #1428A0 0%, #2563EB 100%)",
        }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">
            Platform
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            BRICKSTECH
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-blue-100">
            BRICKSTECH는 LCT Holdings의 장비·기술·가맹을 하나로 연결하는 통합 플랫폼입니다.
            FoldCare는 BRICKSTECH가 제공하는 폴더블 케어 서비스이며, 파트너사는 BRICKSTECH를 통해
            수리 장비 관리, 기술 교육, 자재 주문, 운영 시스템을 단일 채널에서 원스톱으로 이용할 수 있습니다.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: "⚙", label: "장비 관리", desc: "장비 현황 및 A/S 원스톱" },
              { icon: "📋", label: "기술 연결", desc: "교육·공정·매뉴얼 통합" },
              { icon: "🤝", label: "가맹 네트워크", desc: "전국 파트너사 연결" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <div className="mb-2 text-2xl" aria-hidden="true">{item.icon}</div>
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="https://brickstech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-blue-700"
          >
            FoldCare 바로가기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
