import initColorPicker from "./colorPicker.js";
import getDOMElements from "./dom-elements.js";
import setSelected from "./setSelected.js";

const shoeSizeGroups = ["8–9.5", "10–11.5", "12–13.5", "14–15.5"];
const container = document.querySelector(".size-selector");

let selectedSize;

function initSizeSelector() {
  shoeSizeGroups.forEach((group) => {
    const btn = document.createElement("button");
    btn.textContent = group;
    btn.type = "button";

    btn.addEventListener("click", () => {
      setSelected(container.querySelectorAll("button"), btn);
      selectedSize = group;
    });

    container.appendChild(btn);
  });
}

function initPreOrder() {
  const preOrderSection = document.querySelector(".pre-order");
  const dom = getDOMElements(preOrderSection);

  dom.preOrderBtn.addEventListener("click", () => {
    dom.preOrderForm.classList.toggle("visible");
  });

  let selectedColor;

  initColorPicker(dom, "data-color", (value) => {
    selectedColor = value;
  });
  initSizeSelector();

  dom.formSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const storedValues = {
      name: dom.name.value,
      email: dom.email.value,
      shoeColor: selectedColor,
      shoeSize: selectedSize,
      price: 149.99,
    };

    localStorage.setItem("pre-order", JSON.stringify(storedValues));

    dom.preOrderForm.classList.remove("visible");

    const messageText =
      "You're all set! We'll send a payment link to your email shortly — keep an eye on your inbox.";

    const confirmWrapper = document.createElement("div");
    confirmWrapper.classList.add("confirm-wrapper");
    const confirmationDiv = document.createElement("div");
    confirmationDiv.classList.add("confirm-div");
    const checkMarkIcon = document.createElement("i");
    checkMarkIcon.classList.add("fa-solid", "fa-check");
    confirmationDiv.appendChild(checkMarkIcon);

    const confirmHeading = document.createElement("h3");
    confirmHeading.textContent = "Order Received";
    confirmationDiv.appendChild(confirmHeading);

    const message = document.createElement("p");
    message.textContent = messageText;
    confirmationDiv.appendChild(message);

    confirmWrapper.appendChild(confirmationDiv);
    preOrderSection.appendChild(confirmWrapper);
  });
}

initPreOrder();
