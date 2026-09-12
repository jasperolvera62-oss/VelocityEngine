// Velocity Engine website — small interactions.
(function () {
  "use strict";

  var VERSION = "v0.1.0";
  var FILE = "VelocityEngine-windows-x64-" + VERSION + ".zip";

  // Keep the download button / meta pointing at the packaged release even if
  // the HTML is edited.
  var btn = document.getElementById("download-btn");
  var meta = document.getElementById("dl-meta");
  if (btn) {
    btn.href = "downloads/" + FILE;
    // Reflect the real size on clients that expose it (no CORS needed for a
    // same-origin HEAD-less check is avoided; we simply show the filename).
  }
  if (meta) {
    meta.textContent = "Windows 10/11 x64 · Direct3D 11 · hub launcher only · ~4 MB · " + FILE;
  }

  // Subtle reveal on scroll for the cards.
  if ("IntersectionObserver" in window) {
    var cards = document.querySelectorAll(".card, .tpl, .mod, .hub-panel");
    cards.forEach(function (el) { el.style.opacity = "0"; el.style.transform = "translateY(10px)"; el.style.transition = "opacity .45s ease, transform .45s ease"; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    cards.forEach(function (el) { io.observe(el); });
  }
})();