$(document).ready(function(){
  $('.submenu a.dropdown-button').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});