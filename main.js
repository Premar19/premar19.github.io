/**
 * Prem Sharma: portfolio behaviour.
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

  /**
   * Wires the light/dark toggle in the top bar.
   * The initial theme is set by the inline script in <head> before first paint;
   * this only handles clicks, the button label, and persistence.
   */
  function initThemeToggle() {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    var root = document.documentElement;
    var meta = document.querySelector('meta[name="theme-color"]');

    function paint() {
      var dark = root.getAttribute("data-theme") === "dark";
      // The button offers the theme you'd switch to, not the one you're in.
      button.textContent = dark ? "Light" : "Dark";
      button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      button.setAttribute("aria-pressed", String(dark));
      if (meta) meta.setAttribute("content", dark ? "#101317" : "#F6F5F1");
    }

    button.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark";
      if (dark) {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", "dark");
      }
      try {
        localStorage.setItem("theme", dark ? "light" : "dark");
      } catch (e) {
        // Private browsing or blocked storage. The toggle still works for this visit.
      }
      paint();
    });

    // Follow the OS setting until the visitor makes an explicit choice.
    if (window.matchMedia) {
      var query = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (event) {
        var chosen = null;
        try { chosen = localStorage.getItem("theme"); } catch (e) {}
        if (chosen) return;
        if (event.matches) {
          root.setAttribute("data-theme", "dark");
        } else {
          root.removeAttribute("data-theme");
        }
        paint();
      };
      if (query.addEventListener) {
        query.addEventListener("change", onChange);
      } else if (query.addListener) {
        query.addListener(onChange);
      }
    }

    paint();
  }

  initScrollReveal();
  initThemeToggle();
})();
