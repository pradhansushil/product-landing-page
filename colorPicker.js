export default function initColorPicker(container, attributeName, onSelect) {
  container.swatches.forEach((swatch) => {
    if (swatch.classList.contains("selected")) {
      const value = swatch.getAttribute(attributeName);
      onSelect(value);
    }

    swatch.addEventListener("click", () => {
      container.swatches.forEach((s) => s.classList.remove("selected"));
      swatch.classList.add("selected");
      const value = swatch.getAttribute(attributeName);
      onSelect(value);
    });
  });
}
