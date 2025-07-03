import React, { useState, useEffect } from "react";
import {
  FiPhone,
  FiClock,
  FiUsers,
  FiActivity,
  FiHome,
  FiMessageCircle,
  FiBookOpen,
  FiSettings,
  FiHeadphones,
  FiZap,
  FiUser,
  FiSun,
} from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const menuItems = [
  { label: "Overview", icon: <FiHome />, active: true },
  { label: "Conversations", icon: <FiMessageCircle /> },
  { label: "Personalize", icon: <FiBookOpen /> },
  { label: "Outgoing", icon: <FiPhone /> },
  { label: "Agent", icon: <FiHeadphones /> },
  { label: "Settings", icon: <FiSettings /> },
];
const moreItems = [
  { label: "Quick Setup", icon: <FiZap /> },
  { label: "Get a Test Call", icon: <FiPhone /> },
];

export default function LandingPage() {
  const [planProgress, setPlanProgress] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(false);

  // Animate the plan progress and banner on mount
  useEffect(() => {
    let progress = 0;
    setBannerVisible(true);
    const interval = setInterval(() => {
      progress += 1;
      if (progress > 40) clearInterval(interval);
      else setPlanProgress(progress);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  // Cards data for stats
  const statsCards = [
    {
      title: "Last 24H Calls",
      icon: <FiClock size={20} className="icon" />,
      value: 0,
      description: "Calls received in the last 24 hours.",
    },
    {
      title: "All-Time Calls",
      icon: <FiPhone size={20} className="icon" />,
      value: 0,
      description: "Total number of calls ever.",
    },
    {
      title: "Unique Callers",
      icon: <FiUsers size={20} className="icon" />,
      value: 0,
      description: "Distinct individuals who called.",
    },
    {
      title: "Active Calls",
      icon: <FiActivity size={20} className="icon" />,
      value: 0,
      description: "Calls currently in progress.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        body {
          margin: 0;
          background-color: #f8faff;
          font-family: 'Inter', sans-serif;
          color: #1c1e21;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .container {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }
        /* Sidebar */
        .sidebar {
          width: 260px;
          background-color: #fff;
          border-right: 1px solid #e3e8ee;
          padding: 2rem 1rem 3rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          user-select: none;
          flex: 1;
        }
        .sidebar-top {
          display: flex;
          flex-direction: column;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          cursor: pointer;
        }
        .logo-circle {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3058f4, #847cfb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          user-select: none;
          transition: background 0.3s ease;
        }
        .logo-circle:hover {
          background: linear-gradient(135deg, #1a3ce6, #6a5dfb);
        }
        .campaign-select {
          background: transparent;
          border: 1.5px solid #a3aed0;
          border-radius: 6px;
          font-size: 0.9rem;
          padding: 0.4rem 0.8rem;
          color: #556080;
          flex: 1;
          cursor: pointer;
          transition: border-color 0.2s;
          outline: none;
          user-select: none;
        }
        .campaign-select:focus {
          border-color: #3058f4;
          box-shadow: 0 0 8px rgba(48,88,244,0.4);
        }
        .copy-btn {
          width: 36px;
          height: 36px;
          margin-left: 8px;
          border: 1.5px solid #a3aed0;
          border-radius: 6px;
          background: white;
          color: #627296;
          display:flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
          user-select: none;
          font-size: 1rem;
        }
        .copy-btn:hover {
          background: #3058f4;
          color: white;
          box-shadow: 0 0 6px #3058f4;
        }
        /* Menu */
        .menu-section {
          margin-bottom: 1.8rem;
        }
        .menu-title {
          font-weight: 600;
          color: #adb5ca;
          font-size: 0.85rem;
          margin-bottom: 0.8rem;
          padding-left: 4px;
          text-transform: uppercase;
          user-select: none;
        }
        .menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 1rem;
          color: #33415c;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          user-select: none;
        }
        .menu-item svg {
          min-width: 18px;
          min-height: 18px;
          stroke-width: 1.5;
        }
        .menu-item:hover {
          background-color: #e7f0ff;
          color: #3058f4;
        }
        .menu-item.active {
          background-color: #e7f0ff;
          color: #3058f4;
          font-weight: 700;
          box-shadow: inset 4px 0 #3058f4;
        }
        /* Feedback */
        .feedback-section {
          margin-top: auto;
          font-size: 0.9rem;
          color: #506175;
          cursor: pointer;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 6px;
          transition: color 0.25s ease;
          user-select: none;
          padding-left: 4px;
        }
        .feedback-section:hover {
          color: #3058f4;
        }
        /* Plan box */
        .plan-box {
          margin-top: 1rem;
          border: 1.5px solid #e3e8ee;
          border-radius: 12px;
          padding: 1rem 1rem 1.2rem 1rem;
          background-color: white;
          font-size: 0.9rem;
          color: #506175;
          user-select: none;
        }
        .plan-current {
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: #374151;
        }
        .plan-progress-bar {
          width: 100%;
          height: 8px;
          background-color: #e3e8ee;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.6rem;
        }
        .plan-progress-bar-fill {
          height: 8px;
          background: linear-gradient(90deg, #3058f4, #847cfb);
          width: 0;
          transition: width 1s ease;
          border-radius: 4px;
        }
        .upgrade-button {
          background: #5076f7;
          padding: 0.6rem 1.2rem;
          font-weight: 600;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          box-shadow: 0 3px 6px #a2a7ff63;
          user-select: none;
          transition: background-color 0.3s ease;
        }
        .upgrade-button:hover {
          background: #3058f4;
          box-shadow: 0 6px 14px #5076f788;
        }
        /* Online status */
        .online-status {
          margin-top: 1rem;
          color: #256240;
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 6px;
          user-select: none;
        }
        .online-status .online-icon {
          background-color: #2aa441;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          box-shadow: 0 0 6px #25624099;
        }
        /* Content */
        .content {
          flex: 1;
          background-color: #f8faff;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .header {
          background-color: #fff;
          border-bottom: 1px solid #e3e8ee;
          padding: 1rem 2rem;
          font-size: 1.15rem;
          font-weight: 600;
          color: #1c1e21;
          display: flex;
          align-items: center;
          gap: 1rem;
          user-select: none;
        }
        .header .icon-home {
          stroke-width: 2;
          color: #3058f4;
          font-size: 1.4rem;
        }
        .header-title {
          flex: 1;
          user-select: none;
          letter-spacing: 0.02em;
        }
        .header-right {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .header-icon {
          cursor: pointer;
          color: #627296;
          font-size: 1.3rem;
          transition: color 0.25s;
          user-select: none;
        }
        .header-icon:hover {
          color: #3058f4;
        }
        .header-profile {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4879f9, #9d70ff);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.15rem;
          font-weight: 700;
          box-shadow: 0 0 10px #836bf3bb;
          user-select: none;
          transition: background 0.3s ease;
        }
        .header-profile:hover {
          background: linear-gradient(135deg, #3058f4, #847cfb);
          box-shadow: 0 0 14px #5360ffbb;
        }
        /* Banner */
        .banner {
          margin: 1.5rem 2rem;
          border: 2px solid #587fff;
          border-radius: 14px;
          padding: 1rem 1.9rem 1rem 1.9rem;
          position: relative;
          background: white;
          box-shadow: 0 2px 8px rgb(57 99 255 / 0.12);
          user-select: none;

          opacity: 0;
          transform: translateX(-40px);
          animation-fill-mode: forwards;
          animation-duration: 0.45s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-name: bannerSlideIn;
        }
        .banner.show {
          opacity: 1;
          transform: translateX(0);
        }
        @keyframes bannerSlideIn {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .banner-badge {
          position: absolute;
          top: -12px;
          left: 8px;
          background-color: #587fff;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.75rem;
          border-radius: 6px;
          user-select: none;
          box-shadow: 0 0 6px #5076f788;
          pointer-events:none;
        }
        .banner-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .banner-icon {
          color: #587fff;
          font-size: 1.45rem;
          flex-shrink: 0;
          user-select: none;
        }
        .banner-text {
          flex: 1;
          font-size: 1rem;
        }
        .banner-text strong {
          font-weight: 700;
        }
        .banner-text small {
          color: #627296;
          display: block;
          margin-top: 0.2rem;
          font-weight: 400;
        }
        .banner-btn {
          background-color: #587fff;
          border: none;
          color: white;
          padding: 0.55rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 10px #5478ff99;
          user-select: none;
          flex-shrink: 0;
          white-space: nowrap;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        .banner-btn:hover {
          background-color: #3058f4;
          box-shadow: 0 6px 18px #3058f4aa;
        }
        .banner-btn:active::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 150%;
          height: 150%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          animation: ripple 0.5s linear;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
        /* Stats cards container */
        .stats-cards {
          margin: 0 2rem 1.7rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 1.4rem;
        }
        .stats-card {
          background-color: white;
          border: 1.2px solid #e3e8ee;
          border-radius: 12px;
          padding: 1.2rem 1.4rem;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
          user-select: none;
        }
        .stats-card:hover {
          border-color: #3058f4;
          box-shadow: 0 2px 10px rgb(52 74 237 / 0.15);
        }
        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
          font-weight: 600;
          font-size: 1rem;
          color: #1c1e21;
        }
        .stats-icon {
          color: #627296;
        }
        .stats-value {
          font-weight: 700;
          font-size: 2.1rem;
          margin-bottom: 0.3rem;
          color: #33415c;
          user-select: text;
        }
        .stats-desc {
          font-size: 0.85rem;
          color: #627296;
          user-select: text;
          min-height: 1.3rem;
        }
        /* Bottom wide cards container */
        .bottom-cards {
          display: grid;
          grid-template-columns: 2fr 1.7fr;
          gap: 1.8rem;
          margin: 0 2rem 3rem 2rem;
          flex-grow: 1;
        }
        .bottom-card {
          background-color: white;
          border: 1.5px solid #e3e8ee;
          border-radius: 14px;
          box-shadow: 0 6px 15px rgb(80 106 255 / 0.05);
          padding: 1.3rem 1.7rem;
          display: flex;
          flex-direction: column;
          user-select: none;
          transition: box-shadow 0.3s ease;
          position: relative;
        }
        .bottom-card:hover {
          box-shadow: 0 10px 22px rgb(80 106 255 / 0.25);
        }
        .bottom-card-header {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
          color: #1c1e21;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }
        .bottom-card-header small {
          color: #627296;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .bottom-card-view-all {
          font-size: 0.9rem;
          font-weight: 600;
          color: #627296;
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.25s ease;
        }
        .bottom-card-view-all:hover {
          color: #3058f4;
        }
        /* Monthly Calls Chart Placeholder */
        .chart-placeholder {
          flex: 1;
          border: 1px dashed #cbd4e6;
          border-radius: 8px;
          color: #cbd4e6;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          user-select: none;
          min-height: 160px;
        }
        /* Recent Calls Placeholder */
        .recent-calls-placeholder {
          flex: 1;
          border: 1px dashed #cbd4e6;
          border-radius: 8px;
          color: #cbd4e6;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          user-select: none;
          min-height: 160px;
          padding: 0.2rem;
        }
        /* Scrollbar stylings for content */
        .content::-webkit-scrollbar {
          width: 11px;
        }
        .content::-webkit-scrollbar-track {
          background: #f8faff;
        }
        .content::-webkit-scrollbar-thumb {
          background-color: #a3aed0;
          border-radius: 8px;
          border: 3px solid #f8faff;
        }
        /* Responsive */
        @media (max-width: 1024px) {
          .sidebar {
            width: 220px;
            padding: 1.5rem 0.8rem 2rem 0.8rem;
          }
          .bottom-cards {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #e3e8ee;
            padding: 1rem 1.2rem 1rem 1.2rem;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .sidebar-top {
            flex-direction: row;
            align-items: center;
          }
          .campaign-select {
            max-width: 120px;
          }
          .menu-section {
            display: none;
          }
          .content {
            height: calc(100vh - 72px);
          }
          .bottom-cards {
            grid-template-columns: 1fr !important;
            margin: 0 1rem 1rem 1rem;
          }
          .stats-cards {
            grid-template-columns: 1fr 1fr !important;
            margin: 0 1rem 1rem 1rem;
          }
          .header {
            padding: 1rem 1rem;
          }
          .banner {
            margin: 1rem;
            padding: 0.8rem 1.1rem;
          }
          .banner-text {
            font-size: 0.9rem;
          }
          .banner-btn {
            padding: 0.4rem 0.95rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
      <div className="container" role="main" aria-label="Website Landing Page Dashboard">
        <aside className="sidebar" aria-label="Sidebar menu">
          <div className="sidebar-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div className="logo-circle" aria-hidden="true">C</div>
              <select
                className="campaign-select"
                aria-label="Select call campaign"
                defaultValue="Call Campaign"
                disabled={false}
              >
                <option value="Call Campaign">Call Campaign</option>
                <option value="Campaign 1">Campaign 1</option>
                <option value="Campaign 2">Campaign 2</option>
              </select>
              <button
                className="copy-btn"
                aria-label="Copy campaign link"
                onClick={() => {
                  navigator.clipboard.writeText('https://myapp.com/campaign');
                  alert("Link copied to clipboard");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                  stroke="#627296"
                  fill="none"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>

            {/* Menu */}
            <nav aria-label="Main Navigation" role="navigation">
              <div className="menu-section" aria-label="Primary Menu">
                {menuItems.map((item, i) => (
                  <div
                    key={item.label}
                    className={"menu-item " + (item.active ? "active" : "")}
                    tabIndex={item.active ? 0 : -1}
                    role="link"
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="menu-section" aria-label="More Options Menu">
                {moreItems.map((item) => (
                  <div key={item.label} className="menu-item" tabIndex={0} role="link">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </nav>
          </div>
          {/* Feedback and Plan */}
          <div className="sidebar-bottom" style={{ marginTop: "auto" }}>
            <div
              className="feedback-section"
              role="button"
              tabIndex={0}
              aria-label="Send feedback"
              onClick={() => alert("Feedback feature coming soon!")}
              onKeyDown={(e) => e.key === "Enter" && alert("Feedback feature coming soon!")}
            >
              <FiMessageCircle aria-hidden="true" />
              <span>Feedback</span>
            </div>
            <div className="plan-box" aria-label="Current subscription plan information">
              <div className="plan-current">
                Current Plan: <strong>Free</strong>
              </div>
              <div className="plan-progress-bar" aria-hidden="true">
                <div
                  className="plan-progress-bar-fill"
                  style={{ width: `${planProgress}%` }}
                ></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600", color: "#627296", fontSize: "0.85rem" }}>
                <span>{planProgress / 20 * 5}/5</span>
                <button
                  className="upgrade-button"
                  aria-label="Upgrade plan"
                  onClick={() => alert("Upgrade plan feature coming soon!")}
                >
                  Upgrade ⚡
                </button>
              </div>
              <div className="online-status">
                <span className="online-icon" aria-hidden="true"></span> All services are online
              </div>
            </div>
          </div>
        </aside>
        <section className="content" aria-label="Main content area">
          <header className="header" role="banner" aria-label="Page header">
            <FiHome className="icon-home" aria-hidden="true" />
            <h1 className="header-title">Overview</h1>
            <div className="header-right" aria-label="User controls">
              <button
                className="header-icon"
                aria-label="Toggle dark mode"
                onClick={() => alert("Dark mode toggle not implemented")}
              >
                <FiSun />
              </button>

              <button className="header-profile" aria-label="User profile" type="button">
                <FaUserCircle aria-hidden="true" />
              </button>
            </div>
          </header>

          {/* Banner */}
          <section
            className={"banner " + (bannerVisible ? "show" : "")}
            aria-live="polite"
            role="region"
            aria-label="Notification banner"
          >
            <div className="banner-badge" aria-hidden="true">
              You're one step away
            </div>
            <div className="banner-content">
              <FiPhone className="banner-icon" aria-hidden="true" />
              <div className="banner-text">
                <strong>Get a Virtual Phone Number</strong>
                <small>Link a virtual phone number to your account and let your AI assistant handle calls effortlessly, 24/7.</small>
              </div>
              <button
                className="banner-btn"
                aria-label="Get started with virtual phone number"
                onClick={() => alert("Get Started clicked")}
              >
                Get Started
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <section
            className="stats-cards"
            aria-label="Call statistics summary"
          >
            {statsCards.map(({ title, icon, value, description }) => (
              <article key={title} className="stats-card" tabIndex={0} aria-label={title}>
                <header className="stats-header">
                  <span>{title}</span>
                  <span className="stats-icon">{icon}</span>
                </header>
                <div className="stats-value" aria-live="polite" aria-atomic="true">{value}</div>
                <p className="stats-desc">{description}</p>
              </article>
            ))}
          </section>

          {/* Bottom cards */}
          <section className="bottom-cards" aria-label="Additional content section">
            <article
              className="bottom-card"
              aria-label="Monthly call trends chart"
            >
              <div className="bottom-card-header">
                Monthly Call Trends
                <small>Number of calls per month.</small>
              </div>
              <div className="chart-placeholder" aria-hidden="true" title="Monthly Call Trends chart placeholder">
                {/* Chart can be added here if data available */}
                Chart placeholder
              </div>
            </article>

            <article
              className="bottom-card"
              aria-label="Recent calls"
            >
              <div className="bottom-card-header">
                Recent Calls
                <span
                  className="bottom-card-view-all"
                  role="link"
                  tabIndex={0}
                  onClick={() => alert("View all recent calls clicked")}
                  onKeyDown={(e) => e.key === "Enter" && alert("View all recent calls clicked")}
                  aria-label="View all recent calls"
                >
                  View All &#8599;
                </span>
              </div>
              <div className="recent-calls-placeholder" aria-hidden="true" title="Recent Calls placeholder">
                {/* Recent calls would show here */}
                No recent calls available.
              </div>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}

