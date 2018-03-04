var logIn = document.querySelector('.user-menu__login');
var logOut = document.querySelector('.user-menu__logout');
var user = document.querySelector('.user-menu__user');

// себе: уверена, что это как-то не так делается, смущает одиночное использование оператора if и вообще много чего.
// сделала по аналогии с меню из продвинутого.
// работает только в верхнем меню, я догадываюсь почему, но пока без понятия, как переделать.
// в общем, сплошное баловство и растрата времени.

logIn.addEventListener('click', function () {
  if (logIn.classList.contains('visible')) {
    logIn.classList.remove('visible');
    logIn.classList.add('hidden');
  }
  if (logOut.classList.contains('hidden')){
    logOut.classList.remove('hidden');
    logOut.classList.add('visible');
  }
  if (user.classList.contains('hidden')){
    user.classList.remove('hidden');
    user.classList.add('visible');
  }
});

logOut.addEventListener('click', function () {
  if (logOut.classList.contains('visible')) {
    logOut.classList.remove('visible');
    logOut.classList.add('hidden');
  }
  if (logIn.classList.contains('hidden')){
    logIn.classList.remove('hidden');
    logIn.classList.add('visible');
  }
  if (user.classList.contains('visible')){
    user.classList.remove('visible');
    user.classList.add('hidden');
  }
});
