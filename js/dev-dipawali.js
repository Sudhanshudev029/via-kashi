/* Dev Dipawali page — photo viewer for the gallery thumbnails */
(function () {
  var lb = document.getElementById('lb'); if (!lb) return;
  var img = lb.querySelector('img'), btns = [].slice.call(document.querySelectorAll('[data-lb]')), cur = 0, opener = null;
  function show(i) {
    cur = (i + btns.length) % btns.length;
    var t = btns[cur].querySelector('img'); img.src = t.src; img.alt = t.alt;
  }
  function open(i) { opener = document.activeElement; show(i); lb.hidden = false; document.body.classList.add('noscroll'); lb.querySelector('.lb__x').focus(); }
  function close() { lb.hidden = true; document.body.classList.remove('noscroll'); if (opener) opener.focus(); }
  btns.forEach(function (b, i) { b.addEventListener('click', function () { open(i); }); });
  lb.querySelector('.lb__x').addEventListener('click', close);
  lb.querySelector('.lb__n--p').addEventListener('click', function () { show(cur - 1); });
  lb.querySelector('.lb__n--n').addEventListener('click', function () { show(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close(); else if (e.key === 'ArrowLeft') show(cur - 1); else if (e.key === 'ArrowRight') show(cur + 1);
  });
  var sx = 0;
  lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); }, { passive: true });

  /* highlight the anchor tab for the section in view */
  var tabs = [].slice.call(document.querySelectorAll('.anchors a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) tabs.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); }); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['bajra', 'cruise', 'motor'].forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
})();
