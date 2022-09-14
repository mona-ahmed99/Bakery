// loading screen
$(document).ready(function () {
    $("#loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto")
    });


    let aboutOffset = $("#about").offset().top;


    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();

        if (wScroll > aboutOffset - 50) {
            $("#main-nav").css("backgroundColor", "rgba(142, 119, 84,.7)");
            $("#btnUp").fadeIn(1000);
        }
        else {
            $("#main-nav").css("backgroundColor", "transparent");
            $("#btnUp").fadeOut(1000);
        }
    });

    // smoothing scroll
    $("#btnUp").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000)
    })

    $("a").click(function (e) {
        let aHref = $(e.target).attr("href");
        let sectionOffset = $(aHref).offset().top;
        $("html, body").animate({ scrollTop: sectionOffset }, 1000);
    });
});