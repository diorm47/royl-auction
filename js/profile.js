const auc_category_slider = new Swiper(".mobile_winned_aucksions", {
  direction: "horizontal",
  slidesPerView: "2.5",
  speed: 500,
  spaceBetween: 15,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".mobile_winned_aucksions_pagination",
    type: "bullets",
    clickable: true,
  },
});

const row2__col2__checklist_carousel = new Swiper(
  ".row2__col2__checklist_carousel",
  {
    direction: "horizontal",
    slidesPerView: 2,
    speed: 500,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".checklist_carousel_pagination",
      type: "bullets",
      clickable: true,
    },
  }
);

const row2__col2__checklist_carousel2 = new Swiper(
  ".row2__col2__checklist_carousel2",
  {
    direction: "horizontal",
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 15,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".checklist_carousel_pagination2",
      type: "bullets",
      clickable: true,
    },
  }
);
