const scrollable = document.querySelector(".scrollable");
let current = 0;
let target = 0;
let ease = 0.07;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

const init = () => {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
};

const smoothScroll = () => {
  target = window.scrollY;
  current = lerp(current, target, ease);
  console.log(current);
  scrollable.style.transform = `translate3d(0, ${-current}px, 0)`;
  requestAnimationFrame(smoothScroll);
};

init();
smoothScroll();
