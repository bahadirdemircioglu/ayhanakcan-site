(function () {
  // Sub-menu click toggle
  var parentItems = document.querySelectorAll('.main-navigation .menu-item-has-children > a');
  parentItems.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var li = this.parentElement;
      li.classList.toggle('open');
    });
  });

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
  var items = document.querySelectorAll('.carousel-inner > .item');
  if (items.length) {
    var current = 0;
    items[0].classList.add('active');

    function showItem(idx) {
      items[current].classList.remove('active');
      current = (idx + items.length) % items.length;
      items[current].classList.add('active');
    }

    var prev = document.querySelector('.testimonial__carousel--left');
    var next = document.querySelector('.testimonial__carousel--right');
    if (prev) prev.addEventListener('click', function () { showItem(current - 1); });
    if (next) next.addEventListener('click', function () { showItem(current + 1); });

    setInterval(function () { showItem(current + 1); }, 5000);
  }
})();
