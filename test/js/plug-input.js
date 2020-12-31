$(document).ready(function(){
    $("#first-name, #last-name").keypress(function(event){
        var inputValue = event.which;
        if((inputValue > 47 && inputValue < 58) && (inputValue != 32)){
            event.preventDefault();
        }
    });
});


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

  