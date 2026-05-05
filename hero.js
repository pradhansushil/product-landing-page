import getDOMElements from "./dom-elements.js";

function goToSlide(dom, index) {
  dom.slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dom.slides[index].classList.add("active");
}

function initHero() {
  const heroSection = document.querySelector(".hero");

  const dom = getDOMElements(heroSection);

  let currentSlide = 0;
  goToSlide(dom, 0);

  dom.swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const newSrc = swatch.getAttribute("data-image");
      dom.mainImg.src = newSrc;
    });
  });

  dom.arrows[0].addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + dom.slides.length) % dom.slides.length;
    goToSlide(dom, currentSlide);
  });

  dom.arrows[1].addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % dom.slides.length;
    goToSlide(dom, currentSlide);
  });
}
