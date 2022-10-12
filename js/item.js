$(function () {
    $(window).scroll(function () {
        // $(window).scrollTop() > 200 ? $('.top').addClass('show') : $('.top').removeClass('show')
        if ($(window).scrollTop() > 200) {
            $('.top').addClass('show animate__slideInDown')
            $('.top').removeClass('animate__slideOutUp')
        } else {
            $('.top').removeClass('animate__slideInDown')
            $('.top').addClass('animate__slideOutUp')
        }
    })
})
