$( document ).ready(function() {

   $('.section').mouseenter(function() {
     $(this).css('border-style', 'double');
   });

   $('.section').mouseleave(function() {
     $(this).css('border-style', 'solid');
   })

   $('button').mouseenter(function() {
     $(this).css('background-color', '#722364');
     $(this).css('color', 'white');
   });

   $('button').mouseleave(function() {
     $(this).css('background-color', 'white');
     $(this).css('color', '#722364');
     $(this).css('font-weight', 'bold');
     $(this).css('font-size', '15px');
   });

   $('button').click(function(){
     $('html').css('background-color', 'black');
     $('.section').css('border-color', 'white');
     $('h1').css('color', 'white');
     $('p').css('color', 'white');
   })



});
