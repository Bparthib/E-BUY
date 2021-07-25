$(function () {
  // Banner Slider Js
  $(".banner_slider_container").slick({
    autoplay: 1000,
    fade: true,
    speed: 1000,
    cssEase: "linear",
    prevArrow:
      '<i class="slider_arrow slider_left_arrow fas fa-chevron-left"></i>',
    nextArrow:
      '<i class="slider_arrow slider_right_arrow fas fa-chevron-right"></i>',
  });

  //Featured Filterizr Js
  $(".featured_filter_container").filterizr();

  //Latest Product Slider Js
  $(".latest_product_slider").slick({
    autoplay: 1000,
    slidesToShow: 4,
    prevArrow:
      '<i class="slider_arrow slider_left_arrow fas fa-chevron-left"></i>',
    nextArrow:
      '<i class="slider_arrow slider_right_arrow fas fa-chevron-right"></i>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    }]
  });

  //Testimonial Slider Js
  $(".testimonial_slider_item").slick({
    speed: 500,
    slidesToShow: 2,
    prevArrow:
      '<i class="slider_arrow slider_left_arrow fas fa-chevron-left"></i>',
    nextArrow:
      '<i class="slider_arrow slider_right_arrow fas fa-chevron-right"></i>',
  });

  //Countdown Js
  $(".count_down").countdown("2021/8/25", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="count_down_item col-md-3"><span>%D</span><span>Days</span></div>' +
          '<div class="count_down_item col-md-3"><span>%H</span><span>Hours</span></div>' +
          '<div class="count_down_item col-md-3"><span>%M</span><span>Mins</span></div>' +
          '<div class="count_down_item col-md-3"><span>%S</span><span>Sec</span></div>'
      )
    );
  });
});
