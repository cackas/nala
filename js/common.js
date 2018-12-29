//Slider for Block 2
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateHeight = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlideDown, slideInterval);
    var adSwitchInterval = setInterval(adNextSlide, slideInterval);

    $('#bl_2').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlideDown, slideInterval);

        clearInterval(adSwitchInterval);
    }, function() {
        adSwitchInterval = setInterval(adNextSlide, slideInterval);
    });

    $('#down-btn').click(function() {
        nextSlideDown();
    });

    $('#up-btn').click(function() {
        prevSlideUp();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateHeight = -$('#bl_2').height() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(0, ' + translateHeight + 'px)',
                '-webkit-transform': 'translate(0, ' + translateHeight + 'px)',
                '-ms-transform': 'translate(0, ' + translateHeight + 'px)',
            });
            slideNow = navBtnId + 1;
        }
    });



    $('.slide-nav-btn_ad').click(function() {
        adNavBtnId = $(this).index();

        if (adNavBtnId + 1 != adSlideNow) {
            adTranslateWidth = -$('#bl_2').width() * (adNavBtnId);
            $('#slidewrapper_ad').css({
                'transform': 'translate(' + adTranslateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + adTranslateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + adTranslateWidth + 'px, 0)',
            });
            adSlideNow = adNavBtnId + 1;
        }
    });



    /*$('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });    

    $('#next-btn_2').click(function() {
        nextSlide2();
    });

    $('#prev-btn_2').click(function() {
        prevSlide2();
    });  */

    $('#mouse').click(function() {
        slowScroll('#bl_2');
    });

    $('#mn_nav ul li:first-child').click(function() {
        slowScroll('#bl_2');
    }); 

    $('#mn_nav ul li:nth-child(2)').click(function() {
        slowScroll('#bl_3');
    }); 

    $('#mn_nav ul li:nth-child(3)').click(function() {
        slowScroll('#bl_4');
    }); 

     $('#next-btn_ad').click(function() {
        adNextSlide();
    });

    $('#prev-btn_ad').click(function() {
        adPrevSlide();
    });    

});


function nextSlideDown() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateHeight = -$('#bl_2').height() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(0, ' + translateHeight + 'px)',
            '-webkit-transform': 'translate(0, ' + translateHeight + 'px)',
            '-ms-transform': 'translate(0, ' + translateHeight + 'px)',
        });
        slideNow++;
    }
}

function prevSlideUp() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateHeight = -$('#bl_2').height() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(0, ' + translateHeight + 'px)',
            '-webkit-transform': 'translate(0, ' + translateHeight + 'px)',
            '-ms-transform': 'translate(0, ' + translateHeight + 'px)',
        });
        slideNow = slideCount;
    } else {
        translateHeight = -$('#bl_2').height() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(0, ' + translateHeight + 'px)',
            '-webkit-transform': 'translate(0, ' + translateHeight + 'px)',
            '-ms-transform': 'translate(0, ' + translateHeight + 'px)',
        });
        slideNow--;
    }
}
//End Slider


/*//Carousel for Block 4
var carouselSlideNow = 1;
var carouselSlideCount = $('.carousel-wrapper').children().length-2;
var slideInterval = 3000;
var translateWidth = 0;

function nextSlide() {
    if (carouselSlideNow == carouselSlideCount || carouselSlideNow <= 0 || carouselSlideNow > carouselSlideCount) {
        $('.carousel-wrapper').css('transform', 'translate(0, 0)');
        carouselSlideNow = 1;
    } else {
        translateWidth = -$('.slide').width() * (carouselSlideNow);
        $('.carousel-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        carouselSlideNow++;
    }
}

function prevSlide() {
    if (carouselSlideNow == 0 || carouselSlideNow <= -1 || carouselSlideNow > carouselSlideCount) {
        translateWidth = -$('.slide').width() * (carouselSlideCount - 1);
        $('.carousel-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        carouselSlideNow = carouselSlideCount;
    } else {
        translateWidth = -$('.slide').width() * (carouselSlideNow - 2);
        $('.carousel-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        carouselSlideNow--;
    }
}
//End Carousel


//Carousel 2 for Block 4
var carouselSlideNow2 = 1;
var carouselSlideCount2 = $('.carousel-wrapper_2').children().length-2;
var slideInterval = 3000;
var translateWidth2 = 0;

function nextSlide2() {
    if (carouselSlideNow2 == carouselSlideCount2 || carouselSlideNow2 <= 0 || carouselSlideNow2 > carouselSlideCount2) {
        $('.carousel-wrapper_2').css('transform', 'translate(0, 0)');
        carouselSlideNow2 = 1;
    } else {
        translateWidth2 = -$('.slide').width() * (carouselSlideNow2);
        $('.carousel-wrapper_2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        carouselSlideNow2++;
    }
}

function prevSlide2() {
    if (carouselSlideNow2 == 0 || carouselSlideNow2 <= -1 || carouselSlideNow2 > carouselSlideCount2) {
        translateWidth2 = -$('.slide').width() * (carouselSlideCount2 - 1);
        $('.carousel-wrapper_2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        carouselSlideNow2 = carouselSlideCount2;
    } else {
        translateWidth2 = -$('.slide').width() * (carouselSlideNow2 - 2);
        $('.carousel-wrapper_2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        carouselSlideNow2--;
    }
}
//End Carousel 2*/


//Adaptive Slider for block 2
var adSlideNow = 1;
var adSlideCount = $('#slidewrapper_ad').children().length;
var slideInterval = 3000;
var adTranslateWidth = 0;

function adNextSlide() {
    if (adSlideNow == adSlideCount || adSlideNow <= 0 || adSlideNow > adSlideCount) {
        $('#slidewrapper_ad').css('transform', 'translate(0, 0)');
        adSlideNow = 1;
    } else {
        adTranslateWidth = -$('#bl_2').width() * (adSlideNow);
        $('#slidewrapper_ad').css({
            'transform': 'translate(' + adTranslateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + adTranslateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + adTranslateWidth + 'px, 0)',
        });
        adSlideNow++;
    }
}

function adPrevSlide() {
    if (adSlideNow == 1 || adSlideNow <= 0 || adSlideNow > adSlideCount) {
        adTranslateWidth = -$('#bl_2').width() * (adSlideCount - 1);
        $('#slidewrapper_ad').css({
            'transform': 'translate(' + adTranslateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + adTranslateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + adTranslateWidth + 'px, 0)',
        });
        adSlideNow = adSlideCount;
    } else {
        adTranslateWidth = -$('#bl_2').width() * (adSlideNow - 2);
        $('#slidewrapper_ad').css({
            'transform': 'translate(' + adTranslateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + adTranslateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + adTranslateWidth + 'px, 0)',
        });
        adSlideNow--;
    }
}
//End Adaptive Slider for block 2


//SlowScroll
function slowScroll(id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 800);
    return false;
}
//End SlowScroll

//Slick Slider for Block 4
$('.carousel-wrapper').slick({
  arrows: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$('#prev-btn').on('click', function(){
    $('.carousel-wrapper').slick("slickPrev");
});
$('#next-btn').on('click', function(){
    $('.carousel-wrapper').slick("slickNext");
});

//Slick Slider 2 for Block 4
$('.carousel-wrapper_2').slick({
  arrows: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$('#prev-btn_2').on('click', function(){
    $('.carousel-wrapper_2').slick("slickPrev");
});
$('#next-btn_2').on('click', function(){
    $('.carousel-wrapper_2').slick("slickNext");
});

//Magnific Popup
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});