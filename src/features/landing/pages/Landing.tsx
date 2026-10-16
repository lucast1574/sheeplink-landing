import { useEffect, useState } from "react";
import { appPath } from "../../../shared/config/sites";
import logoGreen from "../../../assets/sheeplink-logo-green.svg";
import markWhite from "../../../assets/sheeplink-mark-white.svg";
import { LegalLinks } from "../../legal/LegalLinks";
import { Icon } from "../components/LandingIcons";
import { MissionSection } from "../components/MissionSection";
import {
  CONTACT_EMAIL,
  DEMO_HOST,
  FAQ,
  FEATURES,
  MOCK_CELLS,
  MOCK_FOLLOW,
  MOCK_SERVERS,
  MOCK_STATS,
  NAV,
  PLANS,
  ROLES,
  STATS,
  STEPS,
  EXAMPLE_STORIES,
  WHATSAPP_URL,
} from "../landing.content";
import "../landing.css";
export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const choosePlan = (planId: string) =>
    window.location.assign(
      appPath("/registro?plan=" + encodeURIComponent(planId)),
    );
  const openSignup = () => window.location.assign(appPath("/registro"));

  // Desplazamiento suave solo mientras se está en la página de inicio
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    document.title = "SHEEPLINK · Tecnología al servicio de tu iglesia";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="lp">
      <style>{`
        .lp { --lp-bg: #f6f8f5; --lp-soft: #e8f0ea; color: var(--ink); background: var(--lp-bg); overflow-x: clip; }
        .lp a { text-decoration: none; }
        .lp-wrap { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 28px; }
        .lp section[id] { scroll-margin-top: 90px; }

        /* ---------- Botones ---------- */
        .lp-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 12px; font-weight: 700; font-size: 0.98rem; border: 1px solid transparent; cursor: pointer; transition: transform .15s ease, box-shadow .15s ease, background .15s ease; white-space: nowrap; }
        .lp-btn.primary { background: var(--brand); color: #fff; box-shadow: 0 8px 20px -8px rgba(31, 66, 55, 0.65); }
        .lp-btn.primary:hover { background: var(--brand-dark); transform: translateY(-1px); }
        .lp-btn.ghost { background: #fff; color: var(--brand-dark); border-color: var(--line); }
        .lp-btn.ghost:hover { border-color: #b9ccc1; background: #fbfdfb; }
        .lp-btn.link { padding-left: 6px; padding-right: 6px; color: var(--brand-dark); background: transparent; }
        .lp-btn.link:hover { color: var(--amber); }
        .lp-btn.light { background: #fff; color: var(--brand-dark); }
        .lp-btn.light:hover { background: #eef5f0; transform: translateY(-1px); }
        .lp-btn.outline-light { color: #fff; border-color: rgba(255,255,255,.4); background: transparent; }
        .lp-btn.outline-light:hover { background: rgba(255,255,255,.1); }
        .lp-btn.sm { padding: 9px 16px; font-size: 0.9rem; border-radius: 10px; }
        .lp-btn.block { width: 100%; }

        /* ---------- Barra superior flotante ---------- */
        .lp-nav { position: fixed; z-index: 50; top: 12px; left: 0; right: 0; display: flex; justify-content: center; padding: 0 16px; pointer-events: none; }
        .lp-nav-in { pointer-events: auto; width: 100%; max-width: 1040px; display: flex; align-items: center; gap: 8px; padding: 9px 12px 9px 14px; background: rgba(255,255,255,.88); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(221,226,220,.9); border-radius: 18px; box-shadow: 0 10px 30px -14px rgba(24,34,31,.28); }
        .lp-brand { display: flex; align-items: center; gap: 10px; margin-right: 14px; color: var(--brand-dark); font-weight: 800; letter-spacing: .01em; font-size: 1.02rem; }
        .lp-brand img { width: 36px; height: 36px; object-fit: contain; }
        .lp-links { display: flex; align-items: center; gap: 2px; flex: 1; }
        .lp-links a { color: var(--brand); font-weight: 600; font-size: 0.95rem; padding: 8px 12px; border-radius: 10px; }
        .lp-links a:hover { background: var(--lp-soft); }
        .lp-nav-cta { display: flex; align-items: center; gap: 8px; margin-left: auto; }
        .lp-burger { display: none; width: 40px; height: 40px; flex: none; align-items: center; justify-content: center; border: 1px solid var(--line); border-radius: 10px; background: #fff; color: var(--brand-dark); cursor: pointer; }
        .lp-burger:hover { background: var(--lp-soft); }
        .lp-menu { display: none; }

        /* ---------- Hero ---------- */
        .lp-hero { position: relative; isolation: isolate; padding: 128px 0 84px;
          background:
            radial-gradient(760px 480px at 8% 0%, rgba(130,190,160,.28), transparent 62%),
            radial-gradient(640px 460px at 100% 20%, rgba(185,119,31,.12), transparent 60%),
            linear-gradient(180deg, #eff5f0 0%, var(--lp-bg) 100%); }
        .lp-hero::before { content: ''; position: absolute; inset: 0; z-index: -1; background-image: radial-gradient(rgba(44,90,77,.09) 1px, transparent 1.5px); background-size: 28px 28px; -webkit-mask-image: linear-gradient(180deg, #000, transparent 70%); mask-image: linear-gradient(180deg, #000, transparent 70%); }
        .lp-hero-grid { display: grid; grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr); gap: 52px; align-items: center; }
        .lp-pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: #fff; border: 1px solid var(--line); border-radius: 99px; font-weight: 700; font-size: 0.86rem; color: var(--brand-dark); box-shadow: 0 2px 8px -4px rgba(24,34,31,.2); }
        .lp-pill svg { color: var(--amber); }
        .lp-hero h1 { font-size: clamp(2.5rem, 5vw, 4.1rem); line-height: 1.02; letter-spacing: -0.035em; font-weight: 800; margin: 22px 0 22px; color: var(--brand-dark); }
        .lp-hero h1 em { font-style: normal; color: var(--brand); background: linear-gradient(100deg, #2c5a4d, #3f8a73); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .lp-lead { font-size: 1.14rem; line-height: 1.65; color: #4a5c55; max-width: 34em; margin-bottom: 12px; }
        .lp-lead2 { color: #7a8a83; font-size: .98rem; margin-bottom: 28px; }
        .lp-cta-row { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
        .lp-micro { margin: 14px 0 22px; font-size: .86rem; color: var(--muted); }

        /* ---------- Ventana del panel de ejemplo ---------- */
        .lp-win { background: #fff; border: 1px solid var(--line); border-radius: 18px; box-shadow: 0 40px 80px -30px rgba(24,34,31,.38), 0 8px 24px -12px rgba(24,34,31,.18); overflow: hidden; }
        .lp-win-bar { display: flex; align-items: center; gap: 8px; padding: 14px 18px; border-bottom: 1px solid #e9ece8; background: #fbfcfb; }
        .lp-dot { width: 12px; height: 12px; border-radius: 50%; }
        .lp-url { margin: 0 auto; transform: translateX(-24px); padding: 4px 22px; background: #fff; border: 1px solid var(--line); border-radius: 99px; font-size: .78rem; color: var(--muted); }
        .lp-app { display: grid; grid-template-columns: 44px 1fr; min-height: 430px; }
        .lp-app-side { background: var(--brand-dark); padding: 12px 0; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .lp-app-side img { width: 26px; height: 26px; object-fit: contain; margin-bottom: 8px; }
        .lp-app-ico { width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; color: #9fc2b2; }
        .lp-app-ico.on { background: rgba(255,255,255,.16); color: #fff; }
        .lp-app-main { padding: 14px 16px 16px; background: #fbfcfb; min-width: 0; }
        .lp-app-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; font-size: .72rem; color: var(--muted); margin-bottom: 10px; }
        .lp-app-search { background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 4px 10px; min-width: 150px; font-size: .68rem; }
        .lp-app-h { font-size: .95rem; font-weight: 800; color: var(--ink); margin: 0; }
        .lp-app-sub { font-size: .66rem; color: var(--muted); margin: 1px 0 10px; }
        .lp-stats { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 8px; }
        .lp-stat { background: #fff; border: 1px solid #e6eae5; border-top: 2px solid var(--c); border-radius: 8px; padding: 8px 9px; }
        .lp-stat small { display: block; font-size: .54rem; letter-spacing: .05em; text-transform: uppercase; color: #8a9891; line-height: 1.25; min-height: 1.4em; }
        .lp-stat b { display: block; font-size: 1.08rem; margin: 3px 0 1px; color: var(--ink); }
        .lp-stat span { font-size: .55rem; color: #8a9891; line-height: 1.2; display: block; }
        .lp-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 10px; }
        .lp-tile { border-radius: 8px; padding: 9px 11px; }
        .lp-tile small { display: block; font-size: .55rem; letter-spacing: .05em; text-transform: uppercase; opacity: .75; }
        .lp-tile b { font-size: 1.1rem; display: block; margin-top: 2px; }
        .lp-tile.g { background: #e5f1ea; color: #1f5a3f; } .lp-tile.a { background: #fbf1dc; color: #7a5410; } .lp-tile.n { background: #e9eef0; color: #2e4a56; }
        .lp-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .lp-card { background: #fff; border: 1px solid #e6eae5; border-radius: 8px; padding: 9px 10px; min-width: 0; }
        .lp-card h4 { margin: 0 0 6px; font-size: .72rem; display: flex; justify-content: space-between; align-items: center; }
        .lp-card h4 span { font-weight: 500; font-size: .58rem; color: var(--brand); }
        .lp-row { display: flex; align-items: center; gap: 7px; padding: 5px 0; border-top: 1px solid #eef1ed; font-size: .62rem; min-width: 0; }
        .lp-av { flex: none; width: 20px; height: 20px; border-radius: 50%; background: #e1ece5; color: var(--brand); display: grid; place-items: center; font-weight: 700; font-size: .6rem; }
        .lp-row .t { flex: 1; min-width: 0; line-height: 1.25; }
        .lp-row .t b { display: block; font-weight: 700; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .lp-row .t i { display: block; font-style: normal; color: #8a9891; font-size: .54rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .lp-chip { flex: none; padding: 1px 7px; border-radius: 99px; font-size: .52rem; font-weight: 700; background: #e1ece5; color: var(--brand); }
        .lp-chip.warn { background: #fbe9bf; color: #7a5410; } .lp-chip.low { background: #f6e6e3; color: var(--danger); }
        .lp-chat { position: absolute; right: 14px; bottom: 14px; width: 34px; height: 34px; border-radius: 50%; background: var(--brand); color: #fff; display: grid; place-items: center; box-shadow: 0 8px 18px -6px rgba(31,66,55,.6); }
        .lp-win-wrap { position: relative; }

        /* ---------- Secciones ---------- */
        .lp-sec { padding: 92px 0; }
        .lp-sec.alt { background: #fff; border-block: 1px solid #e9ece8; }
        .lp-eyebrow { display: inline-block; color: var(--amber); font-weight: 800; font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 10px; }
        .lp-h2 { font-size: clamp(1.8rem, 3.4vw, 2.6rem); line-height: 1.1; letter-spacing: -0.025em; font-weight: 800; margin: 0 0 14px; color: var(--brand-dark); }
        .lp-sub { color: #55665f; font-size: 1.06rem; max-width: 40em; margin: 0; }
        .lp-head { margin-bottom: 44px; }
        .lp-head.center { text-align: center; } .lp-head.center .lp-sub { margin-inline: auto; }

        .lp-feat { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .lp-fcard { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 26px; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .lp-fcard:hover { transform: translateY(-3px); border-color: #b9ccc1; box-shadow: 0 18px 36px -22px rgba(31,66,55,.4); }
        .lp-fico { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; background: var(--lp-soft); color: var(--brand); margin-bottom: 18px; }
        .lp-fcard h3 { font-size: 1.12rem; margin: 0 0 6px; color: var(--brand-dark); }
        .lp-fcard p { color: #5a6b64; margin: 0; font-size: .96rem; }

        .lp-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; counter-reset: s; }
        .lp-step { position: relative; padding: 28px; border-radius: 16px; background: var(--lp-bg); border: 1px solid var(--line); }
        .lp-step .n { width: 40px; height: 40px; border-radius: 12px; background: var(--brand); color: #fff; font-weight: 800; display: grid; place-items: center; margin-bottom: 16px; }
        .lp-step h3 { margin: 0 0 6px; font-size: 1.12rem; color: var(--brand-dark); }
        .lp-step p { margin: 0; color: #5a6b64; font-size: .96rem; }

        .lp-roles { display: grid; grid-template-columns: 1fr 1.1fr; gap: 56px; align-items: center; }
        .lp-role-list { display: grid; gap: 12px; }
        .lp-role { display: flex; gap: 16px; align-items: flex-start; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 18px 20px; }
        .lp-role .i { flex: none; width: 40px; height: 40px; border-radius: 11px; background: var(--lp-soft); color: var(--brand); display: grid; place-items: center; }
        .lp-role b { display: block; color: var(--brand-dark); }
        .lp-role span { color: #5a6b64; font-size: .94rem; }

        .lp-statbar { background: var(--brand-dark); color: #fff; padding: 46px 0; position: relative; isolation: isolate; overflow: hidden; }
        .lp-statbar::before { content: ''; position: absolute; inset: 0; z-index: -1; background: radial-gradient(500px 220px at 10% 0%, rgba(130,190,160,.22), transparent 60%), radial-gradient(500px 240px at 100% 100%, rgba(185,119,31,.2), transparent 60%); }
        .lp-statgrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center; }
        .lp-statgrid b { display: block; font-size: clamp(1.8rem, 3.4vw, 2.6rem); font-weight: 800; letter-spacing: -0.02em; }
        .lp-statgrid span { color: #b5cdbf; font-size: .95rem; }

        .lp-testi { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .lp-quote { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 26px; display: flex; flex-direction: column; gap: 18px; margin: 0; }
        .lp-quote p { margin: 0; color: #34453f; font-size: 1.02rem; line-height: 1.6; }
        .lp-quote footer { display: flex; align-items: center; gap: 12px; margin-top: auto; }
        .lp-quote .av { width: 40px; height: 40px; border-radius: 50%; background: var(--brand); color: #fff; display: grid; place-items: center; font-weight: 800; }
        .lp-quote b { display: block; font-size: .95rem; color: var(--brand-dark); } .lp-quote small { color: var(--muted); }

        .lp-plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; align-items: stretch; }
        .lp-plan { position: relative; background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 30px 28px; display: flex; flex-direction: column; }
        .lp-plan.hl { border: 2px solid var(--brand); box-shadow: 0 24px 50px -28px rgba(31,66,55,.5); }
        .lp-plan .tagtop { position: absolute; top: -13px; left: 28px; background: var(--amber); color: #fff; font-size: .74rem; font-weight: 800; padding: 4px 12px; border-radius: 99px; letter-spacing: .04em; }
        .lp-plan h3 { margin: 0 0 8px; font-size: 1.2rem; color: var(--brand-dark); }
        .lp-price { font-size: 2.6rem; font-weight: 800; letter-spacing: -0.03em; color: var(--ink); line-height: 1; }
        .lp-per { color: var(--muted); font-size: .9rem; margin: 6px 0 22px; }
        .lp-plan ul { list-style: none; padding: 0; margin: 0 0 26px; display: grid; gap: 10px; }
        .lp-plan li { display: flex; gap: 10px; align-items: flex-start; font-size: .96rem; color: #3b4d46; }
        .lp-plan li svg { flex: none; color: var(--brand); margin-top: 2px; }
        .lp-plan .lp-btn { margin-top: auto; }

        .lp-faq { max-width: 780px; margin: 0 auto; display: grid; gap: 10px; }
        .lp-faq details { background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 0 20px; }
        .lp-faq summary { cursor: pointer; list-style: none; padding: 18px 0; font-weight: 700; color: var(--brand-dark); display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .lp-faq summary::-webkit-details-marker { display: none; }
        .lp-faq summary svg { flex: none; transition: transform .2s ease; color: var(--amber); }
        .lp-faq details[open] summary svg { transform: rotate(45deg); }
        .lp-faq details p { margin: 0 0 18px; color: #55665f; }

        .lp-final { position: relative; isolation: isolate; overflow: hidden; margin: 0 auto; max-width: 1124px; border-radius: 26px; padding: 64px 40px; text-align: center; color: #fff;
          background: radial-gradient(700px 360px at 12% 0%, rgba(130,190,160,.28), transparent 60%), radial-gradient(600px 360px at 100% 100%, rgba(185,119,31,.26), transparent 55%), linear-gradient(160deg, #235043, #1a3a2f 60%, #122a21); }
        .lp-final img { position: absolute; z-index: -1; right: -90px; bottom: -110px; width: 360px; opacity: .06; pointer-events: none; }
        .lp-final h2 { font-size: clamp(1.8rem, 3.6vw, 2.7rem); letter-spacing: -0.025em; line-height: 1.1; margin: 0 0 12px; font-weight: 800; }
        .lp-final p { color: #cfe0d6; max-width: 34em; margin: 0 auto 28px; font-size: 1.06rem; }
        .lp-final .lp-cta-row { justify-content: center; }

        .lp-foot { padding: 56px 0 36px; }
        .lp-foot-grid { display: flex; justify-content: space-between; gap: 32px; flex-wrap: wrap; padding-bottom: 28px; border-bottom: 1px solid var(--line); }
        .lp-foot p { color: var(--muted); font-size: .92rem; max-width: 26em; margin: 10px 0 0; }
        .lp-foot-links { display: flex; gap: 22px; flex-wrap: wrap; align-items: flex-start; }
        .lp-foot-links a { color: var(--brand); font-weight: 600; font-size: .94rem; }
        .lp-foot-links a:hover { color: var(--amber); }
        .lp-copy { padding-top: 22px; color: var(--muted); font-size: .86rem; display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }

        @media (prefers-reduced-motion: no-preference) {
          .lp-hero .lp-pill, .lp-hero h1, .lp-hero .lp-lead, .lp-hero .lp-lead2, .lp-hero .lp-cta-row, .lp-hero .lp-micro { animation: lp-up .7s cubic-bezier(.2,.7,.2,1) both; }
          .lp-hero h1 { animation-delay: .08s; } .lp-hero .lp-lead { animation-delay: .16s; } .lp-hero .lp-lead2 { animation-delay: .2s; } .lp-hero .lp-cta-row { animation-delay: .26s; } .lp-hero .lp-micro { animation-delay: .3s; }
          .lp-win-wrap { animation: lp-up .9s .2s cubic-bezier(.2,.7,.2,1) both; }
          @keyframes lp-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        }

        /* ---------- Tablet ---------- */
        @media (max-width: 1020px) {
          .lp-hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .lp-hero { padding-top: 116px; }
          .lp-feat, .lp-testi, .lp-plans { grid-template-columns: repeat(2, 1fr); }
          .lp-roles { grid-template-columns: 1fr; gap: 32px; }
          .lp-links a:nth-child(n+3) { display: none; }
        }
        /* ---------- Celular ---------- */
        @media (max-width: 760px) {
          .lp-wrap { padding: 0 18px; }
          .lp-nav { top: 8px; padding: 0 10px; }
          .lp-nav-in { padding: 7px 8px 7px 12px; gap: 6px; border-radius: 16px; }
          .lp-links, .lp-nav-cta .hide-sm { display: none; }
          .lp-brand { margin-right: 0; font-size: .96rem; gap: 8px; }
          .lp-brand img { width: 30px; height: 30px; }
          .lp-nav-cta .lp-btn.link { border-color: var(--line); background: #fff; padding: 8px 14px; }
          .lp-burger { display: inline-flex; }
          .lp-menu { display: grid; pointer-events: auto; position: fixed; z-index: 49; top: 64px; left: 10px; right: 10px; gap: 2px; padding: 8px; background: rgba(255,255,255,.97); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 20px 40px -16px rgba(24,34,31,.35); }
          .lp-menu a { padding: 13px 14px; border-radius: 10px; color: var(--brand-dark); font-weight: 600; }
          .lp-menu a:hover, .lp-menu a:active { background: var(--lp-soft); }
          .lp-menu .lp-btn { margin-top: 6px; color: #fff; }
          .lp-hero { padding: 100px 0 56px; }
          .lp-cta-row .lp-btn { flex: 1 1 100%; }
          .lp-cta-row .lp-btn.link { flex: 1 1 100%; }
          .lp-sec { padding: 64px 0; }
          .lp-feat, .lp-steps, .lp-testi, .lp-plans, .lp-statgrid { grid-template-columns: 1fr; }
          .lp-statgrid { grid-template-columns: repeat(2, 1fr); gap: 26px 12px; }
          .lp-app { grid-template-columns: 1fr; min-height: 0; }
          .lp-app-side, .lp-url, .lp-app-search { display: none; }
          .lp-stats { grid-template-columns: repeat(2, 1fr); }
          .lp-tiles { grid-template-columns: 1fr; }
          .lp-cols { grid-template-columns: 1fr; }
          .lp-cols .lp-card:nth-child(3) { display: none; }
          .lp-final { margin: 0 18px; padding: 48px 22px; }
          .lp-copy { flex-direction: column; }
        }
      `}</style>

      {/* ---------- Barra superior ---------- */}
      <header className="lp-nav">
        <nav className="lp-nav-in" aria-label="Principal">
          <a
            className="lp-brand"
            href="#inicio"
            aria-label="SHEEPLINK, inicio"
            onClick={() => setMenuOpen(false)}
          >
            <img
              className="lp-wordmark"
              src={logoGreen}
              alt="SHEEPLINK"
              width={170}
              height={40}
            />
          </a>
          <div className="lp-links">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="lp-nav-cta">
            <a className="lp-btn link sm" href={appPath("/login")}>
              Iniciar sesión
            </a>
            <button
              type="button"
              className="lp-btn primary sm hide-sm"
              onClick={openSignup}
            >
              Empezar gratis
            </button>
            <button
              type="button"
              className="lp-burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="lp-menu" onClick={() => setMenuOpen(false)}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <button
              type="button"
              className="lp-btn primary"
              onClick={openSignup}
            >
              Empezar gratis
            </button>
          </div>
        )}
      </header>

      <main id="inicio">
        {/* ---------- Hero ---------- */}
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-grid">
            <div>
              <span className="lp-pill">
                <Icon name="cross" size={16} /> Al servicio de la iglesia de
                Cristo
              </span>
              <h1>
                Una iglesia unida.
                <br />
                <em>Más tiempo para servir.</em>
              </h1>
              <p className="lp-lead">
                Menos tiempo entre listas. Más tiempo para escuchar, acompañar y
                cuidar a las personas que Dios ha puesto en tu comunidad.
              </p>
              <p className="lp-lead2">
                Organiza tus células, ministerios y encuentros en un solo lugar.
                Una ayuda para tu labor pastoral, en español.
              </p>
              <div className="lp-cta-row">
                <div className="lp-primary-action">
                  <button
                    type="button"
                    className="lp-btn primary"
                    onClick={openSignup}
                  >
                    Empezar gratis <Icon name="arrow" size={18} />
                  </button>
                  <p className="lp-micro">Prueba gratis por 7 días</p>
                </div>
                <a className="lp-btn link" href="#como-funciona">
                  Ver cómo funciona
                </a>
              </div>
              <p className="lp-pastoral-note">
                <Icon name="cross" size={15} /> Tecnología para organizar.
                Vocación para cuidar.
              </p>
            </div>

            {/* Panel de ejemplo con datos inventados */}
            <div className="lp-win-wrap" aria-hidden="true">
              <div className="lp-win">
                <div className="lp-win-bar">
                  <span className="lp-dot" style={{ background: "#ff5f57" }} />
                  <span className="lp-dot" style={{ background: "#febc2e" }} />
                  <span className="lp-dot" style={{ background: "#28c840" }} />
                  <span className="lp-url">{DEMO_HOST}</span>
                </div>
                <div className="lp-app">
                  <div className="lp-app-side">
                    <img src={markWhite} alt="" />
                    {[
                      "home",
                      "shield",
                      "layers",
                      "target",
                      "user",
                      "star",
                      "check",
                      "chart",
                      "mail",
                    ].map((i, k) => (
                      <span
                        key={i}
                        className={`lp-app-ico${k === 0 ? " on" : ""}`}
                      >
                        <Icon name={i} size={15} />
                      </span>
                    ))}
                  </div>
                  <div className="lp-app-main">
                    <div className="lp-app-top">
                      <span>Dashboard</span>
                      <span className="lp-app-search">
                        Buscar integrantes, células…
                      </span>
                    </div>
                    <p className="lp-app-h">Bienvenido, Pastor Elian</p>
                    <p className="lp-app-sub">
                      Comunidad Buen Renuevo · Resumen semanal
                    </p>

                    <div className="lp-stats">
                      {MOCK_STATS.map((s) => (
                        <div
                          className="lp-stat"
                          key={s.label}
                          style={{ ["--c" as string]: s.tone }}
                        >
                          <small>{s.label}</small>
                          <b>{s.value}</b>
                          <span>{s.sub}</span>
                        </div>
                      ))}
                    </div>

                    <div className="lp-tiles">
                      <div className="lp-tile g">
                        <small>Asistieron el domingo</small>
                        <b>112 personas</b>
                      </div>
                      <div className="lp-tile a">
                        <small>Turnos de servicio</small>
                        <b>23 esta semana</b>
                      </div>
                      <div className="lp-tile n">
                        <small>Ministerios activos</small>
                        <b>6 equipos</b>
                      </div>
                    </div>

                    <div className="lp-cols">
                      <div className="lp-card">
                        <h4>
                          Células destacadas <span>Ver todas →</span>
                        </h4>
                        {MOCK_CELLS.map((c) => (
                          <div className="lp-row" key={c.name}>
                            <span className="lp-av">{c.initial}</span>
                            <span className="t">
                              <b>{c.name}</b>
                              <i>{c.sub}</i>
                            </span>
                            <span className={`lp-chip${c.ok ? "" : " low"}`}>
                              {c.pct}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="lp-card">
                        <h4>
                          Quiénes sirven esta semana <span>Ver todos →</span>
                        </h4>
                        {MOCK_SERVERS.map((s) => (
                          <div className="lp-row" key={s.group}>
                            <span className="lp-av">
                              <Icon name="star" size={11} />
                            </span>
                            <span className="t">
                              <b>{s.group}</b>
                              <i>{s.people}</i>
                            </span>
                            <span className="lp-chip">{s.day}</span>
                          </div>
                        ))}
                      </div>
                      <div className="lp-card">
                        <h4>
                          Seguimientos pendientes <span>Ver todos →</span>
                        </h4>
                        {MOCK_FOLLOW.map((f) => (
                          <div className="lp-row" key={f.name}>
                            <span className="lp-av">{f.initial}</span>
                            <span className="t">
                              <b>{f.name}</b>
                              <i>{f.task}</i>
                            </span>
                            <span className="lp-chip warn">Sin contacto</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="lp-chat">
                <Icon name="mail" size={16} />
              </span>
            </div>
          </div>
        </section>

        <MissionSection />
        {/* ---------- Funciones ---------- */}
        <section className="lp-sec" id="funciones">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Funciones</span>
              <h2 className="lp-h2">Organización que acompaña tu misión</h2>
              <p className="lp-sub">
                Herramientas sencillas para pastores y líderes: cuida a tu
                comunidad, prepara el servicio y acompaña cada etapa de su
                camino.
              </p>
            </div>
            <div className="lp-feat">
              {FEATURES.map((f) => (
                <article className="lp-fcard" key={f.title}>
                  <div className="lp-fico">
                    <Icon name={f.icon} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Cómo funciona ---------- */}
        <section className="lp-sec alt" id="como-funciona">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Cómo funciona</span>
              <h2 className="lp-h2">Empieza hoy y ordénate en tres pasos</h2>
              <p className="lp-sub">
                Sin instalaciones ni capacitaciones largas. Si sabes usar
                WhatsApp, sabes usar SHEEPLINK.
              </p>
            </div>
            <div className="lp-steps">
              {STEPS.map((s) => (
                <div className="lp-step" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Roles ---------- */}
        <section className="lp-sec" id="roles">
          <div className="lp-wrap lp-roles">
            <div>
              <span className="lp-eyebrow">Para todo tu equipo</span>
              <h2 className="lp-h2">Cada líder ve lo que le corresponde</h2>
              <p className="lp-sub">
                Desde el pastor principal hasta el líder de una célula: cada
                persona entra con su propio usuario y accede solo a la
                información de su zona, su célula o su ministerio.
              </p>
            </div>
            <div className="lp-role-list">
              {ROLES.map((r, i) => (
                <div className="lp-role" key={r.title}>
                  <span className="i">
                    <Icon
                      name={["shield", "layers", "target", "star"][i]}
                      size={20}
                    />
                  </span>
                  <div>
                    <b>{r.title}</b>
                    <span>{r.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Cifras ---------- */}
        <section className="lp-statbar" aria-label="Cifras de SHEEPLINK">
          <div className="lp-wrap lp-statgrid">
            {STATS.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Casos ilustrativos ---------- */}
        <section className="lp-sec">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Ejemplos de uso</span>
              <h2 className="lp-h2">Así puedes acompañar a tu comunidad</h2>
            </div>
            <div className="lp-testi">
              {EXAMPLE_STORIES.map((t) => (
                <figure className="lp-quote" key={t.name}>
                  <p>{t.text}</p>
                  <footer>
                    <span className="av">
                      {t.name.replace(/^(Pastor|Líder)\s+/i, "")[0]}
                    </span>
                    <span>
                      <b>{t.name}</b>
                      <small>{t.role}</small>
                    </span>
                  </footer>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Precios ---------- */}
        <section className="lp-sec alt" id="precios">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Precios</span>
              <h2 className="lp-h2">Un plan para cada etapa de tu iglesia</h2>
              <p className="lp-sub">
                Empieza con 7 días de prueba. Los planes de pago se contratan y
                gestionan a través de Stripe.
              </p>
            </div>
            <div className="lp-plans">
              {PLANS.map((p) => (
                <div
                  className={`lp-plan${p.highlight ? " hl" : ""}`}
                  key={p.name}
                >
                  {p.badge && <span className="tagtop">{p.badge}</span>}
                  <h3>{p.name}</h3>
                  <div className="lp-price">{p.price}</div>
                  <div className="lp-per">{p.per}</div>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>
                        <Icon name="check" size={18} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {"signup" in p && p.signup ? (
                    <button
                      type="button"
                      className={`lp-btn block ${p.highlight ? "primary" : "ghost"}`}
                      onClick={openSignup}
                    >
                      {p.cta}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={`lp-btn block ${p.highlight ? "primary" : "ghost"}`}
                      onClick={() => choosePlan(p.id)}
                    >
                      {p.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Preguntas frecuentes ---------- */}
        <section className="lp-sec" id="preguntas">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Preguntas frecuentes</span>
              <h2 className="lp-h2">Resolvemos tus dudas</h2>
            </div>
            <div className="lp-faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <Icon name="plus" size={20} />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Llamado final ---------- */}
        <section id="contacto" style={{ padding: "0 0 84px" }}>
          <div className="lp-final">
            <img src={markWhite} alt="" aria-hidden="true" />
            <h2>
              Más cerca de tu comunidad.
              <br />
              Al servicio de una misma misión.
            </h2>
            <p>
              Da el primer paso para organizar tu iglesia y dedicar más tiempo a
              lo que te mueve: servir a Cristo y cuidar a las personas.
            </p>
            <div className="lp-cta-row">
              <button
                type="button"
                className="lp-btn light"
                onClick={openSignup}
              >
                Empezar gratis <Icon name="arrow" size={18} />
              </button>
              <a
                className="lp-btn outline-light"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Agenda una llamada por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Pie de página ---------- */}
      <footer className="lp-foot">
        <div className="lp-wrap">
          <div className="lp-foot-grid">
            <div>
              <a className="lp-brand" href="#inicio">
                <img
                  className="lp-wordmark"
                  src={logoGreen}
                  alt="SHEEPLINK"
                  width={170}
                  height={40}
                />
              </a>
              <p>
                Tecnología al servicio de la iglesia. Para organizar el trabajo
                y acompañar a cada persona con amor y propósito.
              </p>
            </div>
            <div className="lp-foot-links">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
              <a href={appPath("/login")}>Iniciar sesión</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="lp-copy">
            <span>© 2026 SHEEPLINK. Todos los derechos reservados.</span>
            <span>
              Para comunidades que comparten la fe y el llamado a servir.
            </span>
          </div>
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
