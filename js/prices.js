/* Fills price lists on inner pages from DATA (js/data.js):
   <div data-ptable="dz-pick,dz-drop"></div>  -> label / price rows
   <span data-price="p-1n2d"></span>          -> "from ₹9,000/-"            */
(function () {
  var D = window.DATA;
  document.querySelectorAll('[data-ptable]').forEach(function (el) {
    var rows = el.getAttribute('data-ptable').split(',').map(function (k) {
      var x = D.items[k.trim()]; if (!x) return '';
      var v = x.p ? '<b>' + D.fmt(x.p) + '</b>' + (x.n ? '<small>' + x.n + '</small>' : '') : x.q ? '<b class="pq">Request a quote</b>' : '<b class="pq">Price on request</b>';
      return '<li><span>' + x.l + '</span><em>' + v + '</em></li>';
    }).join('');
    el.outerHTML = '<ul class="ptable" aria-label="Prices">' + rows + '</ul>';
  });
  document.querySelectorAll('[data-price]').forEach(function (el) {
    var x = D.items[el.getAttribute('data-price')]; if (x) el.innerHTML = D.priceHtml(x);
  });
})();
