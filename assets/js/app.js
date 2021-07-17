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

    //Latest Product Slider Js
    $(".latest_product_slider").slick({
        slidesToShow: 4,
        prevArrow: '<i class="slider_arrow slider_left_arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slider_arrow slider_right_arrow fas fa-chevron-right"></i>'
    });
    
    $(".testimonial_slider_item").slick({
        speed: 500,
        slidesToShow: 2,
        cssEase: 'linear',
        prevArrow: '<i class="slider_arrow slider_left_arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slider_arrow slider_right_arrow fas fa-chevron-right"></i>'
    });
});
