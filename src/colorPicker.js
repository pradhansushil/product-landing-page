import setSelected from "./setSelected";

export default function initColorPicker(container, attributeName, onSelect) {
  container.swatches.forEach((swatch) => {
    if (swatch.classList.contains("selected")) {
      const value = swatch.getAttribute(attributeName);
      onSelect(value);
    }

    swatch.addEventListener("click", () => {
      setSelected(container.swatches, swatch);
      const value = swatch.getAttribute(attributeName);
      onSelect(value);
    });
  });
}
