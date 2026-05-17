// Fade the static shell out once React has rendered. Using opacity (not
// display:none) keeps the shell's elements eligible as LCP candidates per
// Chrome's LCP implementation — so the preloaded hero image stays the LCP
// element instead of being overridden by whatever React paints 4+ seconds
// later.
//
// Also handles deferred hash scrolling: on slow 3G a user can tap the
// shell's "Contact Us" (href="#Team") before React renders #Team. The
// browser sets the hash but can't scroll because the target doesn't exist
// yet, and it won't retry once it appears. We poll briefly after React
// mounts and scroll to location.hash if its target is now in the DOM.
// Lazy chunks (Contact section) may take another ~1 s, so we keep checking
// for up to 6 s.
//
// Lives in /public as a standalone file (rather than inline in index.html)
// so the page can ship a strict Content-Security-Policy without needing
// 'unsafe-inline' in script-src or a brittle script hash.
(function () {
  var root = document.getElementById('root');
  if (!root) return;
  var fade = function () {
    var shell = document.getElementById('static-shell');
    if (shell) shell.classList.add('is-faded');
  };
  var resolveHash = function () {
    if (!location.hash || location.hash.length < 2) return;
    var id = location.hash.slice(1);
    var deadline = Date.now() + 6000;
    var tryScroll = function () {
      var el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (Date.now() < deadline) {
        setTimeout(tryScroll, 200);
      }
    };
    tryScroll();
  };
  var obs = new MutationObserver(function (_, observer) {
    if (root.firstElementChild) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          fade();
          resolveHash();
        });
      });
      observer.disconnect();
    }
  });
  obs.observe(root, { childList: true });
})();
