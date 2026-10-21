'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [targetPlatform, setTargetPlatform] = useState<'mac' | 'win'>('mac');

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
            <div className="mac-btn-box"></div>
          </div>
        </div>

        {/* Content */}
        <div className="mac-content">
          {/* Status Bar */}
          <div className="retro-status-bar">
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              <span>SYSTEM: <span style={{ color: '#c27803', fontWeight: 700 }}>BINANCE</span> &amp; <span style={{ color: '#ea580c', fontWeight: 700 }}>BYBIT</span> FUTURES ENGINE LIVE</span>
            </div>
            <div>LATENCY: <span style={{ color: '#16a34a', fontWeight: 700 }}>&lt; 10ms</span> | SIZE: 425x550</div>
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

            <h1 className="hero-tagline">
              Zero Screen Clutter. Pure Execution.<br />
              The 425x550 Desktop Futures Scalping Terminal.
            </h1>

            <p className="hero-subtext">
              Tired of bloated web dashboards lagging when volatility spikes?
              TRADE SNIPER is an ultra-lightweight, native GUI designed for scalpers who demand sub-millisecond execution beside their charts.
            </p>

            <div className="specs-bar">
              <span className="spec-pill spec-pill-green">⚡ SUB-10MS EXECUTION</span>
              <span className="spec-pill spec-pill-orange">🎯 SNIPE LIMIT ORDERS</span>
              <span className="spec-pill spec-pill-green">🛡️ AES-256 CLIENT VAULT</span>
              <span className="spec-pill spec-pill-orange">📐 3:4 GOLDEN COMPACT</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="features-grid">
            <div className="feature-card card-accent-green">
              <div className="feature-card-header">
                <span>📐</span> 425x550 Golden Ratio
              </div>
              <div className="feature-card-body">
                Occupies just 425x550 pixels. Snaps neatly alongside your TradingView or multicharts without obstructing candles or order books.
              </div>
            </div>

            <div className="feature-card card-accent-orange">
              <div className="feature-card-header">
                <span>🎯</span> Snipe Limit Orders
              </div>
              <div className="feature-card-body">
                Auto-calculate percentage-based quantity and execute high-speed limit snipes and quick-market exits with zero keyboard friction.
              </div>
            </div>

            <div className="feature-card card-accent-green">
              <div className="feature-card-header">
                <span>🛡️</span> 100% Client-Side Vault
              </div>
              <div className="feature-card-body">
                Your API secrets never touch any external server. Everything is encrypted via AES-256 and stored exclusively on your local machine.
              </div>
            </div>

            <div className="feature-card card-accent-orange">
              <div className="feature-card-header">
                <span>🔄</span> Binance &amp; Bybit Dual Engine
              </div>
              <div className="feature-card-body">
                Instantly swap between Binance Futures and Bybit Derivatives with live symbol stream and automatic tick-size rounding.
              </div>
            </div>
          </div>

          {/* Download CTA Section */}
          <div className="cta-container">
            <div className="cta-title">GET READY TO SNIPE</div>
            <p className="cta-desc">
              Lightweight native performance. No telemetry, zero bloatware, pure speed.
            </p>

            <div className="btn-group">
              <button
                className="retro-btn"
                onClick={() => handleDownloadClick('mac')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.07-1.86.95-2.94-1 .04-2.17.67-2.85 1.46-.59.69-1.11 1.8-1 2.86 1.12.09 2.24-.57 2.9-1.38z"/>
                </svg>
                Download for Mac (v2.0)
              </button>

              <button
                className="retro-btn retro-btn-secondary"
                onClick={() => handleDownloadClick('win')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.95-1.8"/>
                </svg>
                Download for Windows
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
                Buy Me a Coffee (Ko-fi)
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mac-footer">
            <p>TRADE SNIPER © 2026. ALL RIGHTS RESERVED.</p>
            <p style={{ marginTop: '4px', opacity: 0.7 }}>
              BUILT FOR SPEED. TRADE RESPONSIBLY.
            </p>
          </div>
        </div>
      </div>

      {/* Retro Coming Soon Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>SYSTEM NOTICE: RELEASE PIPELINE</span>
              <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                🎯 TRADE SNIPER v2.0 ({targetPlatform === 'mac' ? 'macOS Apple Silicon' : 'Windows x64'})
              </p>
              <p style={{ marginBottom: '1rem', color: '#333' }}>
                최신 릴리즈 빌드 패키징 및 최종 보안 검증 단계입니다.<br />
                곧 정식 다운로드 파이프라인이 열릴 예정입니다.
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
                [ 확인 (CONFIRM) ]
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
