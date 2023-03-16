const auc_category_slider = new Swiper('.mobile_row5__cols12_wrapper', {
    direction: 'horizontal',
    slidesPerView: '1',
    speed: 500,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.mobile_row5__cols12_pagination',
        type: 'bullets',
        clickable: true,
    },
});