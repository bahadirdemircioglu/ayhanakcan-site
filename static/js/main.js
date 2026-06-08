(function () {
  // Mobile navbar toggle
  var toggle = document.querySelector('.js-navbar-toggle');
  var nav = document.querySelector('.main-navigation__container');
  var close = document.querySelector('.js-nav-close');

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      nav.classList.toggle('open');
    });
  }
  if (close && nav) {
    close.addEventListener('click', function (e) {
      e.preventDefault();
      nav.classList.remove('open');
    });
  }

  // Awards carousel
  var items = document.querySelectorAll('.award-item');
  if (items.length) {
    var current = 0;
    items[0].classList.add('active');

    function showItem(idx) {
      items[current].classList.remove('active');
      current = (idx + items.length) % items.length;
      items[current].classList.add('active');
    }

    var prev = document.querySelector('.carousel-prev');
    var next = document.querySelector('.carousel-next');
    if (prev) prev.addEventListener('click', function () { showItem(current - 1); });
    if (next) next.addEventListener('click', function () { showItem(current + 1); });

    // Auto-rotate every 5 seconds
    setInterval(function () { showItem(current + 1); }, 5000);
  }
})();
