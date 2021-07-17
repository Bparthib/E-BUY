$(function () {
    // Banner Slider Js
    $(".banner_slider_container").slick({
        autoplay: 1000,
        fade: true,
        speed: 1000,
        cssEase: 'linear',
        prevArrow: '<i class="slider_arrow slider_left_arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slider_arrow slider_right_arrow fas fa-chevron-right"></i>'
    });

    //Featured Filterizr Js
    $(".featured_filter_container").filterizr();
});
