'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const t = {
  en: {
    statusEngine: 'SYSTEM: BINANCE & BYBIT FUTURES ENGINE LIVE',
    latency: 'LATENCY: < 10ms | SIZE: 425x550',
    heroTag: 'Zero Screen Clutter. Pure Execution.\nThe 425x550 Desktop Futures Scalping Terminal.',
    heroSub: 'Tired of bloated web dashboards lagging when volatility spikes? TRADE SNIPER is an ultra-lightweight, native GUI designed for scalpers who demand sub-millisecond execution beside their charts.',
    pill1: '⚡ SUB-10MS EXECUTION',
    pill2: '🎯 SNIPE & SPIDER ORDERS',
    pill3: '🛡️ AES-256 CLIENT VAULT',
    pill4: '📐 3:4 GOLDEN COMPACT',
    card1Title: '425x550 Golden Ratio',
    card1Desc: 'Occupies just 425x550 pixels. Snaps neatly alongside your TradingView or multicharts without obstructing candles or order books.',
    card2Title: 'Snipe Limit Orders',
    card2Desc: 'Auto-calculate percentage-based quantity and execute high-speed limit snipes (-0.02% ~ 1.00% gap) to catch sudden breakout wicks with zero lag.',
    card3Title: 'Market-Speed Limit Orders',
    card3Desc: 'Stop paying high taker fees. Injects ultra-fast Post-Only limit orders at the top of the book for instant fills at maker rates, with auto-market fallback.',
    card4Title: 'One-Click Spider-Net Grid',
    card4Desc: 'Stop manually clicking hundreds of ladder orders! Combine Gap × Base × Count presets to blanket the order book in a single click, and sweep-cancel in a second.',
    card5Title: '100% Client-Side Vault',
    card5Desc: 'Your API secrets never touch any external server. Everything is encrypted via AES-256 and stored exclusively on your local machine.',
    card6Title: 'Binance & Bybit Dual Engine',
    card6Desc: 'Instantly swap between Binance Futures and Bybit Derivatives with live symbol stream and automatic tick-size rounding.',
    ctaTitle: 'GET READY TO SNIPE',
    ctaDesc: 'Lightweight native performance. No telemetry, zero bloatware, pure speed.',
    macBtn: 'Download for Mac (v2.0)',
    winBtn: 'Download for Windows',
    kofiBtn: 'Buy Me a Coffee (Ko-fi)',
    footer: 'TRADE SNIPER © 2026. ALL RIGHTS RESERVED.',
    footerSub: 'BUILT FOR SPEED. TRADE RESPONSIBLY.',
    modalNotice: 'SYSTEM NOTICE: RELEASE PIPELINE',
    modalTitle: (platform: string) => `🎯 TRADE SNIPER v2.0 (${platform === 'mac' ? 'macOS Apple Silicon' : 'Windows x64'})`,
    modalDesc: 'Latest release build packaging & final security verification in progress.\nDirect download pipeline will open shortly.',
    modalConfirm: '[ CONFIRM ]',
  },
  ko: {
    statusEngine: '시스템: 바이낸스 & 바이비트 선물 실시간 엔진 가동 중',
    latency: '지연시간: < 10ms | 규격: 425x550',
    heroTag: '차트를 가리지 않는 425x550 초소형 터미널.\n오직 스캘핑 본질에만 집중하는 초경량 선물 UI.',
    heroSub: '변동성 폭발할 때 버벅이는 무거운 웹 화면에 지치셨나요? TRADE SNIPER는 차트 바로 옆에 밀착시켜 0.01초 찰나의 순간을 낚아채는 네이티브 스캘퍼 전용 GUI입니다.',
    pill1: '⚡ 0.01초 초저지연 체결',
    pill2: '🎯 낚아채기 & 거미줄 주문',
    pill3: '🛡️ AES-256 로컬 암호화',
    pill4: '📐 3:4 황금비율 컴팩트',
    card1Title: '425x550 황금비율 컴팩트',
    card1Desc: '단 425x550 픽셀의 초슬림 규격. 트레이딩뷰 차트나 호가창을 전혀 가리지 않고 화면 구석에 완벽하게 밀착됩니다.',
    card2Title: '0.01% 눌림목 낚아채기',
    card2Desc: '퍼센트 갭(-0.02% ~ 1.00%) 기반 고속 스나이핑. 순간적인 급락/급등 꼬리를 0.01초 만에 낚아채 체결시킵니다.',
    card3Title: '시장가 같은 지정가 (메이커 수수료)',
    card3Desc: '비싼 시장가(Taker) 수수료를 낼 필요가 없습니다. 최우선 호가에 초저지연 지정가(Post-Only)로 찔러 넣어 시장가 속도로 즉시 체결시키며 수수료는 메이커로 절약합니다.',
    card4Title: '원클릭 스마트 거미줄 (Spider-Net)',
    card4Desc: '손 아프게 하나하나 분할 주문 걸지 마세요! Gap(간격) × Base(이격) × 개수(5~500개) 프리셋 조합으로, 클릭 한 번에 촘촘한 그물망 호가를 쫙 깔고 1초 만에 일괄 회수합니다.',
    card5Title: '100% 로컬 보안 금고',
    card5Desc: '대표님의 API Key와 Secret은 어떠한 외부 서버로도 1바이트조차 전송되지 않습니다. 내 PC에만 AES-256으로 암호화 보관됩니다.',
    card6Title: '바이낸스 & 바이비트 듀얼 연동',
    card6Desc: '클릭 한 번으로 바이낸스 선물과 바이비트 파생상품을 즉각 전환. 실시간 종목 시세 연동 및 틱 사이즈 자동 보정.',
    ctaTitle: '스나이핑 준비 완료',
    ctaDesc: '네이티브의 압도적 속도감. 불필요한 트래킹 없이 오직 가볍고 빠른 트레이딩.',
    macBtn: 'Mac용 다운로드 (v2.0)',
    winBtn: 'Windows용 다운로드',
    kofiBtn: '개발자 커피 후원하기 (Ko-fi)',
    footer: 'TRADE SNIPER © 2026. ALL RIGHTS RESERVED.',
    footerSub: '속도를 위해 설계됨. 책임감 있게 매매하세요.',
    modalNotice: '시스템 알림: 릴리즈 파이프라인',
    modalTitle: (platform: string) => `🎯 TRADE SNIPER v2.0 (${platform === 'mac' ? 'macOS Apple Silicon' : 'Windows x64'})`,
    modalDesc: '최신 릴리즈 빌드 패키징 및 최종 보안 검증 단계입니다.\n곧 정식 다운로드 파이프라인이 열릴 예정입니다.',
    modalConfirm: '[ 확인 (CONFIRM) ]',
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ko'>('en');
  const [showModal, setShowModal] = useState(false);
  const [targetPlatform, setTargetPlatform] = useState<'mac' | 'win'>('mac');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('trade_sniper_lang') as 'en' | 'ko' | null;
      if (saved === 'en' || saved === 'ko') {
        setLang(saved);
      }
    } catch (e) {
      // ignore in environments without localStorage
    }
  }, []);

  const cur = t[lang];

  // 다운로드 파일이 준비되면 true로 바꾸고 URL을 연결하면 즉시 다운로드 모드로 전환됩니다.
  const IS_DOWNLOAD_READY = false;
  const MAC_DOWNLOAD_URL = "/downloads/Trade_UI_Binance_v2.zip";
  const WIN_DOWNLOAD_URL = "/downloads/Trade_UI_Binance_v2_win.zip";

  const handleDownloadClick = (platform: 'mac' | 'win') => {
    if (IS_DOWNLOAD_READY) {
      window.location.href = platform === 'mac' ? MAC_DOWNLOAD_URL : WIN_DOWNLOAD_URL;
    } else {
      setTargetPlatform(platform);
      setShowModal(true);
    }
  };

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ko' : 'en';
      try {
        localStorage.setItem('trade_sniper_lang', next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  return (
    <main style={{ minHeight: '100vh', padding: '1.5rem 1rem', position: 'relative' }}>
      
      {/* ============================================================ */}
      {/* Floating Retro Mascots (Left & Right) */}
      {/* ============================================================ */}
      
      {/* Mascot Left 1: Pixel Sniper Crosshair with neon orange target center */}
      <div className="mascot-left-1">
        <svg width="78" height="78" viewBox="0 0 16 16">
          <path d="M7 0h2v3H7V0zm0 13h2v3H7v-3zM0 7h3v2H0V7zm13 0h3v2h-3V7zM5 3h6v2H5V3zm-2 2h2v6H3V5zm10 0h-2v6h2V5zm-8 6h6v2H5v-2z" fill="var(--border-color)" />
          <path d="M7 7h2v2H7V7z" fill="var(--neon-orange)" />
        </svg>
      </div>

      {/* Mascot Left 2: Pixel Bullish Candlestick in neon green */}
      <div className="mascot-left-2">
        <svg width="68" height="68" viewBox="0 0 16 16" fill="var(--neon-green)">
          <path d="M7 0h2v3H7V0zm-3 3h8v9H4V3zm3 9h2v4H7v-4zm-4-4h2v2H3V8zm10-2h2v2h-2V6z" />
        </svg>
      </div>

      {/* Mascot Right 1: Pixel Rocket (To The Moon) with neon orange flames */}
      <div className="mascot-right-1">
        <svg width="76" height="76" viewBox="0 0 16 16">
          <path d="M7 1h2v2H7V1zm-1 2h4v2H6V3zm-1 2h6v4H5V5zm-2 4h10v2H3V9zm-1 2h2v3H2v-3zm10 0h2v3h-2v-3z" fill="var(--border-color)" />
          <path d="M7 11h2v2H7v-2zm-1 2h4v2H6v-2z" fill="var(--neon-orange)" />
        </svg>
      </div>

      {/* Mascot Right 2: Pixel Diamond Hands in neon green */}
      <div className="mascot-right-2">
        <svg width="72" height="72" viewBox="0 0 16 16" fill="var(--neon-green)">
          <path d="M4 2h8v2H4V2zm-2 2h12v2H2V4zm-1 2h14v2H1V6zm2 2h10v2H3V8zm2 2h6v2H5v-2zm2 2h2v2H7v-2z" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* Main Mac Window Container */}
      {/* ============================================================ */}
      <div className="mac-window">
        {/* Title Bar */}
        <div className="mac-titlebar">
          <div className="mac-controls">
            <div className="mac-btn-box" onClick={() => setShowModal(true)}></div>
            <div className="mac-btn-box"></div>
          </div>
          
          <div className="mac-titlebar-title">
            TRADE_SNIPER_v2.0.app <span className="retro-badge-neon">v2.0 LIVE</span>
          </div>

          <div className="mac-controls">
            {/* Retro EN / KO Language Toggle */}
            <button className="lang-toggle-btn" onClick={toggleLang} title="Toggle Language (EN / KO)">
              <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
              <span className="lang-slash">/</span>
              <span className={lang === 'ko' ? 'lang-active' : 'lang-inactive'}>KO</span>
            </button>
            <div className="mac-btn-box"></div>
          </div>
        </div>

        {/* Content */}
        <div className="mac-content">
          {/* Status Bar */}
          <div className="retro-status-bar">
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              {lang === 'en' ? (
                <span>SYSTEM: <span style={{ color: '#c27803', fontWeight: 700 }}>BINANCE</span> &amp; <span style={{ color: '#ea580c', fontWeight: 700 }}>BYBIT</span> FUTURES ENGINE LIVE</span>
              ) : (
                <span>시스템: <span style={{ color: '#c27803', fontWeight: 700 }}>바이낸스</span> &amp; <span style={{ color: '#ea580c', fontWeight: 700 }}>바이비트</span> 선물 엔진 가동 중</span>
              )}
            </div>
            <div>
              {lang === 'en' ? 'LATENCY: ' : '지연시간: '}
              <span style={{ color: '#16a34a', fontWeight: 700 }}>&lt; 10ms</span> | {lang === 'en' ? 'SIZE: 425x550' : '규격: 425x550'}
            </div>
          </div>

          {/* Hero Section */}
          <div className="hero-box">
            <div className="hero-logo-frame">
              <Image
                src="/logo.jpg"
                alt="TRADE SNIPER Logo"
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>

            <h1 className="hero-tagline" style={{ whiteSpace: 'pre-line' }}>
              {cur.heroTag}
            </h1>

            <p className="hero-subtext">
              {cur.heroSub}
            </p>

            <div className="specs-bar">
              <span className="spec-pill spec-pill-orange">{cur.pill1}</span>
              <span className="spec-pill spec-pill-orange">{cur.pill2}</span>
              <span className="spec-pill spec-pill-green">{cur.pill3}</span>
              <span className="spec-pill spec-pill-green">{cur.pill4}</span>
            </div>
          </div>

          {/* 6 Feature Grid */}
          <div className="features-grid">
            {/* 1. 외적: 황금비율 (네온그린) */}
            <div className="feature-card card-accent-green">
              <div className="feature-card-header">
                <span>📐</span> {cur.card1Title}
              </div>
              <div className="feature-card-body">
                {cur.card1Desc}
              </div>
            </div>

            {/* 2. 내적: 눌림목 낚아채기 (네온오렌지) */}
            <div className="feature-card card-accent-orange">
              <div className="feature-card-header">
                <span>🎯</span> {cur.card2Title}
              </div>
              <div className="feature-card-body">
                {cur.card2Desc}
              </div>
            </div>

            {/* 3. 내적: 시장가 같은 지정가 (네온오렌지) */}
            <div className="feature-card card-accent-orange">
              <div className="feature-card-header">
                <span>⚡</span> {cur.card3Title}
              </div>
              <div className="feature-card-body">
                {cur.card3Desc}
              </div>
            </div>

            {/* 4. 내적: 원클릭 스마트 거미줄 (네온오렌지) */}
            <div className="feature-card card-accent-orange">
              <div className="feature-card-header">
                <span>🕸️</span> {cur.card4Title}
              </div>
              <div className="feature-card-body">
                {cur.card4Desc}
              </div>
            </div>

            {/* 5. 외적: 로컬 보안 금고 (네온그린) */}
            <div className="feature-card card-accent-green">
              <div className="feature-card-header">
                <span>🛡️</span> {cur.card5Title}
              </div>
              <div className="feature-card-body">
                {cur.card5Desc}
              </div>
            </div>

            {/* 6. 외적: 바이낸스 & 바이비트 (네온그린) */}
            <div className="feature-card card-accent-green">
              <div className="feature-card-header">
                <span>🔄</span> {cur.card6Title}
              </div>
              <div className="feature-card-body">
                {cur.card6Desc}
              </div>
            </div>
          </div>

          {/* Download CTA Section */}
          <div className="cta-container">
            <div className="cta-title">{cur.ctaTitle}</div>
            <p className="cta-desc">{cur.ctaDesc}</p>

            <div className="btn-group">
              <button
                className="retro-btn"
                onClick={() => handleDownloadClick('mac')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.07-1.86.95-2.94-1 .04-2.17.67-2.85 1.46-.59.69-1.11 1.8-1 2.86 1.12.09 2.24-.57 2.9-1.38z"/>
                </svg>
                {cur.macBtn}
              </button>

              <button
                className="retro-btn retro-btn-secondary"
                onClick={() => handleDownloadClick('win')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.95-1.8"/>
                </svg>
                {cur.winBtn}
              </button>
            </div>

            {/* Ko-fi Support Link */}
            <div className="kofi-section">
              <a
                href="https://ko-fi.com/hdcho"
                target="_blank"
                rel="noopener noreferrer"
                className="kofi-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666c-.119-.597-.382-1.154-.766-1.62-.383-.465-.873-.824-1.425-1.045C17.34 2.862 16.71 2.75 16.07 2.75H4.25c-.796 0-1.559.316-2.121.879C1.566 4.191 1.25 4.954 1.25 5.75v8.5c0 1.989.79 3.897 2.197 5.303C4.853 20.96 6.761 21.75 8.75 21.75h4.5c1.989 0 3.897-.79 5.303-2.197C19.96 18.147 20.75 16.239 20.75 14.25v-2.155c.677-.282 1.272-.731 1.722-1.303.45-.572.715-1.259.768-1.984.053-.725-.098-1.452-.438-2.098-.34-.646-.864-1.166-1.51-1.503l-.076-.792zm-1.466 3.99c-.068.309-.234.586-.471.785-.238.199-.538.31-.849.31h-.68v-3.5h.68c.311 0 .611.111.849.31.237.199.403.476.471.785.068.309.034.63-.098.918-.132.288-.358.523-.642.668l-.26.724zm-4-4.655v8.5c0 1.193-.474 2.338-1.318 3.182-.844.844-1.989 1.318-3.182 1.318h-4.5c-1.193 0-2.338-.474-3.182-1.318C2.724 16.588 2.25 15.443 2.25 14.25v-8.5c0-.53.211-1.039.586-1.414.375-.375.884-.586 1.414-.586h11.82c.39 0 .77.067 1.13.197.36.13.68.33.95.59.27.26.47.58.6.93.13.35.19.73.19 1.12v.213h-4.24z"/>
                </svg>
                {cur.kofiBtn}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mac-footer">
            <p>{cur.footer}</p>
            <p style={{ marginTop: '4px', opacity: 0.7 }}>
              {cur.footerSub}
            </p>
          </div>
        </div>
      </div>

      {/* Retro Coming Soon Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>{cur.modalNotice}</span>
              <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                {cur.modalTitle(targetPlatform)}
              </p>
              <p style={{ marginBottom: '1rem', color: '#333', whiteSpace: 'pre-line' }}>
                {cur.modalDesc}
              </p>
              <div style={{ background: '#f0f0f0', border: '1px solid #111', padding: '10px', fontSize: '0.82rem', marginBottom: '1.2rem' }}>
                <div>• Version: v2.0 (Build 2026.10)</div>
                <div>• Architecture: Universal / Apple Silicon (ARM64)</div>
                <div>• Security: Hardened Runtime &amp; Notarized</div>
              </div>
              <button
                className="retro-btn"
                style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
                onClick={() => setShowModal(false)}
              >
                {cur.modalConfirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
