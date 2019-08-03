$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    if ($(".menu").css("display") == "none") {
        $(".menu").css({
            "display": "flex"
        });
        $("body").css({
            "overflow": "hidden"
        });
    } else {
        $(".menu").css({
            "display": "none"
        });
        $("body").css({
            "overflow": "auto"
        });

    }
});

$(".menu-item-science").click(function () {
    $(this).find("i").toggleClass("fa-caret-down").addClass("fa-caret-up");

});


$(".menu-item-science-mobile").click(function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $(".menu-science-subitems-mobile").fadeToggle();
});




//         відкрити модальне вікно для desctop
$('#openModal').click(function () {
    $('.modalWind').css({
        display: 'block'
    });
    $('.modalWind').animate({

        top: '0%'
    }, 10);
    $('.close').animate({

        top: '95%'
    }, 200);

    $('.modalWind').scrollTop(0);


});
//         закрити модальне вікно для desctop
$('.close').click(function () {

    $('.modalWind').animate({

        top: '100%'
    }, 10);
    $('.close').animate({

        top: '155%'
    }, 60);

});
//         відкрити модальне вікно для mobile
$('#openModalMob').click(function () {
    $('.modalWindMob').css({
        display: 'block'
    });
    $('.modalWindMob').animate({

        top: '60px'
    }, 10);
    $('.closeMob').animate({

        top: '90%'
    }, 150);


    $('.modalWindMob').scrollTop(0);


});
//         закрити модальне вікно для mobile
$('.closeMob').click(function () {
    $('.closeMob').animate({

        top: '155%'
    }, 10);
    $('.modalWindMob').animate({

        top: '100%'
    }, 10);
   

    var spoilers1 = $(".spoilerM");
    spoilers1.each(function () {
        var spoiler1 = $(this);
       
            $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
            spoiler1.find(".spoiler-body").slideUp(1000);
            spoiler1.find(".vertical").css({
                "display": "block"
            });

        
    })



});
//         відкрити додаткову інфу для desctop
var open = $(".sec2");
open.each(function () {
    var openB = $(this);
    openB.find(".moreOpen").click(function () {
        if ($(this).hasClass("moreOpen")) {
            //                заміна + на -
            $(this).removeClass("moreOpen").addClass("moreClose");
            openB.find(".openBox").slideToggle("slow");
        } else {
            $(this).removeClass("moreClose").addClass("moreOpen");
            openB.find(".openBox").slideToggle("slow");
        }
    });

})
//         відкрити додаткову інфу для mobile       
var spoilers = $(".spoiler");
spoilers.each(function () {
    var spoiler = $(this);
    spoiler.find(".spoiler-header").click(function () {
        if ($(this).hasClass("spoiler-open-btn")) {
            $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
            spoiler.find(".spoiler-body").slideUp(1000);
            spoiler.find(".spoiler-header").css("border-top", "1px solid black");
            spoiler.find(".spoiler-header").css("border-bottom", "1px solid black");
            spoiler.find(".vertical").css({
                "display": "block"
            });
        } else {
            $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
            spoiler.find(".spoiler-body").slideDown(1000);
            spoiler.find(".spoiler-header").css("border", "none");
            spoiler.find(".vertical").css({
                "display": "none"
            });
        }
    });
});

//slider
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 2000
    });
});
//slider  prevent scroll
window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function (e) {
    if ($(e.target).closest('.slider2').length == 1) {
        blockMenuHeaderScroll = true;
    }
});
$(window).on('touchend', function () {
    blockMenuHeaderScroll = false;
});
$(window).on('touchmove', function (e) {
    if (blockMenuHeaderScroll) {
        e.preventDefault();
    }
});
//         відкрити modal для mobile
var spoilers1 = $(".spoilerM");
spoilers1.each(function () {
    var spoiler1 = $(this);
    spoiler1.click(function () {
        if ($(this).hasClass("spoiler-open-btn")) {
            $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
            spoiler1.find(".spoiler-body").slideUp(1000);
            spoiler1.find(".vertical").css({
                "display": "block"
            });

        } else {
            $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
            spoiler1.find(".spoiler-body").slideDown(1000);
            spoiler1.find(".vertical").css({
                "display": "none"
            });
        }
    });
});
