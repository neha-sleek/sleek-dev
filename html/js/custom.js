//navbar dropdown

$(function() {
  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");


    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

  });
});

// blog

  $('#carousel_blog').owlCarousel({

    dots:false,
    loop:true,
    nav:true,
    autoplay:false,
    navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1,
        autoplay:true,
        autoplayTimeout: 3000
      },
      600:{
        items:1
      },
      1000:{
        items:3
      }
    }
  })

  //testi
   $('#carousel_testi').owlCarousel({

  dots:true,
  loop:true,
  nav:true,
  autoplay:true,
  navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout: 3000
    },
    600:{
      items:1,
      nav:false
    },
    1000:{
      items:1
    }
  }
})

///// portfolio

  $(function(){$("#leftNavigation").ssdVerticalNavigation()});


  !function(s){s.fn.ssdVerticalNavigation=function(a){"use strict";function t(s){s.toggleClass(l.classActive).siblings().removeClass(l.classActive)}function c(s,a,c){s.hasClass(l.classMaster)&&!a.hasClass(l.classClickable)&&(c.preventDefault(),c.stopPropagation(),t(a))}var l=s.extend({classMaster:"master",classActive:"active",classClickable:"clickable"},a);return this.each(function(){s(this).addClass(l.classMaster).on("click","li a",function(a){try{var t=s(this),l=t.parent("li"),e=l.parent("ul");c(e,l,a)}catch(i){console.log(i)}})})}}(jQuery);

//// portfolio end

///// input type number
var userName = document.querySelector('#numberField');

userName.addEventListener('input', restrictNumber);
function restrictNumber (e) {
  var newValue = this.value.replace(new RegExp(/[^\d]/,'ig'), "");
  this.value = newValue;
}

//// input type text

        $(function() {

  $('.txtNumeric').keydown(function (e) {

    if (e.shiftKey || e.ctrlKey || e.altKey) {

      e.preventDefault();

    } else {

      var key = e.keyCode;

      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {

        e.preventDefault();

      }

    }

  });

});
