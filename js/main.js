new Vue({
    el: "#app",
    data: {
        anaYemek: [
            {
                name: "Izgara Antrikot",
                price: "40 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Fırınlanmış patates, haşlanmış sebze'
                
            },
            {
                name: "Viyana Schnitzel",
                price: "29,5 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Bonfile dana eti, patates salatası, mantar sos, maskolin'
            },
            {
                name: "Kasap Köfte",
                price: "23 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Pilav, ev tiği patates, közlenmiş domates, közlenmiş biber, özel sos'
            },
            {
                name: "Beğendilli Kaşarlı Köfte",
                price: "24 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Beğendi, Közlenmiş domates, közlenmiş biber'
            },
            {
                name: "Güveçte Cheddarlı Köfte",
                price: "25 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Renkli biber, kiraz domates, arpacık soğan'
            },
            {
                name: "Çeltik",
                price: "27,5 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Bonfile dilimleri, ev yapımı kibrit patates, yoğurt, domates sosu'
            },
            {
                name: "Izgara Somon",
                price: "29 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Ispanak ve biberler sotelenmiş baby patates, tatlı kırmızı soğan, limon, roka, kiraz domates, salatalık'
            },
            {
                name: "Risotto",
                price: "25 / 29 / 28 TL",
                image: "img/portfolio/08-large.jpg",
                message: "Sebzeli, Mevsim sebzeleri, Deniz Mahsüllü: Karides, somon, kalamar, levrek. 3 Mantarlı tavuk: Parcini, istirdiye, kestane, tavuk, pasto sos"
            },
            {
                name: "Izgara Antrikot",
                price: "19 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Pilav, elma dilim patates, közlenmiş biber, közlenmiş domates, özel sos'
                
            },
            {
                name: "Schnitzel",
                price: "21,5 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Bonfile tavuk, patates salatası, maskolin'
                
            },
            {
                name: "Mantarlı Schnitzel",
                price: "23,5 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Bonfile tavuk, mantar sos, fırın patates, soğan halkası, maskolin'
                
            },
            {
                name: "Tatlı Ekşi Soslu Tavuk",
                price: "22 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Ev tipi patates, maskolin'
                
            },
            {
                name: "Meksika Soslu Tavuk",
                price: "23 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Patates salatası, maskolin'
                
            },
            {
                name: "Quesadilla (Etli/tavuklu)",
                price: "22/19,5 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Kibrit patates, maskolin, avokada sos, ranch sos, salsa sos'
                
            },
            {
                name: "Teriyaki Soslu Somon",
                price: "32 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Patates Salatası, haşlanmış sebze'
                
            },
        ],
        AksamY: [
            {
                name: "Fışkı",
                price: "20 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Hello Vue!'
            },
            {
                name: "Fışkı",
                price: "20 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Hello Vue!'
            },
            {
                name: "Fışkı",
                price: "20 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Hello Vue!'
            },
        ],
        icecekler: [
            {
                name: "Fışkı",
                price: "20 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Hello Vue!'
            },
            {
                name: "Fışkı",
                price: "20 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Hello Vue!'
            },
            {
                name: "Fışkı",
                price: "20 TL",
                image: "img/portfolio/08-large.jpg",
                message: 'Hello Vue!'
            },
        ]
    }
})


function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });


        // Show Menu on Book
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        // Hide nav on click
        $(".navbar-nav li a").click(function (event) {
            // check if window is small enough so dropdown is created
            var toggle = $(".navbar-toggle").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        // Portfolio isotope filter
        $(window).load(function () {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function () {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });

        // Nivo Lightbox 
        $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });

    }());


}
main();