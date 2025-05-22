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




// catalog.js
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера цены
    const rangeSlider = document.querySelector('.range-slider');
    const minPriceInput = document.querySelector('.min-input');
    const maxPriceInput = document.querySelector('.max-input');
    const minPriceSlider = document.querySelector('.min-price');
    const maxPriceSlider = document.querySelector('.max-price');
    const filterTitle = document.getElementsByClassName('filter-title');

    // var elements = document.getElementsByClassName("classname");
    for (let i = 0; i < filterTitle.length; i++) {
        filterTitle[i].addEventListener('click', function() {
            this.classList.toggle('filter-title_close');
            let el=this.nextElementSibling;
            this.nextElementSibling.classList.toggle('filter-content_close');
            // console.log(el);
            // el.toggleClass('filter-content_close');

        }, false);
    }

    // filter-title filter-title_close
    // filterTitle.addEventListener('click', function() {
    //     // this.re
    //     console.log('good');
    //     this.classList.toggle('filter-title_close');
    //
    // });
    // Установка начальных значений
    let minPrice = parseInt(minPriceSlider.value);
    let maxPrice = parseInt(maxPriceSlider.value);

    // Обновление полей ввода при изменении ползунков
    minPriceSlider.addEventListener('input', function() {
        minPrice = parseInt(this.value);
        if (minPrice > maxPrice) {
            minPrice = maxPrice;
            this.value = minPrice;
        }
        minPriceInput.value = minPrice;
    });

    maxPriceSlider.addEventListener('input', function() {
        maxPrice = parseInt(this.value);
        if (maxPrice < minPrice) {
            maxPrice = minPrice;
            this.value = maxPrice;
        }
        maxPriceInput.value = maxPrice;
    });

    // Обновление ползунков при изменении полей ввода
    minPriceInput.addEventListener('change', function() {
        minPrice = parseInt(this.value);
        if (minPrice < parseInt(minPriceSlider.min)) {
            minPrice = parseInt(minPriceSlider.min);
            this.value = minPrice;
        }
        minPriceSlider.value = minPrice;
    });

    maxPriceInput.addEventListener('change', function() {
        maxPrice = parseInt(this.value);
        if (maxPrice > parseInt(maxPriceSlider.max)) {
            maxPrice = parseInt(maxPriceSlider.max);
            this.value = maxPrice;
        }
        maxPriceSlider.value = maxPrice;
    });

    // Сортировка товаров
    const sortingSelect = document.querySelector('.sorting-select');
    sortingSelect.addEventListener('change', function() {
        // Здесь будет логика сортировки
        console.log('Сортировка по:', this.value);
        // В реальном проекте здесь AJAX запрос или пересортировка элементов
    });

    // Фильтрация по категориям
    const checkboxes = document.querySelectorAll('.filter-checkbox input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Здесь будет логика фильтрации
            console.log('Фильтр изменен:', this.checked);
        });
    });

    // Кнопки популярных категорий
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Здесь будет логика фильтрации по категории
            console.log('Выбрана категория:', this.textContent);
        });
    });

    // Пагинация
    const paginationLinks = document.querySelectorAll('.pagination-link');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Здесь будет логика пагинации
            console.log('Переход на страницу:', this.textContent);
        });
    });

    // Кнопка "Показать еще"
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.addEventListener('click', function() {
        // Здесь будет логика подгрузки товаров
        console.log('Загрузить еще товары');
    });
});