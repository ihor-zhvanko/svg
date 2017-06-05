let selectedCircle;

function initCircles() {
  let movable = document.querySelectorAll('circle.movable');
  for (let i = 0; i < movable.length; ++i) {
    movable[i].addEventListener('mousedown', selectCircle);
    movable[i].addEventListener('mouseup', deselectCircle);
    movable[i].addEventListener('mousemove', moveCircle);
  }
}

function clickTest() {
  console.log(document.querySelector('input.opacity').value);
}

function selectCircle(event) {
  selectedCircle = event.target;
}

function deselectCircle(event) {
  selectedCircle = undefined;
}

function moveCircle(event) {
  if (selectedCircle) {
    let parent = event.target.parentElement.parentElement;
    event.target.setAttribute('cx', event.x - parent.offsetLeft);
    event.target.setAttribute('cy', event.y - parent.offsetTop);
  }
}

document.addEventListener('DOMContentLoaded', initCircles);