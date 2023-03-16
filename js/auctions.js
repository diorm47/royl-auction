//sliders
const auc_category_slider = new Swiper('.auction__categories-wrapper', {
    direction: 'horizontal',
    slidesPerView: '1',
    speed: 500,
    spaceBetween: 15,
    autoHeight: false,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.auction__categories-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: '3',
        },
        768: {
            slidesPerView: '2',
        }
    }
});

const prof_category_slider = new Swiper('.row3__col2.row3__col.row__col', {
    direction: 'horizontal',
    slidesPerView: '1',
    speed: 500,
    spaceBetween: 15,
    autoHeight: false,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.auction__categories-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1280: {
            slidesPerView: '3',
        },
        768: {
            slidesPerView: '2',
        }
    }
});




//filterbar
const showbtn = document.querySelector('.auction__filterbar-heading-showbtn');
showbtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.classList.toggle('is-active');
    e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('is-active');
});
const spoilers = document.querySelectorAll('.auction__filterbar__attribute-heading');
spoilers.forEach(element => {
    element.addEventListener("click", function (e) {
        e.target.classList.toggle('is-active');
        e.target.parentElement.querySelector(".auction__filterbar__attribute-list").classList.toggle('is-active');
    });
});
