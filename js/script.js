$(document).ready(function(){
    $('.block_top_menu_bottom').click(function(){
        $(".header_block_1_menu").toggle( "slow" );
    });
    window.onresize = function () {
        width = document.documentElement.clientWidth;
        if (width > 992) {
            $(".header_block_1_menu").show()
            return this;
        } else {
            $(".header_block_1_menu").hide()
            return this;
        }
    }

    var width_block = $(document).width();

    if(width_block < 992){
    width = document.documentElement.clientWidth;
    $(window).scroll(function () {

        if ($(this).scrollTop() > 80 && width_block < 900) {
            $('.header_block_1').css({position: "fixed"});
        }

        if ($(this).scrollTop() < 80) {
            $('.header_block_1').css({position: "relative"});
        }

    });
        return this;
    } else {
        $('.header_block_1').css({position: "relative"});
    }

    $('.dropdown-toggle').dropdown();
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });

});
