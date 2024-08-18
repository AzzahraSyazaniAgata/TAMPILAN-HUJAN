let nbDrop = 858;

function randRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function createRain() {
  for (let i = 1; i < nbDrop; i++) {
    let dropleft = randRange(0, 1600);
    let dropTop = randRange(-1000, 140);

    document.querySelector(".rain").insertAdjacentHTML("beforeend", `<div class="drop" id="drop${i}"></div>`);

    document.getElementById(`drop${i}`).style.left = `${dropleft}px`;
    document.getElementById(`drop${i}`).style.top = `${dropTop}px`;
  }
}

createRain();
