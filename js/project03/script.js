const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");
const inputs = document.querySelectorAll("input");
let index = 0;
inputs[0].focus();
inputs.forEach(input => {
  input.addEventListener("keyup", (e) => {
    if (input.value.length === 1) {
      index++;
    }
    else if (e.code === "Backspace") {
      index--
    }
    inputs[index].focus();
  })
})

let blurItem = 30;
let num = 0;
let opacity = 1;

let interval = setInterval(() => {
  if (blurItem > 0) {
    blurItem -= 1;
    bg.style.filter = `blur(${blurItem}px)`;
  }


  if (num < 100) {
    loadingText.innerHTML = `${num}%`;
    num += 3;
  }

  loadingText.style.opacity = `${opacity}`
  opacity = 1 - (num / 100)


  if (num === 100) {
    clearInterval(interval)
  }
}, 50)
