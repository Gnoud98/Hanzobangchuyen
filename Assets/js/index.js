var FUNCTION = (function () {
 var home_slider=function(){
  $(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 5;
  var syncedSecondary = true;
  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="40%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="40%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, 
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});
   }

var features_news =function(){
$( document ).ready(function() {
    
  $(".featured__news-list").owlCarousel({
    items: 3,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: false,
    margin: 0,
    nav: false,
     dots: false,

  });
});

}

var menu_mb=function(){
  $(document).ready(function(){

    $(".bar-mb").click(function(){
      $(".menu-mb").toggleClass("open")
    })
     $(".close-btn").click(function(){
      $(".menu-mb").toggleClass("open")
    })
 $(".overlay").click(function(){
      $(".menu-mb").toggleClass("open")
    })
    
  })
}

var sticky_menu=function () {
  $(window).scroll(function(){
            if($(this).scrollTop() > 0){
                $('.header__top').addClass('sticky-top')
            } else{
                $('.header__top').removeClass('fixed-top')
            }
        });
}

var view_mode=function() {
  $(".list-mode").click(function(){
  $(".category__product-grid").addClass("category__product-list");
  $(".category__product-grid.category__product-list .row .product__list-mode").addClass("col-lg-12 col-md-12 col-sm-12 col-12");
  $(".category__product-grid.category__product-list .row .product__list-mode").removeClass("col-lg-4");
  $(".btn").toggleClass("active")
});
$(".grid-mode").click(function(){
  $(".category__product-grid").removeClass("category__product-list");
   $(".category__product-grid .row .product__list-mode").removeClass("col-lg-12 col-md-12 col-sm-12 col-12");
   $(".btn").toggleClass("active")
});
}

var support_fix_mobile=function () {
  (function($) {
    var $window = $(window),
        $nav_fixed_mobile = $('.support-fix');
    $window.resize(function resize() {
        if ($window.width() <= 768) {
            return $nav_fixed_mobile.addClass('support-fix-mobile');
        }else
        {
            $nav_fixed_mobile.removeClass('support-fix-mobile');
        }   
    }).trigger('resize');
})(jQuery);
  
}

var back_top=function () {
  var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
}

var collapse=function () {
  $('.expand-button').on('click', function(){
  $('.product_content-description').toggleClass('-expanded');
  
  if ($('.product_content-description').hasClass('-expanded')) {
    $('.expand-button').html('Thu g???n');
  } else {
    $('.expand-button').html('Xem th??m');
  }
});
}

var zoomImg= function(){
  
		$(document).ready(function(){
			$('.zoom-img').zoom();
		});
}

var newsSlider=function(){
       jQuery.fn.liScroll = function(settings) {
        settings = jQuery.extend({
            travelocity: 0.02
            }, settings);		
            return this.each(function(){
                    var $strip = jQuery(this);
                    $strip.addClass("newsticker")
                    var stripHeight = 1;
                    $strip.find("li").each(function(i){
                        stripHeight += jQuery(this, i).outerHeight(true); // thanks to Michael Haszprunar and Fabien Volpi
                    });
                    var $mask = $strip.wrap("<div class='mask'></div>");
                    var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
                    var containerHeight = $strip.parent().parent().height();	//a.k.a. 'mask' width 	
                    $strip.height(stripHeight);			
                    var totalTravel = stripHeight;
                    var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
                    function scrollnews(spazio, tempo){
                    $strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
                    }
                    scrollnews(totalTravel, defTiming);				
                    $strip.hover(function(){
                    jQuery(this).stop();
                    },
                    function(){
                    var offset = jQuery(this).offset();
                    var residualSpace = offset.top + stripHeight;
                    var residualTime = residualSpace/settings.travelocity;
                    scrollnews(residualSpace, residualTime);
                    });			
            });	
    };
    
    $(function(){
        $("ul#ticker01").liScroll();
    });
}

var newUpdateProduct=function(){
  $('#owl-carousel1').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  autoplay: true,
    autoplayTimeout:1500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
     
     
    },
    480:{
       items: 2,
    },
    600: {
      items: 3,
    
     
    },
    1000: {
      items: 5
    }
  }
});
  $('#owl-carousel2').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  autoplay: true,
    autoplayTimeout:2000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      
    },
    480:{
       items: 2,
    },
    600: {
      items: 3,
     
    },
    1000: {
      items: 5
    }
  }
});
$('#owl-carousel3').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout:1200,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
     
    },
    480:{
       items: 2,
    },
    600: {
      items: 3,
     
    },
    1000: {
      items: 5
    }
  }
});
$('#owl-carousel4').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout:1100,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
     
    },
    480:{
       items: 2,
    },
    600: {
      items: 3,
     
    },
    1000: {
      items: 5
    }
  }
});
$('#owl-carousel5').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  autoplay: true,
    autoplayTimeout:1800,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      
    },
    480:{
       items: 2,
    },
    600: {
      items: 3,
    
    },
    1000: {
      items: 5
    }
  }
});
$('#news-section').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  autoplay: true,
    autoplayTimeout:1800,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
     
    },
    480:{
       items: 2,
    },
    600: {
      items: 2,
     
    },
    1000: {
      items: 4
    }
  }
});
$('#partner_slider').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  autoplay: true,
    autoplayTimeout:1800,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
     
    },
    480:{
       items: 2,
    },
    600: {
      items: 3,
      
    },
    1000: {
      items: 5
    }
  }
});

}
return {
    _: function () {
          home_slider()
          menu_mb()
          newsSlider()
          newUpdateProduct()
          view_mode()
          back_top()
          support_fix_mobile()
          collapse()
    }
  }
})();
$(function () {
  FUNCTION._()
});

