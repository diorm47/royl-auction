//user country select
const country_select = document.querySelector('.user-country-select');
const country_value = document.querySelectorAll('.user-country-value');
country_select.style = `background: url("../../img/icons/flags/${country_select.value}.png") left center / 30px 20px no-repeat;`
country_value.forEach(element => {
    element.textContent = document.querySelector(`.user-country-option[value="${country_select.value}"]`).textContent;
});
country_select.addEventListener("change", function () {
    country_select.style = `background: url("../../img/icons/flags/${country_select.value}.png") left center / 30px 20px no-repeat;`
    country_value.forEach(element => {
        element.textContent = document.querySelector(`.user-country-option[value="${country_select.value}"]`).textContent;
    });
});

// modal window
modal_btns = document.querySelectorAll('button[for]');
if (modal_btns) {
    modal_btns.forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            const modal_wrapper = document.querySelector(`#${e.target.getAttribute("for")}`).parentElement;
            modal_wrapper.classList.add("is-active");
            document.querySelector('.body').style.overflow = 'hidden';

            cardexp_input = modal_wrapper.querySelector('#settings-cardchange--cardexp');
            if (cardexp_input) {
                cardexp_input.addEventListener("input", function (e) {
                    if (e.target.value.length == 2)
                        e.target.value = e.target.value + " / ";
                });
            }
            modal_wrapper.addEventListener("click", function (e) {
                if (e.target === this) {
                    modal_wrapper.classList.remove("is-active");
                    document.querySelector('.body').style.overflow = 'visible';
                }
            })
        });
    });
}