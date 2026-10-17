/* Via Kashi — home page behaviour */
(function () {
  var D = window.DATA, S = window.SITE;
  var arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* listing rows */
  document.querySelectorAll('[data-row]').forEach(function (sec) {
    var items = D[sec.dataset.row] || [], lg = sec.dataset.lg, noPrice = sec.dataset.noprice;
    var cards = items.map(function (x) {
      return '<a class="card" href="' + sec.dataset.href + '"><div class="card__img"><img src="images/' + x.img + '.webp" alt="' + x.t.replace(/"/g, '') + '"></div><h3 title="' + x.t.replace(/"/g, '') + '">' + x.t + '</h3>' + (noPrice ? '' : '<p>Price on <b>request</b></p>') + '</a>';
    }).join('');
    sec.innerHTML = '<div class="row-sec__head"><h2>' + sec.dataset.title + '</h2><a href="' + sec.dataset.href + '" aria-label="View all">' + arrow + '</a></div><div class="rail' + (lg ? ' rail--lg' : '') + '">' + cards + '</div>';
  });

  /* hero carousel */
  var hero = document.getElementById('hero');
  var slides = hero.querySelectorAll('.hero__slide'), dotsBox = hero.querySelector('.hero__dots'), i = 0, timer;
  slides.forEach(function (_, n) {
    var b = document.createElement('button'); b.setAttribute('aria-label', 'Slide ' + (n + 1));
    b.addEventListener('click', function () { go(n); restart(); }); dotsBox.appendChild(b);
  });
  var dots = dotsBox.children;
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    for (var k = 0; k < dots.length; k++) dots[k].classList.toggle('on', k === i);
  }
  function restart() { clearInterval(timer); if (!matchMedia('(prefers-reduced-motion:reduce)').matches) timer = setInterval(function () { go(i + 1); }, 5500); }
  hero.querySelector('.hero__arrow--l').addEventListener('click', function () { go(i - 1); restart(); });
  hero.querySelector('.hero__arrow--r').addEventListener('click', function () { go(i + 1); restart(); });
  hero.addEventListener('mouseenter', function () { clearInterval(timer); });
  hero.addEventListener('mouseleave', restart);
  go(0); restart();

  /* CTA strip whatsapp */
  var sw = document.getElementById('stripWa'); if (sw) sw.href = window.waLink('Hi Via Kashi, I need help planning my trip.');

  /* explore directory */
  var ex = document.getElementById('explore');
  function group(title, arr, href) { return '<div class="explore__g"><h3>' + title + '</h3><p>' + arr.map(function (t) { return '<a href="' + href + '">' + t + '</a>'; }).join('') + '</p></div>'; }
  var names = function (k) { return D[k].map(function (x) { return x.t; }); };
  ex.insertAdjacentHTML('beforeend',
    group('Hotels', D.hotels, 'hotels.html') + group('Cab', names('cab'), 'cab.html') + group('Boat', names('boat'), 'boat.html') +
    group('Sights', D.sights, 'things-to-do.html') + group('Packages', names('packages'), 'packages.html') +
    group('Festivals', names('festivals'), 'things-to-do.html#festivals') + group('Local food', D.food, 'things-to-do.html#food'));

  /* weather (Open-Meteo, no key) */
  var unit = 'c', wx = null;
  var f = function (c) { return unit === 'c' ? Math.round(c) + '°' : Math.round(c * 9 / 5 + 32) + '°'; };
  var $ = function (id) { return document.getElementById(id); };
  function paint() {
    if (!wx) return;
    $('wTemp').textContent = f(wx.cur.temperature_2m); $('wLo').textContent = f(wx.d.temperature_2m_min[0]); $('wHi').textContent = f(wx.d.temperature_2m_max[0]);
    $('wHu').textContent = Math.round(wx.cur.relative_humidity_2m) + '%'; $('wWi').textContent = Math.round(wx.cur.wind_speed_10m) + ' km/h';
    $('wSr').textContent = wx.d.sunrise[0].slice(11); $('wSs').textContent = wx.d.sunset[0].slice(11);
    var c = wx.cur.weather_code; $('wIcon').textContent = c === 0 ? '☀️' : c < 3 ? '🌤️' : c < 49 ? '☁️' : c < 70 ? '🌧️' : c < 90 ? '⛈️' : '⛈️';
  }
  document.querySelectorAll('.weather__u button').forEach(function (b) {
    b.addEventListener('click', function () { unit = b.dataset.u; document.querySelectorAll('.weather__u button').forEach(function (x) { x.classList.toggle('on', x === b); }); paint(); });
  });
  fetch('https://api.open-meteo.com/v1/forecast?latitude=25.3176&longitude=82.9739&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FKolkata&forecast_days=1')
    .then(function (r) { return r.json(); }).then(function (j) { wx = { cur: j.current, d: j.daily }; paint(); }).catch(function () {});

  /* reveal on scroll */
  var els = document.querySelectorAll('.row-sec,.why__c,.svc__tile');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { e.classList.add('rv'); io.observe(e); });
  }
})();
