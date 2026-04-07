import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ─────────────────────────────────────────
          Section 1 · Hero
      ───────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#050A18" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,10,24,0.75) 0%, rgba(20,40,160,0.4) 100%)" }} />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
          {/* Badge */}
          <span className="text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full border" style={{ color: "#2563EB", borderColor: "#2563EB" }}>
            FOLDABLE DEVICE REPAIR PLATFORM
          </span>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ textShadow: "0 2px 20px rgba(20,40,160,0.5)" }}>
            폴더블 디바이스 리페어의
            <br />
            미래를 열다
          </h1>

          {/* Sub */}
          <p className="text-base md:text-lg text-white/60 mt-2">독자 기술 기반 · 친환경 리퍼비시 솔루션 · 글로벌 확장 가능 사업</p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/business" className="px-8 py-3 rounded-sm text-white font-semibold text-sm transition-all hover:brightness-110 hover:shadow-lg" style={{ background: "#1428A0" }}>
              사업분야 보기
            </Link>
            <Link href="/company" className="px-8 py-3 rounded-sm text-white font-semibold text-sm border border-white/40 transition-all hover:bg-white/10">
              회사소개
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "bounce 1.5s ease-in-out infinite" }}>
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(5px); }
          }
        `}</style>
      </section>

      {/* ─────────────────────────────────────────
          Section 2 · 핵심 사업 영역
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2563EB" }}>
              Core Business
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">핵심 사업 영역</h2>
            <div className="mx-auto mt-4 h-0.5 w-12" style={{ background: "#1428A0" }} />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group flex flex-col gap-4 border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ background: "#EEF2FF" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                    stroke="#1428A0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">리페어 장비 사업</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">폴더블 디바이스 전용 고정밀 리페어 장비 개발 및 공급으로 업계 표준을 선도합니다.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col gap-4 border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ background: "#EEF2FF" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    stroke="#1428A0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">기술 라이선스</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">독자 개발한 무손상 분리 기술 특허를 국내외 파트너에게 라이선스로 제공합니다.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col gap-4 border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ background: "#EEF2FF" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    stroke="#1428A0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">프랜차이즈 플랫폼</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">검증된 리페어 브랜드 BRICKSTECH를 기반으로 전국 프랜차이즈 네트워크를 구축합니다.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col gap-4 border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ background: "#EEF2FF" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="#1428A0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">친환경 리퍼비시</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">수리된 디바이스를 친환경 공정으로 재생하여 순환 경제에 기여하는 리퍼비시 솔루션입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          Section 3 · 기술 경쟁력
      ───────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#050A18" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2563EB" }}>
              Technology
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">LCTech 융합 기술</h2>
            <div className="mt-4 h-0.5 w-12" style={{ background: "#1428A0" }} />
            <p className="mt-6 text-gray-400 leading-relaxed">
              LCTech Holdings는 독자 개발한 무손상 분리 기술과 친환경 공정을 바탕으로 폴더블 디바이스 리페어 시장에서 경쟁 우위를 확보하고 있습니다. 다수의 특허 기술을 보유하며, 지속가능한 디바이스
              생태계를 만들어 갑니다.
            </p>
          </div>

          {/* Right — numbered highlights */}
          <div className="flex flex-col gap-8">
            {[
              {
                num: "01",
                title: "무손상 분리 기술",
                desc: "기기 손상 없이 폴더블 패널을 정밀 분리하는 독자 기술로 수율을 극대화합니다.",
              },
              {
                num: "02",
                title: "친환경 공정",
                desc: "유해 물질 사용을 최소화한 공정으로 ESG 경영 기준에 부합하는 리페어 솔루션을 제공합니다.",
              },
              {
                num: "03",
                title: "특허 보유 기술",
                desc: "핵심 분리·접합 공정에 대한 국내외 특허를 보유하여 기술 장벽을 형성합니다.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-6 items-start">
                <span className="text-4xl font-black leading-none shrink-0" style={{ color: "#2563EB" }}>
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          Section 4 · 사업 확장 비전
      ───────────────────────────────────────── */}
      <section className="py-32 px-6 overflow-hidden" style={{ background: "#050A18" }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: "#2563EB" }}>
              Vision
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">글로벌 확장 가능 사업 구조</h2>
            <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">리페어 기술을 기반으로 국내 시장을 넘어 글로벌 플랫폼으로 성장합니다.</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                num: "01",
                phase: "현재",
                title: "리페어 사업",
                desc: "BRICKSTECH 브랜드 기반 국내 폴더블 디바이스 리페어 직영 운영 및 핵심 기술 고도화",
                tags: ["직영 운영", "기술 개발", "품질 표준화"],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                      stroke="#2563EB"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                num: "02",
                phase: "확장",
                title: "라이선스 / 프랜차이즈",
                desc: "특허 기술 라이선스 공급 및 전국 프랜차이즈 파트너 모집으로 네트워크 구축",
                tags: ["기술 라이선스", "가맹 모집", "전국 확장"],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      stroke="#2563EB"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                num: "03",
                phase: "미래",
                title: "글로벌 플랫폼",
                desc: "동남아·유럽 해외 시장 진출 및 글로벌 리페어 플랫폼으로의 도약",
                tags: ["해외 진출", "글로벌 파트너십", "플랫폼 확장"],
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="#2563EB"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map(({ num, phase, title, desc, tags, icon }, i) => (
              <div key={i} className="relative flex flex-col gap-6 p-10 group transition-all duration-300" style={{ background: "#0A0E1A" }}>
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
                  style={{
                    background: i === 0 ? "linear-gradient(90deg, #1428A0, #1D3FBF)" : i === 1 ? "linear-gradient(90deg, #1D3FBF, #2563EB)" : "linear-gradient(90deg, #2563EB, #60A5FA)",
                  }}
                />

                {/* Ghost number */}
                <span className="absolute top-6 right-8 text-7xl font-black leading-none select-none" style={{ color: "rgba(37,99,235,0.07)" }}>
                  {num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "rgba(37,99,235,0.12)" }}>
                  {icon}
                </div>

                {/* Phase badge */}
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2563EB" }}>
                    STEP {num}
                  </span>
                  <div className="inline-block ml-3 px-2.5 py-0.5 rounded text-xs font-semibold" style={{ background: "rgba(37,99,235,0.15)", color: "#60A5FA" }}>
                    {phase}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "#9CA3AF" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow connector (desktop) */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full items-center justify-center" style={{ background: "#050A18" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          Section 5 · BRICKSTECH CTA
      ───────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #1428A0 0%, #2563EB 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="text-sm font-semibold tracking-widest uppercase text-white/60">Brand</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">BRICKSTECH와 함께하는 리페어 사업</h2>
          <p className="text-white/70 leading-relaxed max-w-xl">
            BRICKSTECH는 LCTech Holdings의 리페어 전문 브랜드이며, FoldCare는 BRICKSTECH가 운영하는 폴더블 디바이스 케어 서비스입니다. 고객이 신뢰할 수 있는 품질과 기술을 바탕으로 폴더블 리페어 경험을
            제공합니다.
          </p>
          <Link
            href="https://brickstech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-10 py-3 rounded-sm border border-white text-white font-semibold text-sm transition-all hover:bg-white hover:text-blue-700"
          >
            FoldCare 바로가기
          </Link>
        </div>
      </section>
    </main>
  );
}
