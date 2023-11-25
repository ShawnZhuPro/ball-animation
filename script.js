const ball = document.getElementById("ball");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reverse = document.getElementById("reverse");
const speedUp = document.getElementById("speed-up");
const slowDown = document.getElementById("slow-down");

const rollAnimation = [
  {
    transform: "rotate(0) translate3D(-50%, -50%, 0)",
    color: "white",
  },
  {
    color: "blue",
    offset: 0.3,
  },
  {
    transform: "rotate(360deg) translate3D(-50%, -50%, 0)",
    color: "white",
  },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};

// Animation of ball purely with JS
const roll = ball.animate(rollAnimation, rollOptions);

pause.addEventListener("click", () => roll.pause());
play.addEventListener("click", () => {
  roll.playbackRate = 1; // Goes opposite direction of reverse if clicked
  roll.play();
});
reverse.addEventListener("click", () => roll.reverse());
speedUp.addEventListener("click", () => (roll.playbackRate *= 2));
slowDown.addEventListener("click", () => (roll.playbackRate *= 0.5));
