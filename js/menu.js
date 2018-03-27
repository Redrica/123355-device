var catalogInnerInit = document.querySelector('.main-menu__link--catalog');
var catalogInner = document.querySelector('.main-menu__list');
var catalogInnerLink = document.querySelectorAll('.catalog-menu__link');

catalogInnerInit.addEventListener('focus', function () {
  catalogInner.classList.add('catalog-list-opened');
});

Array.prototype.slice.call(catalogInnerLink).forEach(function(item) {
  item.addEventListener('focus', function () {
    catalogInner.classList.add('catalog-list-opened');
  });
});

Array.prototype.slice.call(catalogInnerLink).forEach(function(item) {
  item.addEventListener('blur', function () {
    catalogInner.classList.remove('catalog-list-opened');
  });
});
