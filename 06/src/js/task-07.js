const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

textSpan.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value;

  textSpan.style.fontSize = `${fontSize}px`;
});
