export default function getDOMElements(el) {
  return {
    slides: el.querySelectorAll(".slide"),
    arrows: el.querySelectorAll(".slide-arrow"),
    dotsContainer: el.querySelector(".slide-dots"),
    dots: el.querySelectorAll(".dot"),
    mainImg: el.querySelector("#main-shoe-img"),
    swatches: el.querySelectorAll(".swatch"),
  };
}
