$(document).ready(function ($) {
    "use strict";
    awe_owl();
    awe_backtotop();
    
    $('#filter-by-size').on('change', function() {
        $(location).attr('href',this.value);
    });
    $(".search-collapse").click(function () {
        $(".logo-search").toggleClass("active");
    });
    $('.addtocart').prop('disabled', false);
    $('.addtocart').removeClass('disabled');
    $('.add').click(function () {
        $(this).prev().val(+$(this).prev().val() + 1);
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    if($('.badge-save').length > 0) {
        $('.productpricetext').addClass('color-red');
    }
    $('.icon-search-mobile').click(function(){
        $(this).toggleClass('active');
        $('.box-search-mobile').toggleClass('active');
    });
    $('.close-search').click(function(){
        $('.box-search-mobile').removeClass('active');
        $('.icon-search-mobile').removeClass('active');
    });
    $('body').click(function () {
        $(".top-header .col-xs-12.col-sm-4").removeClass("active");
    });
    $('.alert-footer .close').click(function() {
        $(this).parent().hide();
        $("body").removeClass("padding-bottom");
    });
    if($('.alert-footer').length > 0){
        $("body").addClass("padding-bottom");
    }
    // $("#filters .item>.list-group-item h3").after('<i class="fas fa-chevron-down"></i>');
    $("#filters .item>.list-group-item").click(function() {
        $(this).next('.content-list-group').toggleClass('hidden');
        $(this).toggleClass('active');
    })
    $(".icon-menu-mobile").click(function () {
        $(this).toggleClass('active');
        $(".navbar-responsive-collapse").toggleClass('active');
        $(".wrapper-nav").toggleClass("active");
    });
    $('.head-select-mobile').click(function() {
        $(this).toggleClass('active');
        $('.wrap-nav-select').toggleClass('active');
    });
    $(".menu-header .dropdown-hover>.dropdown-menu").each(function () {
        var lenght = $(this).children('.head-list-wrapper').length;
        var so_du = (lenght % 4);
        if (so_du > 0){
            $(this).addClass('has-border');
        }
    });
    $(".fa-trigger").click(function () {
        $(this).parent().next().addClass('active');
    });
    $('a[data-fancybox="gallery"]').fancybox();
    if($(".emailpopup").length > 0){
        $(".emailpopup").fancybox();
    }
    var hrefBrandDetail = $('.inner-tablet-flex .border-brands').next('a').attr('href');
    $(".brand-detail .d-block").attr("href", hrefBrandDetail);
    // $('.dropdown-menu-horizontal').before('<fa class="fa fa-chevron-right icon-lv3"></fa>')
    $(".head-list-wrapper > li .icon-lv3").click(function () {
        $(this).next().addClass('active');
        $("html, .navbar-responsive-collapse").animate({ scrollTop: 0 }, "slow");
    });
    $(".menu-header .navbar-nav:first-child>li .dropdown-menu").each(function () {
        var text = $(this).parent().find('a').first().text();
        $(this).prepend("<h3 class='head-lv2'>"+text+"</h3>")
    });
    $(".head-lv2").click(function () {
        $(this).parent().removeClass('active');
    });
    $('.wrapper-nav .dropdown-menu').before('<div class="click-menu"><i class="fas fa-caret-down"></i></div>');
    $(".text-category-click").click(function () {
        $(this).toggleClass("active");
        $(this).next().toggleClass('active');
    });
    $('.click-menu').click(function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
        $(this).parent().parent().children('li').children('ul').not($(this).next()).removeClass('active');
        $(this).parent().parent().children('li').children('.click-menu').not($(this)).removeClass('active');
    });
    $(".icon-click-search").click(function () {
        $(".search-mobile").toggleClass("active");
    });
    $(".close-search").click(function () {
        $(".search-mobile").removeClass("active");
    });
    $(".d-inline-block .icon-close").click(function () {
        $(this).parents('.d-inline-block').removeClass('active');
    });
    $(".box-right-menu .d-inline-block>a").click(function () {
        $(this).parents('.d-inline-block').toggleClass("active");
    });
    $("#filters .content-list").before('<div class="click-content-list"></div>');
    $(".click-content-list").click(function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
    $('.list-lv2').before('<div class="before-list"></div>');
    $('.before-list').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    let src_img_ctxt = $("#home_ctxt_img img").attr("src");
    $("#home_ctxt_img img").parent("p").hide();
    $("#home_content_text").css("background-image", 'url(' + src_img_ctxt + ')');
    $(".click-sidebarleft").click(function () {
        $(this).toggleClass('active');
        $('#left-sidebar').toggleClass('active');
    });
    $(".search-mobile").click(function (e) {
        e.stopPropagation();
        $(".top-header .col-xs-12.col-sm-4").toggleClass("active");
    });
    $(".header-search").click(function (e) {
        e.stopPropagation();
    });
    $("h4.nav-link").click(function() {
        $(this).toggleClass('active');
        $(this).next(".nav").toggleClass('active');
    });
    $('.icon-filter-991').click(function() {
        $(this).toggleClass('active');
        $('#left-sidebar').toggleClass('active');
    });
    $('#page_contact_form_right').insertAfter($('#page_contact_form_left'));
    $('.head-menu-nav .dropdown-menu ul').each(function() {
        $(this).prev('a').append('<i class="fas fa-chevron-right"></i>');
    });
    $('#filters>li.list-group-item>.heading4').click(function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
        $(this).parent().toggleClass('active');
    });
    $(window).on("load resize scroll",function(){
        let w_width = $(window).width();
        let thumblist_images = $(".product-images");
        let title = $(".wrap-border-detail");
        let price = $(".after-border-detail");
        if (w_width > 767){
            $('#insert-before-991').insertBefore($('#insert-after-991'));
            title.insertAfter(price);

            $('#filters>li.list-group-item>.heading4').addClass('active');
            $('#filters>li.list-group-item').addClass('active');
            $('#filters>li.list-group-item>ul').addClass('active');
        }else{
            $('#insert-before-991').insertBefore($('#left-sidebar'));
            title.insertAfter(thumblist_images);
            $('#filters>li.list-group-item>.heading4').removeClass('active');
            $('#filters>li.list-group-item').removeClass('active');
            $('#filters>li.list-group-item>ul').removeClass('active');
        }
    });
    $('.navbar-inverse .navbar-nav>li>a').click(function(){
        $('.navbar-inverse .navbar-nav>li>.collapse').not($(this).next('ul')).removeClass('in');
        $(this).next('ul').toggleClass('in');
        $('.navbar-inverse .navbar-nav>li>a>.caret').not($(this).children('.caret')).removeClass('active');
    });
    $('#navbar-top a[data-toggle="collapse"]').click(function(){
        $(this).children('.caret').toggleClass('active');
    });
    if($('#left-sidebar #filters').length > 0){
        $('.sidebar_web_infomation').addClass('hidden');
    }
    $('.sidebar_web_infomation .card-header-mobile').click(function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
    $('.content-list-group').each(function() {
        let childLength = $(this).children().length;
        if(childLength > 8) {
            $(this).append('<div class="click-more-less">more...</div>');
        }
    });
    $(".click-more-less").click(function() {
        $(this).parent().toggleClass('active');
        let textMore = "more...";
        if($(this).text() == "more..."){
            textMore = "less...";
        }
        $(this).toggleClass('active');
        $(this).text(textMore);
    });
    $('.tabbable .card-header').click(function() {
        $(this).toggleClass('active');
    })
    $(".title-click-content.has-click h3").before('<i class="fas fa-chevron-down"></i>');
    $(".title-click-content.has-click").click(function() {
        $(this).toggleClass('active');
        $(this).next("div").toggleClass('active');
    })
    $(".section-tabs-product .card-header").click(function () {
        $(this).toggleClass("current-link");
    });
    $('.wrap-page-blog').parent().addClass('page_blog_hidden');
    let url_path = window.location.pathname;
    $("#left-sidebar a").each(function () {
        let text = $(this).attr("href");
        if (url_path.indexOf(text) != -1){
            $(this).addClass("active");
        }
    });
    $('.wrap-menu-product-all').after('<div class="overlay-menu"></div>')
    $(document).mouseup(function(e) {
        let container_nav = $(".wrap-menu-product-all");
        if (!container_nav.is(e.target) && container_nav.has(e.target).length === 0) {
            container_nav.removeClass('active');
            $('.click-shop-all').removeClass('active');
            $('body').removeClass('body-menu-right');
        }
    });
    $('.wrap-menu-product-all>ul ul').before('<span class="icon-bottom-click"></span>');
    $('.icon-bottom-click').click(function() {
        let currentThisNext = $(this).next();
        let currentThisPev = $(this).prev();
        let parentsThis = $(this).parent().parent();
        parentsThis.children('li').children('a').not(currentThisPev).removeClass('active');
        parentsThis.children('li').children('ul').not(currentThisNext).removeClass('active');
        parentsThis.children('li').children('.icon-bottom-click').not($(this)).removeClass('active');
        
        $(this).prev().toggleClass('active');
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('active');


    });
    $('.click-shop-all').click(function() {
        $('body').toggleClass('body-menu-right');
        $('.wrap-menu-product-all').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('button[data-toggle="collapse"]').click(function() {
        $(this).toggleClass('active');
    });
    $('.wrapper-footer .col-item:nth-child(2)').addClass('col-2');
    $('.wrapper-footer .col-item:nth-child(3)').addClass('col-3');
    $('.wrapper-footer .col-item:nth-child(4)').addClass('col-4');
    $('.wrapper-footer .col-item:nth-child(2) ul').addClass('col-two-child');
    if($('.cts_altImgWrapper').length < 6){
        $('.slick-product-nav').addClass('fix-height');
    }

    if($('.wrap-payment img').attr('src') == '//assets.netostatic.com/assets/neto-cdn/afterpay/ap-01.jpg'){
        $('.wrap-payment img').before('<span class="after-pay" data-target="#afterpayModal" data-toggle="modal"></span>') 
    }

    $('#left-sidebar .panel .list-group .list-group-item').each(function(){
        if(location?.pathname.indexOf($(this).attr('href')) != -1){
            $(this).addClass('active');
        }
    });
    
    var wwidth = $(window).width();
    start_owlcarousel(wwidth);
    $(window).resize(function () {
        let width = $(window).width();
        start_owlcarousel(width);
    });

    function start_owlcarousel(width){
        if (width < 768) {
            $(".carousel-resize").each(function() {
                $(this).addClass('owl-carousel owl-theme');
                var xxs_item = $(this).attr('data-xxs-items');
                var xs_item = $(this).attr('data-xs-items');
                var md_item = $(this).attr('data-md-items');
                var lg_item = $(this).attr('data-lg-items');
                var sm_item = $(this).attr('data-sm-items');
                var margin	= $(this).attr('data-margin');
                var dot		= $(this).attr('data-dot');
                var loop	= $(this).attr('data-loop');
                var nav		= $(this).attr('data-nav');
                $(this).owlCarousel({
                    loop : true,
                    margin:Number(margin),
                    nav: true,
                    responsiveClass: true,
                    dots: false,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                    responsive:{
                        0:{
                            items:Number(xxs_item)
                        },
                        543:{
                            items:Number(xs_item)
                        },
                        768:{
                            items:Number(sm_item)
                        },
                        992:{
                            items:Number(md_item)
                        },
                        1200:{
                            items:Number(lg_item)
                        }
                    },
                });
            })
        } else {
            $('.carousel-resize').trigger('destroy.owl.carousel');
        }
    }

    var width = $(window).outerWidth();

    //Rating
    var $star_rating = $('.star-rating .fa');
    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();
});
function awe_backtotop() {
    if ($('.back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
} window.awe_backtotop=awe_backtotop;
function awe_owl() {
    setTimeout(function(){
        $('.owl-carousel').each( function(){
            var xxs_item = $(this).attr('data-xss-items');
            var xs_item = $(this).attr('data-xs-items');
            var md_item = $(this).attr('data-md-items');
            var lg_item = $(this).attr('data-lg-items');
            var sm_item = $(this).attr('data-sm-items');
            var margin	= $(this).attr('data-margin');
            var dot		= $(this).attr('data-dot');
            var loop	= $(this).attr('data-loop');
            var nav		= $(this).attr('data-nav');
            var auto_play = $(this).attr('data-auto-play');
            var auto_height = $(this).attr('data-auto-height');
            var slideby = $(this).attr('data-slideby');
            if (typeof margin !== typeof undefined && margin !== false) {
            } else{
                margin = 0;
            }
            if (typeof xxs_item !== typeof undefined && xxs_item !== false) {
            } else{
                xxs_item = 1;
            }
            if (typeof xs_item !== typeof undefined && xs_item !== false) {
            } else{
                xs_item = 1;
            }
            if (typeof sm_item !== typeof undefined && sm_item !== false) {

            } else{
                sm_item = 3;
            }
            if (typeof md_item !== typeof undefined && md_item !== false) {
            } else{
                md_item = 3;
            }
            if (typeof dot !== typeof undefined && dot !== true) {
                dot = dot;
            } else{
                dot = false;
            }
            if (typeof loop !== typeof undefined && loop !== true){
                loop = loop;
            } else {
                loop = false;
            }
            if (typeof nav !== typeof undefined && nav !== true) {
                nav = nav;
            } else{
                nav = false;
            }
            if (typeof auto_play !== typeof undefined && auto_play !== true){
                auto_play = auto_play;
            } else {
                auto_play = false;
            }
            if (typeof auto_height !== typeof undefined && auto_height !== true){
                auto_height = auto_height;
            } else {
                auto_height = false;
            }
            $(this).owlCarousel({
                loop: loop,
                margin:Number(margin),
                responsiveClass:true,
                dots:dot,
                nav:nav,
                slideBy: slideby,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                responsive:{
                    0:{
                        items:Number(xxs_item)
                    },
                    543:{
                        items:Number(xs_item)
                    },
                    768:{
                        items:Number(sm_item)
                    },
                    992:{
                        items:Number(md_item)
                    },
                    1200:{
                        items:Number(lg_item)
                    }
                },
                //autoplay: auto_play,
                autoplay: false,
                autoPlayHoverPause: true,
                autoHeight: false,
                rewind: true
            })
        })
    },300);
} window.awe_owl=awe_owl;

(function() {
    const brandLayout = function() {
        if ($(".brand-data .item").length > 0) {
            let alphabet = '#abcdefghijklmnopqrstuvwxyz'.split('');
            let brandsObject = {};
            let i;
            for (i = 0; i < alphabet.length; i++) {
                brandsObject[alphabet[i]] = [];
            }
            $(".brand-data .item").each(function() {
                let $self = $(this);
                let $name = $self.data("name");
                let $alpha = $name.substring(0, 1).toLowerCase();
                if(!$alpha.match(/[a-z]/i)){
                    $alpha = '#';
                }
                let $item = {
                    name: $name,
                    url: $self.data("url"),
                    alt: $self.data("alt-src"),
                    orig: $self.data("orig-src")
                }
                brandsObject[$alpha].push($item);
            });
            for (i = 0; i < alphabet.length; i++) {
                let $key = alphabet[i];
                let $keyclass = (brandsObject[alphabet[i]].length > 0) ? 'hasBrand' : '';
                let $keyList = '<li class="'+ $keyclass +'"><a href="#brand_' + $key + '" data-brand="brand_' + $key + '" class="' + $keyclass + '">' + $key + '</a></li>';
                $(".alphabet-list ul").append($keyList);
                if (brandsObject[alphabet[i]].length > 0) {
                    let $brandKey = '<div id="brand_' + alphabet[i] + '" class="brands-section clr">' +
                        '<div class="character"><span>' + alphabet[i] + '</span></div>' +
                        '<div class="brand-items">' +
                        '<ul>';
                    $.each(brandsObject[alphabet[i]], function() {
                        let $self = $(this)[0];
                        let name = $self.name;
                        let url = $self.url;
                        let alt = $self.alt;
                        let orig = $self.orig;
                        let $item = '<li>' +
                            '<div class="item-wrap">' +
                            '<a class="item" href="' + url + '">' +
                            '<img src="' + alt + '" data-alt-src="' + alt + '" data-orig-src="' + orig + '" alt="' + name + '"/>' +
                            '</a>' +
                            '</div>' +
                            '</li>';
                        if(orig == 'no_load_img'){
                            $item = '<li>' +
                            '<div class="item-wrap">' +
                            '<a class="item" href="' + url + '">' +
                            '<span>' + name + '</span>' +
                            '</a>' +
                            '</div>' +
                            '</li>';
                        }    
                        $brandKey += $item;
                    });
                    $brandKey += '</ul>' +
                        '</div>' +
                        '</div>';
                    $(".brands-list").append($brandKey);
                }
            }
        }
    }
    const initial = function() {
        brandLayout();
    }
    window.addEventListener('DOMContentLoaded', function() {
        if ($(".ba-brands").length > 0) {
            initial();
        }
    });
})();