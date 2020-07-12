$(document).ready(function(){
    $('.banner').slick({
        autoplay:true,
        autoplaySpeed:4000
    });
    
    $('.item-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    $('.blog-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        arrows:false,
        dots:true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    $('.arrivals-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay:true,
        //autoplaySpeed:4000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('#toggle').click(function(){
        $('.menu-area').stop().slideToggle();
    });


    

    //faq tabs    
    $('.tab-links ul li').click(function(){

        $('.tab-links ul li').removeClass('active');
        $(this).addClass('active');
        $('.custom-tab-content .card').removeClass('active');
        var targetItem = $(this).children('a').attr("href");
        var retargetItem = targetItem.replace("#", "");

        //console.log(retargetItem);

        $('.custom-tab-content .card.' + retargetItem).addClass('active');
    
    });
        

    //target blank
    $('#faq .card-body a').attr('target', '_blank');
    $('.lower-footer a').attr('target', '_blank');


});