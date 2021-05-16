const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
});

const modalLinks = document.querySelectorAll('.cart-link');

if (typeof(modalLinks) != 'undefined' && modalLinks != null) {
  const modalWindow = document.querySelector('.modal');
  const modalClose = modalWindow.querySelector('.modal__button-close');

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

  modalClose.addEventListener('click', function(){
    modalWindow.classList.remove('modal--open');
    modalWindow.classList.add('modal--close');
  });
};

const mapFrame = document.querySelector(".contacts__map-frame");

if (typeof(mapFrame) != 'undefined' && mapFrame != null) {
  mapFrame.classList.remove("contacts__map-hidden");
};
