const audios = document.querySelectorAll("audio");
const btns = document.querySelector("#buttons")

audios.forEach(audio => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = audio.id;
  btns.append(btn);
  btn.addEventListener("click",()=> {
    audios.forEach(item=> item.pause())
    audio.play();
  });
})