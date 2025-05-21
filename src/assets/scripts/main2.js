// import fortawesome from '@fortawesome/fontawesome-free';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';

import $ from 'jquery';
import jQuery from 'jquery';

// $('.swiper').css('display','none')

const swiper = new Swiper('.swipergood', {
    // modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
    },
    longSwipesRatio: 0.5,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    breakpoints: {

        // 320: {
        //     slidesPerView: 1,
        //     spaceBetween: 0
        // },
        768: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 0
        }
    },
    // Navigation arrows
    //     nextButton: '.swiper2-button-next',
    //     prevButton: '.swiper2-button-prev',

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const swiperportfolio = new Swiper('.swiperportfolio', {
    // modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
    },
    longSwipesRatio: 0.5,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    breakpoints: {

        // 320: {
        //     slidesPerView: 1,
        //     spaceBetween: 0
        // },
        // 768: {
        //     slidesPerView: 2,
        //     spaceBetween: 0
        // },
        // 1280: {
        //     slidesPerView: 5,
        //     spaceBetween: 0
        // }
    },
    // Navigation arrows
    //     nextButton: '.swiper2-button-next',
    //     prevButton: '.swiper2-button-prev',

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});




(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });



    $.fn.moreNav = function() {
        var nav = $(this);

        function setMoreNav() {

            var nav_width = nav.outerWidth(),
                nav_elem_width = 0,
                more_link = $('<li class="more"><a href="#">Еще</a><ul></ul></li>'),
                class_nav_item = 'nav-item',
                class_nav_item_more = 'nav-item-more';

            if( nav.find('.more').length > 0 ) {
                nav.append(nav.find('.more ul li'));
                nav.find('.more').remove();
            }

            $.each(nav.find('li'), function(i, elem){
                var elem_width = $(elem).outerWidth();

                nav_elem_width += elem_width;
            });

            if( nav_elem_width > nav_width ) {
                nav.append(more_link);
                nav_width -= more_link.outerWidth();

                nav_elem_width = 0;

                $.each(nav.find('li'), function(i, elem){
                    var elem_width = $(elem).outerWidth();

                    nav_elem_width += elem_width;

                    if( !$(elem).is('.more') ) {
                        if( nav_elem_width < nav_width ) {
                            $(elem).addClass(class_nav_item).removeClass(class_nav_item_more);
                        } else {
                            $(elem).addClass(class_nav_item_more).removeClass(class_nav_item);
                        }
                    }
                });
            }

            more_link.find('ul').append($('.' + class_nav_item_more));

        }
        setMoreNav();
        $(window).resize(function(){
            setMoreNav();
        });
    };

    $('#more-nav').moreNav();

})(jQuery);
