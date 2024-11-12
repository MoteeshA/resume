$(document).ready(function () {

    $("nav ul li a").on("click", function (event) {
        event.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 50,
        }, 800);
    });


    $(window).on("scroll", function () {
        $(".card").each(function () {
            const topOfElement = $(this).offset().top;
            const bottomOfWindow = $(window).scrollTop() + $(window).height();
            if (bottomOfWindow > topOfElement) {
                $(this).animate({ opacity: 1 }, 800);
            }
        });
    });
});
