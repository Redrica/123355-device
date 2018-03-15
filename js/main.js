var mapInit = document.querySelector('.about__map-popup');
var mapModal = document.querySelector('.map-modal');
var formInit = document.querySelector('.about__link--modal');
var formModal = document.querySelector('.write-us');
var mapModalClose = document.querySelector('.map-modal__close');
var formModalClose = document.querySelector('.write-us__close');
var slideDelivery = document.getElementById('delivery');
var slideWarranty = document.getElementById('warranty');
var slideCredit = document.getElementById('credit');

// можно ли повесить закрытие на один класс?

mapInit.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Открывается окно с картой');
  mapModal.classList.remove('hidden');
});

mapModalClose.addEventListener('click', function () {
  mapModal.classList.add('hidden');
});

formInit.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Открывается форма отправки сообщения');
  formModal.classList.remove('hidden');
});

formModalClose.addEventListener('click', function () {
  formModal.classList.add('hidden');
});


slideDelivery.addEventListener('click', function () {
  console.log('Отображается слайд ДОСТАВКА');
  slideDelivery.classList.add('slider-service__button--current');
  slideWarranty.classList.remove('slider-service__button--current');
  slideCredit.classList.remove('slider-service__button--current');
});

slideWarranty.addEventListener('click', function () {
  console.log('Отображается слайд ГАРАНТИЯ');
  slideWarranty.classList.add('slider-service__button--current');
  slideCredit.classList.remove('slider-service__button--current');
  slideDelivery.classList.remove('slider-service__button--current');
});

slideCredit.addEventListener('click', function () {
  console.log('Отображается слайд КРЕДИТ');
  slideCredit.classList.add('slider-service__button--current');
  slideDelivery.classList.remove('slider-service__button--current');
  slideWarranty.classList.remove('slider-service__button--current');
});


// себе: этот вариант работает, не трогай его! :-)
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(55.687130, 37.529646),
    zoom: 17
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var image = '../img/map-marker.png';

  // для маркера
  var myLatLang = new google.maps.LatLng(55.687130, 37.529646);
  var myMarker = new google.maps.Marker({
    position: myLatLang,
    map: map,
    icon: image,
    title: 'Мы вас ОЧЕНЬ ждём! :-)'
  });
}







