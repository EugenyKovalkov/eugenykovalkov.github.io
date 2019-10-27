$(document).ready(function(){
  $('.certificates-slider').slick({
  	infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        prevArrow:'<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        prevArrow:'<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
        slidesToScroll: 1
      }
    }
    ]      
  });
});