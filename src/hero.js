import getDomElements from "./dom-elements.js";

const swiper = new Swiper(".hero-swiper", {
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

const dom = getDomElements(document.querySelector(".hero-swiper"));
dom.swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document.querySelector(".swatch.selected").classList.remove("selected");
    swatch.classList.add("selected");
    dom.mainImg.src = swatch.dataset.image;
  });
});
