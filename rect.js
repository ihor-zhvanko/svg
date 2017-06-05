function initRects() {
  let input = document.querySelector('input.opacity');
  input.addEventListener('input', inputOpacity);
}

function inputOpacity() {
  let input = document.querySelector('input.opacity');
  let rect = document.querySelector('rect');
  let valueSpan = document.querySelector('#opacity-value');
  valueSpan.innerHTML = 1 - this.value / 100;
  rect.setAttribute('opacity', 1 - this.value / 100);
}

document.addEventListener('DOMContentLoaded', initRects);