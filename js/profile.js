const auc_category_slider = new Swiper('.mobile_winned_aucksions', {
    direction: 'horizontal',
    slidesPerView: '2.5',
    speed: 500,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.mobile_winned_aucksions_pagination',
        type: 'bullets',
        clickable: true,
    },
});