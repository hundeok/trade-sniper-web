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
    <main style={{ minHeight: '100vh', padding: '1.5rem 1rem' }}>
      <div className="mac-window">
        {/* Title Bar */}
        <div className="mac-titlebar">
          <div className="mac-controls">
            <div className="mac-btn-box" onClick={() => setShowModal(true)}></div>
            <div className="mac-btn-box"></div>
          </div>
          <div className="mac-titlebar-title">TRADE_SNIPER_v2.0.app</div>
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
              <span>SYSTEM: BINANCE & BYBIT FUTURES ENGINE LIVE</span>
            </div>
            <div>LATENCY: &lt; 10ms | SIZE: 425x550</div>
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
              <span className="spec-pill">⚡ SUB-10MS EXECUTION</span>
              <span className="spec-pill">🛡️ AES-256 CLIENT VAULT</span>
              <span className="spec-pill">🎯 SNIPE LIMIT ORDERS</span>
              <span className="spec-pill">📐 3:4 GOLDEN COMPACT</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-header">
                <span>📐</span> 425x550 Golden Ratio
              </div>
              <div className="feature-card-body">
                Occupies just 425x550 pixels. Snaps neatly alongside your TradingView or multicharts without obstructing candles or order books.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <span>🎯</span> Snipe Limit Orders
              </div>
              <div className="feature-card-body">
                Auto-calculate percentage-based quantity and execute high-speed limit snipes and quick-market exits with zero keyboard friction.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <span>🛡️</span> 100% Client-Side Vault
              </div>
              <div className="feature-card-body">
                Your API secrets never touch any external server. Everything is encrypted via AES-256 and stored exclusively on your local machine.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <span>🔄</span> Binance & Bybit Dual Engine
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
