const playSound = (e) => {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  button.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener("keydown", playSound);

const removeTransition = (e) => {
  console.log(e);
  if (e.propertyName !== "color") return;
  e.target.classList.remove("transform");
};

const playCLickSound = (e) => {
  const audio = document.querySelector(
    `audio[data-key="${e.target.getAttribute("data-key")}"]`
  );

  if (!audio) return;
  e.target.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
};

const keys = document.querySelectorAll(".buttons");
keys.forEach((el) => el.addEventListener("click", playCLickSound));
keys.forEach((el) => el.addEventListener("transitionend", removeTransition));
