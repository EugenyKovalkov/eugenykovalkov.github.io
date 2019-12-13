document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  document.body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.matches('.modal__close') || target.matches('#modal--window')) {
      switchModal();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
      modal.classList.remove('modal--visible');
    }
  });
});

// connect pop-up windiw
// $(document).ready(function () {
//   var modal = $('.modal'),
//       modalBtn = $('[data-toggle=modal]'),
//       closeBtn = $('.modal__close');
    
//   modalBtn.on('click', function () {
//     modal.toggleClass('modal--visible');
//   });
//   closeBtn.on('click', function () {
//     modal.toggleClass('modal--visible');    
//   });

//   var mySwiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
//   var next = $('.swiper-button-next');
//   var prev = $('.swiper-button-prev');
//   var bullets = $('.swiper-pagination');

//   next.css('left', prev.width() + 37 + bullets.width() + 37)
//   bullets.css('left', prev.width() + 37)
// });


