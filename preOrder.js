import initColorPicker from "./colorPicker.js";
import getDOMElements from "./dom-elements.js";

const shoeSizeGroups = ["8–10", "10.5–12", "12.5–14", "14.5–15.5"];
const container = document.querySelector(".size-selector");

let selectedSize;

function initSizeSelector() {
  shoeSizeGroups.forEach((group) => {
    const span = document.createElement("span");
    span.textContent = group;

    span.addEventListener("click", () => {
      container
        .querySelectorAll("span")
        .forEach((s) => s.classList.remove("selected"));
      span.classList.add("selected");
      selectedSize = group;
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
