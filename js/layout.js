/* Shared header, mobile drawer, bottom tab bar, footer and floating WhatsApp button. */
(function () {
  var S = window.SITE, D = window.DATA;
  var wa = function (text) {
    return 'https://wa.me/' + S.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '');
  };
  window.waLink = wa;
  var chev = '<svg class="chev" viewBox="0 0 10 6" width="9" height="6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  var logo = '<a class="logo" href="index.html" aria-label="' + S.name + ' — home"><img src="images/logo-mark.png" width="46" height="46" alt=""><span class="logo__txt"><b>Via<i>Kashi</i></b><small>Stay · Cab · Boat · Guide</small></span></a>';

  var menu = [
    { l: 'Hotels', href: 'hotels.html', sub: [['Hotels & Homestays', 'hotels.html']] },
    { l: 'Dev Dipawali', href: 'dev-dipawali.html', sub: [['Bajra Double Decker', 'dev-dipawali.html#bajra'], ['Cruise', 'dev-dipawali.html#cruise'], ['Motor Boat', 'dev-dipawali.html#motor']] },
    { l: 'Cab', href: 'cab.html', sub: [['Dzire', 'cab.html#dzire'], ['Innova Crysta', 'cab.html#innova'], ['Ertiga', 'cab.html#ertiga'], ['Tempo Traveller', 'cab.html#traveller']] },
    { l: 'Boat', href: 'boat.html', sub: [['Motor Boat', 'boat.html#motor'], ['Bajra Boat', 'boat.html#bajra'], ['Dev Dipawali Boats', 'dev-dipawali.html'], ['Decorated Event Boats', 'boat.html#event']] },
    { l: 'Packages', href: 'packages.html' },
    { l: 'Things To Do', href: 'things-to-do.html', sub: [['Famous Temples & Ghats', 'things-to-do.html'], ['Local Food', 'things-to-do.html#food'], ['Festivals', 'things-to-do.html#festivals']] }
  ];

  var desk = menu.map(function (m) {
    if (!m.sub) return '<li><a href="' + m.href + '">' + m.l + '</a></li>';
    return '<li class="has-sub"><a href="' + m.href + '">' + m.l + chev + '</a><ul class="sub">' +
      m.sub.map(function (s) { return '<li><a href="' + s[1] + '">' + s[0] + '</a></li>'; }).join('') + '</ul></li>';
  }).join('');

  var drawerLinks = [['Home', 'index.html']].concat(menu.map(function (m) { return [m.l, m.href]; }), [['About Us', 'about-us.html'], ['Contact Us', 'contact-us.html']])
    .map(function (x) { return '<a href="' + x[1] + '">' + x[0] + '</a>'; }).join('');

  var header = '<header class="site-header" id="siteHeader"><div class="site-header__in">' + logo +
    '<nav class="desk-nav" aria-label="Main"><ul>' + desk + '</ul></nav>' +
    '<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><span></span><span></span><span></span></button></div></header>' +
    '<div class="drawer-bg" id="drawerBg"></div><aside class="drawer" id="drawer" aria-label="Menu"><div class="drawer__top">' + logo +
    '<button class="drawer__x" id="drawerX" aria-label="Close menu">&times;</button></div><nav>' + drawerLinks + '</nav>' +
    '<a class="btn btn--wa drawer__wa" href="' + wa('Hi Via Kashi, I would like to plan a trip.') + '" target="_blank" rel="noopener">Chat on WhatsApp</a></aside>';

  var ic = {
    home: '<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    boat: '<path d="M2 16l2 4h16l2-4zM12 3v10M12 4l6 8h-6"/>',
    cab: '<path d="M5 17h14M3 13l2-6h14l2 6v4H3zM7 17v2M17 17v2"/><circle cx="7.5" cy="13.5" r="1"/><circle cx="16.5" cy="13.5" r="1"/>',
    stay: '<path d="M3 20V8M3 14h18v6M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/>',
    tour: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
  };
  var tab = function (h, k, l) { return '<a href="' + h + '" data-tab="' + h + '"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ic[k] + '</svg><span>' + l + '</span></a>'; };
  var bottom = '<nav class="tabbar" aria-label="Quick navigation">' + tab('index.html', 'home', 'Home') + tab('boat.html', 'boat', 'Boat') + tab('cab.html', 'cab', 'Cab') + tab('hotels.html', 'stay', 'Stay') + tab('packages.html', 'tour', 'Tours') + '</nav>';

  var waSvg = '<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.3.6 4.5 1.8 6.4L3 29l7-1.8a13 13 0 0 0 6 1.5c7.2 0 13-5.7 13-12.8S23.200 3 16 3zm0 23.300c-1.900 0-3.800-.5-5.400-1.500l-.4-.2-4.100 1.100 1.100-4-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.300 10 10.100 5.400 16 5.400s10.700 4.600 10.700 10.400S21.900 26.300 16 26.300zm5.900-7.700c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.500 8.500 0 0 1-4.200-3.600c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.500 1.100 2.900 1.200 3.100 2.100 3.300 5.200 4.500c1.900.8 2.700.9 3.600.7.600-.1 1.900-.8 2.100-1.500s.3-1.300.2-1.500-.3-.2-.6-.4z"/></svg>';
  var float = '<a class="wa-float" href="' + wa('Hi Via Kashi, I would like to know more.') + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + waSvg + '</a>';

  var li = function (arr) { return arr.map(function (x) { return '<li><a href="' + x[1] + '">' + x[0] + '</a></li>'; }).join(''); };
  var soc = { facebook: 'M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.500c0-.3.200-.5.500-.5z', instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.500-1.500a1 1 0 1 0 0 2 1 1 0 0 0 0-2z', x: 'M4 4l16 16M20 4L4 20', youtube: 'M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM10 9v6l5-3z' };
  var socials = Object.keys(S.social).filter(function (k) { return S.social[k]; }).map(function (k) {
    return '<a href="' + S.social[k] + '" target="_blank" rel="noopener" aria-label="' + k + '"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="' + soc[k] + '"/></svg></a>';
  }).join('');
  var pin = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg>';
  var tel = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>';
  var mail = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>';

  var exp = function (title, arr, hrefs) { return '<div class="explore__g"><h3>' + title + '</h3><p>' + arr.map(function (x) { return '<a href="' + hrefs + '">' + x + '</a>'; }).join('') + '</p></div>'; };

  var footer = '<footer class="footer"><div class="container footer__grid"><div class="footer__brand">' + logo +
    '<p>Your trusted guide to the spiritual city of Varanasi — boat rides, tour packages, hotels &amp; more.</p>' +
    '<div class="chips"><span>Stay</span><span>Cab</span><span>Boat</span></div>' + (socials ? '<div class="social">' + socials + '</div>' : '') + '</div>' +
    '<div><h4>Quick Links</h4><ul>' + li([['Tour Packages', 'packages.html'], ['Boat Rides', 'boat.html'], ['Hotels', 'hotels.html'], ['Cab Booking', 'cab.html']]) + '</ul></div>' +
    '<div><h4>Company</h4><ul>' + li([['About Us', 'about-us.html'], ['Contact Us', 'contact-us.html']]) + '</ul></div>' +
    '<div><h4>Get In Touch</h4><ul class="contact">' +
    '<li><span class="ci">' + pin + '</span><span>' + S.address + '</span></li>' +
    '<li><span class="ci">' + tel + '</span><a href="' + wa() + '" target="_blank" rel="noopener">' + S.whatsappDisplay + ' (WhatsApp)</a></li>' +
    '<li><span class="ci">' + mail + '</span><a href="mailto:' + S.email + '">' + S.email + '</a></li></ul></div></div>' +
    '<div class="footer__bar"><div class="container"><span>© 2026 ' + S.name + '. All Rights Reserved.</span><span>Varanasi · Uttar Pradesh</span></div></div></footer>';

  var q = function (s) { return document.querySelector(s); };
  var top = q('[data-slot="header"]');
  if (top) top.outerHTML = header;
  var bot = q('[data-slot="footer"]');
  if (bot) bot.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', bottom + float);

  var burger = q('#burger'), drawer = q('#drawer'), bg = q('#drawerBg');
  function set(open) {
    drawer.classList.toggle('open', open); bg.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open); document.body.classList.toggle('noscroll', open);
  }
  burger.addEventListener('click', function () { set(true); });
  q('#drawerX').addEventListener('click', function () { set(false); });
  bg.addEventListener('click', function () { set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });

  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tabbar a').forEach(function (a) { if (a.getAttribute('data-tab') === here) a.classList.add('on'); });
  document.querySelectorAll('.desk-nav > ul > li > a').forEach(function (a) { if (a.getAttribute('href').split('#')[0] === here) a.classList.add('on'); });

  document.querySelectorAll('[data-wa]').forEach(function (a) { a.href = wa(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; });
  document.querySelectorAll('[data-site]').forEach(function (n) { n.textContent = S[n.getAttribute('data-site')]; });
  var hd = q('#siteHeader');
  window.addEventListener('scroll', function () { hd.classList.toggle('stuck', window.scrollY > 4); }, { passive: true });
})();
