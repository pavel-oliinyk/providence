
  $('.screen').slick({
  	 autoplay:false,
  	arrows:false,
    autoplay:true,
  	slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
    speed:3000,
    responsive:[
            {
              breakpoint:400,
              settings:{
                autoplay:false,
              }
            }]
   
  })

   $('.slide-face').slick({
   	 autoplay:true,
    centerMode: true,
   	 slidesToShow: 3,
 // centerPadding: '126px',
 autoplaySpeed:2000,
 speed:3000,
 arrows:true,
 prevArrow: '.left-button',
 nextArrow:'.right-button',
pauseOnHover:false,
   })

1
  
      $('.menu-icon-header').click(function () {

          $('.menu-header').slideToggle('medium');
4
      });


      $(function(){
  $('.btn-up, .logo') .click(function(){
    $("html,body").animate({
      scrollTop:0
    },1000);
  })
})

$(window).scroll(function(){
  if($(this).scrollTop()>400) {
    $('.btn-up').fadeIn(1000);
  }
  else {
    $('.btn-up').fadeOut(1000);
  }
});
5

function hideloader(){
  document.getElementById("loading").style.display = "none";
}
 
 

