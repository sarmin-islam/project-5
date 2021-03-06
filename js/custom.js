
//typing effect
var typed = new Typed('#typed', {

    // Waits 1000ms after typing "First"
    strings: ['about night', 'bird'],
    loop:true,


  });
  //menu-list filltering
  $('.menu-list ul li a').click(function(){
     $(this).addClass('active');
  });
  //venubox effect
  $('.venobox').venobox(); 
//silck effect banner text
$('.banner').slick({
   autoplay:true,
   arrows:false,
   autoplaySpeed:1500,
});
	
//silck effect centermode events
$('.events-content').slick({
   autoplay:true,
   arrows:false,
   autoplaySpeed:1500,
   slidesToShow:4,
   slidesToScroll:1,
   centerMode:true,
   centerPadding:'60px',
});
//silck effect upcoming events
$('.image-slider').slick({
   autoplay:true,
   arrows:false,
   asNavFor: '.text-slider'
});
$('.text-slider').slick({
   autoplay:true,
   arrows:false,
   asNavFor: '.image-slider'
});