import getDOMElements from "./dom-elements.js";

let pauseSlide;

function currentDot(dom, index) {
  dom.dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dom.dots[index].classList.add("active");
}

function goToSlide(dom, index) {
  dom.slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dom.slides[index].classList.add("active");

  currentDot(dom, index);
}

function initHero() {
  const heroSection = document.querySelector(".hero");

  const dom = getDOMElements(heroSection);

  let currentSlide = 0;
  goToSlide(dom, 0);

  function startSlide() {
    pauseSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % dom.slides.length;
      goToSlide(dom, currentSlide);
    }, 5000);
  }

  function clearTimer() {
    clearInterval(pauseSlide);
  }

  dom.swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const newSrc = swatch.getAttribute("data-image");
      dom.mainImg.src = newSrc;
    });
  });

  dom.arrows[0].addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + dom.slides.length) % dom.slides.length;
    goToSlide(dom, currentSlide);
    clearTimer();
    startSlide();
  });

  dom.arrows[1].addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % dom.slides.length;
    goToSlide(dom, currentSlide);
    clearTimer();
    startSlide();
  });

  startSlide();
}

initHero();
