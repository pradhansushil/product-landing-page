import initColorPicker from "./colorPicker.js";
import getDOMElements from "./dom-elements.js";

function currentDot(dom, index) {
  dom.dots.forEach((dot) => dot.classList.remove("active"));
  dom.dots[index].classList.add("active");
}

function goToSlide(dom, index) {
  dom.slides.forEach((slide) => slide.classList.remove("active"));
  dom.slides[index].classList.add("active");
  currentDot(dom, index);
}

function initHero() {
  const heroSection = document.querySelector(".hero");
  const dom = getDOMElements(heroSection);

  let currentSlide = 0;
  goToSlide(dom, 0);

  initColorPicker(dom, "data-image", (value) => {
    dom.mainImg.src = value;
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

initHero();
