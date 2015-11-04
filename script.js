$( document ).ready(function() {

   $('.section').mouseenter(function() {
     $(this).css('border-style', 'double');
   });

   $('.section').mouseleave(function() {
     $(this).css('border-style', 'solid');
   })

   $('button').click(function(){
     $('html').css('background-color', 'black');
     $('.section').css('border-color', 'white');
     $('h1').css('color', 'white');
     $('p').css('color', 'white');
   })


});
