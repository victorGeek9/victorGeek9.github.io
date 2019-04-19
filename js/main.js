$(function () {
    var sm = window.matchMedia("(max-width: 768px)");
    var md = window.matchMedia("(max-width: 992px)");
        var myMap, 
            myPlacemark;
        function init(){ 
            if (sm.matches){
                myMap = new ymaps.Map("map", {
                        center: [46.47404,30.746009],
                        zoom: 17
                    });
            }else{
                if (md.matches){
                    myMap = new ymaps.Map("map", {
                        center: [46.47423,30.7490099],
                        zoom: 17
                    });
                }else{
                    myMap = new ymaps.Map("map", {
                        center: [46.47423,30.750000],
                        zoom: 17
                    });
                }
            }                        
            myPlacemark = new ymaps.Placemark([46.474129,30.746009], {
                hintContent: 'Ул Базарная, 36',
                balloonContent: 'LAB Consulting'
            });
                    
            myMap.geoObjects.add(myPlacemark);
        }
        ymaps.ready(init);
        sm.addListener(myFunction);
        md.addListener(myFunction);
    });
//
$(document).ready(function(){
  $('.scroll').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });
  
});
$(function () {
    $('.hamburger').click(function () {
     $('.menu-col').toggleClass('d-none').css("order", "1");
     $('.menu').addClass('hamburger-style');
  });
});
$(function () {
    $('.menu-col .menu__items a').click(function () {
     $('.menu-col').toggleClass('d-none');
  });
});
$(function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.cssload-tetrominos');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
$(function () {
  $('.parallax-btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });
});
//.form__btn