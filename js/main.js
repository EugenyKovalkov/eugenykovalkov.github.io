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
    if (target.matches('.modal__close') || target.matches('#popup-window')) {
      switchModal();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
      modal.classList.remove('modal--visible');
    }
  });
});

$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 37 + bullets.width() + 37)
  bullets.css('left', prev.width() + 37)

  new WOW().init();

  // валидация формы modal__form
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },  // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email в формате: name@domain.com"
      }
    }
  });



  // валидация формы control__form
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",

    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required"
    },
     // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона"
    },
    
  });


  //валидация формы footer__form
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",

    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: "required"
      // правило объект (блок)
    },  // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      userQuestion: "Задайте ваш вопрос"      
    }
  });

  //карта яндеса API
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/location.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: '12'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/ball.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      });

    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
  });
});



  // маска для телефона
  $(document).ready(function () {
    $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});


