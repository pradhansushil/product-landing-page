import initColorPicker from "./colorPicker.js";
import getDOMElements from "./dom-elements.js";

function initPreOrder() {
  const preOrderSection = document.querySelector(".pre-order");
  const dom = getDOMElements(preOrderSection);

  let selectedColor;

  initColorPicker(dom, "data-color", (value) => {
    selectedColor = value;
  });
}

initPreOrder();
