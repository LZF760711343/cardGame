/**
 * Created by Administrator on 2017/9/18.
 */
$(function () {
    $(".skip:eq(0)").click(function () {
        $("body").animate({scrollTop:$(".ChessClass:eq(0)").position().top});
    });
    $(".skip:eq(1)").click(function () {
        $("body").animate({scrollTop:$(".ChessClass:eq(1)").position().top});
    });
    $(".skip:eq(2)").click(function () {
        $("body").animate({scrollTop:$(".ChessClass:eq(2)").position().top});
    });

});
