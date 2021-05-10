const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const modalLinks = document.querySelectorAll('.cart-link');
const modalWindow = document.querySelector('.modal__wrapper');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

for (const modalLink of modalLinks) {
  modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove('modal--close');
    modalWindow.classList.add('modal--open');
  });
}

document.addEventListener('keyup', function (event) {
  if (event.defaultPrevented) {
      return;
  }

  var key = event.key || event.keyCode;

  if (key === 'Escape' || key === 'Esc' || key === 27) {
    modalWindow.classList.remove('modal--open');
    modalWindow.classList.add('modal--close');
  }
});
