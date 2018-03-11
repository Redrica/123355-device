var mapInit = document.querySelector('.about__map-popup');
var mapModal = document.querySelector('.map-modal');
var formInit = document.querySelector('.about__link--modal');
var formModal = document.querySelector('.write-us');
var mapModalClose = document.querySelector('.map-modal__close');
var formModalClose = document.querySelector('.write-us__close');

// можно ли повесить закрытие на один класс?

mapInit.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('hidden');
});

mapModalClose.addEventListener('click', function () {
  mapModal.classList.add('hidden');
});

formInit.addEventListener('click', function (evt) {
  evt.preventDefault();
  formModal.classList.remove('hidden');
});

formModalClose.addEventListener('click', function () {
  formModal.classList.add('hidden');
});
