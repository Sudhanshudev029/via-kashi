/* Listings and prices. One source for every page: edit a price here and it updates everywhere.
   p = price in rupees, n = short note shown beside it, q = "request a quote", no p/q = price on request. */
(function () {
  var I = {
    /* ---- cabs ---- */
    'dz-pick':  { t: 'Dzire Cab — Airport Pickup', l: 'Airport pickup', img: 'cab-dzire', p: 1200 },
    'dz-drop':  { t: 'Dzire Cab — Airport Drop', l: 'Airport drop', img: 'cab-dzire', p: 1200 },
    'dz-local': { t: 'Dzire Cab — Varanasi Local Sightseeing', l: 'Varanasi local sightseeing', img: 'cab-dzire', p: 2500 },
    'dz-vind':  { t: 'Dzire Cab — Varanasi to Vindhyachal', l: 'Varanasi to Vindhyachal', img: 'cab-dzire', p: 3500 },
    'dz-pray':  { t: 'Dzire Cab — Varanasi to Prayagraj', l: 'Varanasi to Prayagraj', img: 'cab-dzire', p: 4000 },
    'dz-ayo':   { t: 'Dzire Cab — Varanasi to Ayodhya', l: 'Varanasi to Ayodhya', img: 'cab-dzire', p: 6000 },
    'in-pick':  { t: 'Innova Crysta — Airport Pickup', l: 'Airport pickup', img: 'cab-innova', p: 1800 },
    'in-drop':  { t: 'Innova Crysta — Airport Drop', l: 'Airport drop', img: 'cab-innova', p: 1800 },
    'in-local': { t: 'Innova Crysta — Local Sightseeing', l: 'Varanasi local sightseeing', img: 'cab-innova', p: 3800 },
    'in-pray':  { t: 'Innova Crysta — Varanasi to Prayagraj', l: 'Varanasi to Prayagraj', img: 'cab-innova', p: 5500 },
    'er-pick':  { t: 'Ertiga — Airport Pickup', l: 'Airport pickup', img: 'cab-ertiga', p: 1400 },
    'er-drop':  { t: 'Ertiga — Airport Drop', l: 'Airport drop', img: 'cab-ertiga', p: 1400 },
    'er-local': { t: 'Ertiga — Local Sightseeing', l: 'Varanasi local sightseeing', img: 'cab-ertiga', p: 3200 },
    'er-ayo':   { t: 'Ertiga — Varanasi to Ayodhya', l: 'Varanasi to Ayodhya', img: 'cab-ertiga', p: 7000 },
    'tt-pick':  { t: 'Tempo Traveller — Airport Pickup', l: 'Airport pickup', img: 'cab-traveller', q: 1 },
    'tt-local': { t: 'Tempo Traveller — Local Sightseeing', l: 'Varanasi local sightseeing', img: 'cab-traveller', q: 1 },
    'tt-pray':  { t: 'Tempo Traveller — Varanasi to Prayagraj', l: 'Varanasi to Prayagraj', img: 'cab-traveller', q: 1 },
    'tt-ayo':   { t: 'Tempo Traveller — Varanasi to Ayodhya', l: 'Varanasi to Ayodhya', img: 'cab-traveller', q: 1 },
    'tt-all':   { t: 'Tempo Traveller', l: 'All routes', img: 'cab-traveller', q: 1 },
    /* ---- boats ---- */
    'b-morning':      { t: 'Morning Boat Ride in Varanasi', l: 'Morning boat ride', img: 'boat-morning', p: 2800 },
    'b-evening':      { t: 'Evening Boat Ride in Varanasi', l: 'Evening boat ride', img: 'boat-m4', p: 2999 },
    'b-motor-aarti':  { t: 'Private Motor Boat for Evening Ganga Aarti', l: 'Private motor boat, evening Ganga Aarti', img: 'boat-group', p: 2999 },
    'b-bajra-aarti':  { t: 'Private Bajra Boat for Ganga Aarti', l: 'Private bajra boat for Ganga Aarti', img: 'boat-cruise', p: 8000 },
    'b-assi':         { t: 'Private Boat from Assi Ghat for Ganga Aarti', l: 'Private boat from Assi Ghat', img: 'boat-m1', p: 2999 },
    'b-dash':         { t: 'Private Boat from Dashashwamedh Ghat', l: 'Private boat from Dashashwamedh Ghat', img: 'boat-m1b', p: 2999 },
    'b-flower-bajra': { t: 'Flower Decorated Bajra Boat', l: 'Flower decorated bajra boat', img: 'boat-cruise-flower', p: 10000 },
    'b-event':        { t: 'Decorated Boat for Birthday / Anniversary', l: 'Decorated boat for birthday / anniversary', img: 'boat-deck', p: 12000 },
    'dd-shared':      { t: 'Dev Dipawali Shared Motor Boat', l: 'Shared motor boat', img: 'boat-m4b', p: 2500, n: 'shared' },
    'dd-private':     { t: 'Dev Dipawali Private Motor Boat', l: 'Private motor boat', img: 'boat-guests', p: 50000, n: 'up to 8 persons' },
    'dd-cruise':      { t: 'Dev Dipawali Cruise Booking', l: 'Shared cruise', img: 'poster-devdiwali', p: 6500, n: 'shared' },
    'b-aarti-private':{ t: 'Evening Ganga Aarti Private Boat Booking', l: 'Evening Ganga Aarti private boat', img: 'poster-aarti', p: 3000, n: 'normal time' },
    'dd-bajra':       { t: 'Dev Dipawali Bajra Boat Booking', l: 'Bajra double decker', img: 'boat-cruise', p: 5000 },
    'b-cruise':       { t: 'Cruise Boat', l: 'Cruise boat', img: 'boat-cruise-flower' },
    /* ---- packages ---- */
    'p-1n2d':   { t: '1 Night 2 Days Varanasi Tour Package', l: '1 Night 2 Days', img: 'kvt-spire-gate', p: 9000 },
    'p-2n3d':   { t: '2 Nights 3 Days Varanasi Tour Package', l: '2 Nights 3 Days', img: 'dashashwamedh-ghat-colourful', p: 14999 },
    'p-3n4d':   { t: '3 Nights 4 Days Varanasi Tour Package', l: '3 Nights 4 Days', img: 'ganga-aarti-evening', p: 18990 },
    'p-4n5d':   { t: '4 Nights 5 Days Varanasi Tour Package', l: '4 Nights 5 Days', img: 'sarnath-dhamek-monks', p: 28999 },
    'p-family': { t: 'Family and Group Travel Packages', l: 'Family & Group', img: 'old-city-lane', p: 8999 },
    'p-trio':   { t: 'Varanasi, Prayagraj & Ayodhya Tour', l: 'Varanasi, Prayagraj & Ayodhya', img: 'ayodhya-ram-mandir', p: 11499 },
    'dd-special': { t: 'Dev Dipawali Special Tour Package', l: 'Dev Dipawali special tour', img: 'poster-devdiwali' }
  };
  var pick = function (keys) {
    return keys.map(function (k) {
      var o = typeof k === 'string' ? { k: k } : k, base = I[o.k], r = {};
      for (var a in base) r[a] = base[a];
      for (var b in o) r[b] = o[b];
      return r;
    });
  };
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN'); };
  window.DATA = {
    items: I,
    fmt: fmt,
    /* "from ₹1,200/-" like the reference; quote and no-price items get their own wording */
    priceHtml: function (x) {
      if (x.p) return 'from <b>' + fmt(x.p) + '</b>/-' + (x.n ? ' <span class="pnote">· ' + x.n + '</span>' : '');
      if (x.q) return 'Request a <b>quote</b>';
      return 'Price on <b>request</b>';
    },
    cab: pick(['dz-pick', 'dz-drop', 'dz-local', 'dz-vind', 'dz-pray', 'dz-ayo', 'in-pick', 'in-drop', 'in-local', 'in-pray', 'er-pick', 'er-drop', 'er-local', 'er-ayo', 'tt-pick', 'tt-local', 'tt-pray', 'tt-ayo']),
    boat: pick(['b-morning', 'b-evening', 'b-motor-aarti', 'b-bajra-aarti', 'b-assi', 'b-dash', 'b-flower-bajra', 'b-event', 'dd-shared', 'dd-private', { k: 'dd-cruise', img: 'poster-devdiwali' }, 'b-aarti-private']),
    packages: pick(['p-1n2d', 'p-2n3d', 'p-3n4d', 'p-4n5d', 'p-family', 'p-trio']),
    popular: pick(['dd-special', { k: 'dd-bajra', t: 'Dev Dipawali Bajra Boat Booking' }, { k: 'dd-cruise', img: 'boat-cruise-flower' }, 'p-2n3d', 'p-3n4d', { k: 'p-trio', img: 'prayagraj-sangam' }]),
    festivals: [
      { t: 'Maha Shivratri', img: 'kvt-spire-gate' },
      { t: 'Masan Holi', img: 'old-city-lane' },
      { t: 'Ramnagar Ramleela', img: 'ramnagar-fort' },
      { t: 'Dev Deepawali', img: 'poster-devdiwali' },
      { t: 'Rathyatra Mela', img: 'assi-ghat-morning-aarti' }
    ],
    hotels: ['Via Ganga Inn', 'Hotels near Assi Ghat', 'Hotels near Kashi Vishwanath', 'Hotels near Dashashwamedh Ghat'],
    sights: ['Kashi Vishwanath Temple', 'Sankat Mochan Temple', 'Annapurna Temple', 'Kaal Bhairav Temple', 'Durga Kund Temple', 'Tulsi Manas Temple', 'Sarnath', 'Ramnagar Fort', 'Assi Ghat', 'Dashashwamedh Ghat', 'Manikarnika Ghat', 'Harishchandra Ghat', 'Lalita Ghat', 'Kedar Ghat', 'Tulsi Ghat', 'Panchganga Ghat', 'Namo Ghat', 'Raj Ghat'],
    food: ['Kachori Sabzi', 'Banarasi Paan', 'Malaiyo', 'Thandai', 'Tamatar Chaat', 'Lassi', 'Banarasi Thali', 'Jalebi']
  };
})();
