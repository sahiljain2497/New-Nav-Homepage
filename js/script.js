$(document).ready(function () {
    console.log("running");
    $('.nav li').hover(
        function () {
            //show submenu
            $('ul', this).slideDown(500);
        },
        function () {
            //hide submenu
            $('ul', this).slideUp(500);
        });
    var imgset = 1;
    $('#elem-1').hover(function () {
        console.log("x");
        if (imgset != 1) {
            $('.div-main').fadeOut(400, function () {
                $(".detail-text").text("A 60 year old heritage growing against the backdrop of craftsmanship, precision & quality.");
                $(".title-text-1").text("Our");
                $(".title-text-2").text("World");
                $(".title-text-2").css('display', 'inline');
                $(".last-text").text('Read More...');
                $('.div-main').css('background-image', "url(images/page1.jpg)");
                $('.div-main').fadeIn(400);

            });
            imgset = 1;
        }
    })
    $('#elem-2').hover(function () {
        console.log("xx");
        if (imgset != 2) {
            $('.div-main').fadeOut(400, function () {
                $(".detail-text").text("Traditional or contemporary, we balance everything with our spectacular melange of impeccable style & opulence. ");
                $(".title-text-1").text("Our");
                $(".title-text-2").text("expertise");
                $(".title-text-2").css('display', 'inline');
                $(".last-text").text('Explore the Journey');
                $('.div-main').css('background-image', "url(images/page2.jpg)");
                $('.div-main').fadeIn(400);

            });
            imgset = 2;
        }
    })
    $('#elem-3').hover(function () {
        console.log("xx");
        if (imgset != 3) {
            $('.div-main').fadeOut(400, function () {
                $(".detail-text").text("An exceptional array of contemporary & traditional masterpieces whose beauty is enhanced by our unparalleled craftsmanship.");
                $(".title-text-1").text("our");
                $(".title-text-2").text("collection");
                $(".last-text").text('View Lastest Collection');
                $(".title-text-2").css('display', 'inline');
                $('.div-main').css('background-image', "url(images/page3.jpg)");
                $('.div-main').fadeIn(400);

            });
            imgset = 3;
        }
    })

    $('#elem-4').hover(function () {
        console.log("xx");
        if (imgset != 4) {
            $('.div-main').fadeOut(400, function () {
                $(".detail-text").text("Jewellery lasts for generations, preserve and maintain your precious investments in the best way. A few tips by Hazoorilal experts. ");
                $(".title-text-1").text("Jewellery");
                $(".title-text-2").text("Insights");
                $(".title-text-2").css('display', 'inline');
                $(".last-text").text('Explore Our Insights');
                $('.div-main').css('background-image', "url(images/page4.jpg)");
                $('.div-main').fadeIn(400);

            });
            imgset = 4;
        }
    })


    $('#elem-5').hover(function () {
        console.log("xx");
        if (imgset != 5) {
            $('.div-main').fadeOut(400, function () {
                $(".detail-text").text(" We are always delighted to be a part of your lives. Travelling across the globe every year, we showcase our masterpieces at numerous exhibitions. Flip through for the latest in the world of Hazoorilal Jewellers.");
                $(".title-text-1").text("media");
                $(".title-text-2").css('display', 'none');
                $('.div-main').css('background-image', "url(images/page5.jpg)");
                $(".last-text").text('Read More...');
                $('.div-main').fadeIn(400);

            });
            imgset = 5;
        }
    })

    $('#elem-6').hover(function () {
        console.log("xx");
        if (imgset != 6) {
            $('.div-main').fadeOut(400, function () {
                $(".detail-text").text("We are home to some of the most breathtaking collections of fine quality, genuine jewellery. Discover beauty, perfection & exclusivity. ");
                $(".title-text-1").text("Our");
                $(".title-text-2").text("store");
                $(".title-text-2").css('display', 'inline');
                $(".last-text").text('Locate Us');
                $('.div-main').css('background-image', "url(images/page6.jpg)");
                $('.div-main').fadeIn(400);

            });
            imgset = 6;
        }
    })


});
