const blocks = [one, three, five];

blocks.forEach(block => {
  block.addEventListener("click", toggleColor);
});

let activeBlock = null;

function toggleColor(event) {
  const target = event.target;

  if (activeBlock) {
    activeBlock.style.backgroundColor = "rgb(255 255 255)";
  }

  target.style.backgroundColor = "#F1A501";
  activeBlock = target;
}