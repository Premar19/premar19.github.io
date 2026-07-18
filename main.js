/**
 * Prem Sharma — portfolio behaviour.
 * Progressive enhancement only: the page is fully readable without this file.
 */
(function () {
  "use strict";

  /**
   * Fades sections in as they enter the viewport.
   * Falls back to showing everything immediately when IntersectionObserver
   * is unavailable or the visitor prefers reduced motion.
   */
  function initScrollReveal() {
    var elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    var prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("in"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach(function (el) { observer.observe(el); });
  }

  initScrollReveal();
})();
