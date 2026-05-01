/*
  ============================================================
  ALMA-CORP — MAIN JAVASCRIPT
  ============================================================
  Minimal JS: header scroll shadow.
  ============================================================
*/

document.addEventListener('DOMContentLoaded', () => {

  // ── HEADER SCROLL SHADOW ────────────────────────────────
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

});
