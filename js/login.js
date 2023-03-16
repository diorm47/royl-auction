///// not a validation script

document.addEventListener("DOMContentLoaded", function () {
    //language change
    let user_lang = navigator.language || navigator.userLanguage;
    document.getElementById('login--language').style = `background: url('./img/icons/languages/${user_lang}.svg') center / contain no-repeat;`

    //password show btn
    showpass_btns = document.querySelectorAll('.login__password-show-btn');
    showpass_btns.forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            if (e.target.classList.contains('is-active')) {
                e.target.classList.remove('is-active');
                e.target.previousElementSibling.setAttribute("type", "password");
            }
            else {
                e.target.classList.add('is-active');
                e.target.previousElementSibling.setAttribute("type", "text");
            }
        })
    });

    //slider
    const login_slider = new Swiper('.login__slider', {
        direction: 'horizontal',
        speed: 500,
        slidesPerView: '1',
        loop: true,
        navigation: {
            nextEl: '.login__slider-arrow.swiper-button-next',
            prevEl: '.login__slider-arrow.swiper-button-prev',
        },
        pagination: {
            el: '.login__slider-pagination',
            type: 'bullets',
            clickable: true,
        }
    });

 
    //change forms
    const tab_btns = document.querySelectorAll('.login__form-tab-btn');
    if (tab_btns.length > 0) {
        tab_btns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                e.target.parentElement.parentElement.parentElement.classList.remove('is-active');
                document.getElementById(e.target.getAttribute("for")).classList.add('is-active');
            })
        });
    }
});