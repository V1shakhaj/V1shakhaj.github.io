// Mobile menu toggle and footer year
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
  // Close an open resume menu when clicking elsewhere
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.resume-menu[open]').forEach(function (m) {
      if (!m.contains(e.target)) m.removeAttribute('open');
    });
  });
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
