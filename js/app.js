$(document).ready(function(){
	$('.question form .left .phone').inputmask({
		"mask": "+7(999) 999-9999",
		//"onincomplete": function(){ alert('Ведите номер полносью'); },
	});
	$('.order form .date').inputmask({
		"mask": "99/99/9999", placeholder: 'дд/мм/гггг'
		//"onincomplete": function(){ alert('Ведите номер полносью'); },
	});

	var $menu = $("#menu");
 
   $(window).scroll(function(){
      if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
         $menu.removeClass("default").addClass("fixed");
         $menu.closest('header').find('.head-bottom').css('padding-top', '142px');
      } else 
      	if($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
         $menu.removeClass("fixed").addClass("default");
         $menu.closest('header').find('.head-bottom').css('padding-top', '20px');
      	}
      });


   $("header nav").on("click","a", function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	   self = $(this);
	   self.closest('header nav').find('li').removeClass('active');
	   self.closest('li').addClass('active');
	});

	$('#open-menu').click( function(event){
		event.preventDefault();
		$('#menu-burger .left').animate({left: "0"},800);
		$('.overlay-menu').fadeIn(400).css('display', 'block');
	});

	$('.close, .overlay-menu').click( function(){
		$('#menu-burger .left').animate({left: "-100%"},800);
		$('.overlay-menu').fadeIn(400).css('display', 'none');
	});

	$('#menu .right .button-head, .head-bottom .button, .program .right .button, #menu-burger .left .right .button-head').click(function(event){
		event.preventDefault();
		$('.order').fadeIn(400).css('display', 'block');
		$('.overlay').fadeIn(400).css('display', 'block');
	});

	$('.close, .overlay').click( function(){
		$('.order').fadeIn(400).css('display', 'none');
		$('.overlay').fadeIn(400).css('display', 'none');
	});

	$('.academi .left a.img1').fancybox({
		loop     : true,
	});
	$('.academi .left a.img2').fancybox({
		loop     : true,
	});
	$('.academi .right a.img1').fancybox({
		loop     : true,
	});
	$('.academi .right a.img2').fancybox({
		loop     : true,
	});

	$(document).on('submit','.form-order',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.success').fadeIn(400).css('display', 'block');
                        setTimeout(function () {
                        	$('.success').fadeOut(400).css('display', 'none');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });

	$(document).on('submit','.form-big',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-big.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.order').fadeIn(400).css('display', 'none');
                        $('.success').fadeIn(400).css('display', 'block');
                        setTimeout(function () {
                        	$('.success').fadeOut(400).css('display', 'none');
                        	$('.overlay').fadeOut(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });


});