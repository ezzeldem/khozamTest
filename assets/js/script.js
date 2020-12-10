$(document).ready(function () {
    // intro slider

    $(".intro-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay:true,
        dots: true,
        autoplaySpeed: 1000,
    });

    // opneMnue
    $(".nav-section .menu-icon i").click(function () {
        $(".nav-section .nav-link").addClass("opne-menu");
        $("body").addClass("body-over");
        $(".over-lay").show();
    });
    $(".nav-section .nav-link .close-icon i, .over-lay").click(function () {
        $(".nav-section .nav-link").removeClass("opne-menu");
        $("body").removeClass("body-over");
        $(".over-lay").hide();
    });

    // show form

    $(".select-careers").on("change", function () {
        $("#" + this.value).toggleClass("show-form hide-form").siblings().addClass("hide-form").removeClass("show-form");
    });
});
