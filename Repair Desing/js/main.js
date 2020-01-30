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
  var projectSwiper = new Swiper('.projects__swiper-container', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });
  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
  var bullets = $('.projects__swiper-pagination');

  next.css('left', prev.width() + 23 + bullets.width() + 23)
  bullets.css('left', prev.width() + 23)

  var stepsSwiper = new Swiper('.steps__swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });
        
  var next2 = $('.steps__swiper-button-next');
  var prev2 = $('.steps__swiper-button-prev');
  var bullets2 = $('.steps__swiper-pagination');

  next2.css('left', prev2.width() + 25 + bullets2.width() + 27)
  bullets2.css('left', prev2.width() + 27)
        
    $('.wrap__shell').on('click', function () {
      $('.wrap__shell').removeClass('active');
      $(this).addClass('active');
      const event = $(this).data('index');
      stepsSwiper[0].slideTo(event);
      stepsSwiper[1].slideTo(event);
    })
        
    stepsSwiper[0].on('slideChange', (function () {
      let event = stepsSwiper[0].activeIndex - 1;
      if (event === 6) {event=0};
      $('.wrap__shell').removeClass('active');
      $('.wrap__shell').eq(event).addClass('active');
    })) 

    $('.kinds__repairs').on('click', function () {
      $('.kinds__repairs').removeClass('active-kinds');
      $(this).addClass('active-kinds');
      const event = $(this).data('index');
    })

  


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
      policyCheckbox: "required",
      // правило объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, 
     // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      policyCheckbox: "Подтвердите согланисе на обработку данных",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email в формате: name@domain.com"
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами, через 10 минут');
          $(form)[0].reset();
          modal.classList.toggle('modal--visible');
        }
      });
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
      userPhone: "required",
      policyCheckbox: "required"
    },
     // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 10 букв"
      },
      userPhone: "Введите ваш номер телефона",
      policyCheckbox: "Подтвердите согланисе на обработку данных"
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами, через 10 минут');
          $(form)[0].reset();
        }
      });
    }
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
      policyCheckbox: "required",
      userQuestion: "required"
      // правило объект (блок)
    },  // сообщения
    messages: {
      userName: {
        required: "Введите ваше имя",
        minlength: "Имя не короче 2 букв",
      },
      userPhone: "Введите ваш номер телефона",
      policyCheckbox: "Подтвердите согланисе на обработку данных",
      userQuestion: "Задайте ваш вопрос"      
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    submitHandler: function(form) {
      $.ajax({ 
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами, через 10 минут');
          $(form)[0].reset();
        }
      });
    }
  });
});
  // маска для телефона
$(document).ready(function () {
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});


$(document).ready(function () {
  var player;

  $('.video__play').on('click', function onYouTubePlayer() {
    player = new YT.Player('player', {
      height: '458',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': onPlayerReady,
      }
    });
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 750) {
  //     $('.logo').fadeOut();
  //   } else {
  //     $('.logo').fadeIn();
  //   }
  // });
});

document.addEventListener("DOMContentLoaded", function () {
  const map = document.getElementById('my_map');
  const mapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A38d0e8ce9bcd87a72bc287872874cbeee51763aac6045ab7386ec4d32ccbe938&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=false';

  let myScript = document.createElement('script');
  myScript.setAttribute('src', mapSrc);
  let mapLoad = setTimeout(() => {

    map.append(myScript);

  }, 2500);
  
});




