export default function setSelected(target, selected) {
  target.forEach((t) => {
    t.classList.remove("selected");
  });
  selected.classList.add("selected");
}
