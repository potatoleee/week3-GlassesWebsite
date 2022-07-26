
$(document).ready(() => {

  $('.btn__buger').on('click',function(e){
    $('.btn__buger').toggleClass('open');
    $('.nav__content').toggleClass('open');
    $('.btn__buger--middle').toggleClass('open');
  })
  
  // $('.btn__buger').click(function(e){
  //   $('btn__buger').toggleClass('open');
  // })
})
// console.log('Hello!');

// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });

// $(document).ready(() => {
//     console.log('HesSchool Hello!');
//   });

