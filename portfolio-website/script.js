$(document).ready(() => {
      
    $('.show-button').hide();
   

  });
    $('.hide-button').on('click', () => {
    $('.round').hide(); 
    $('.show-button').show();
    $('.show-button').on('click', () => {
    $('.round').show();
    $('.show-button').hide();
  
});  

});