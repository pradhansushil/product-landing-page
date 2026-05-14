import initColorPicker from "./colorPicker.js";
import getDOMElements from "./dom-elements.js";

const shoeSizes = [
  8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5,
];
let selectedSize;
const container = document.querySelector(".size-selector");

function initSizeSelector() {
  shoeSizes.forEach((size) => {
    const span = document.createElement("span");
    span.textContent = size;

    span.addEventListener("click", () => {
      container
        .querySelectorAll("span")
        .forEach((s) => s.classList.remove("selected"));
      span.classList.add("selected");
      selectedSize = size;
    });

    container.appendChild(span);
  });
}

function initPreOrder() {
  const preOrderSection = document.querySelector(".pre-order");
  const dom = getDOMElements(preOrderSection);
  console.log(dom);
  dom.preOrderBtn.addEventListener("click", () => {
    dom.preOrderForm.classList.toggle("visible");
  });

  let selectedColor;

  initColorPicker(dom, "data-color", (value) => {
    selectedColor = value;
  });
  initSizeSelector();

  dom.formSubmitBtn.addEventListener("click", () => {
    const storedValues = {
      name: dom.name.value,
      email: dom.email.value,
      shoeColor: selectedColor,
      shoeSize: selectedSize,
      price: 149.99,
    };

    localStorage.setItem("pre-order", JSON.stringify(storedValues));

    dom.preOrderForm.classList.remove("visible");
  });
}

initPreOrder();
