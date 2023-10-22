// Add interactivity to the dropupBtn
const dropup = document.querySelector("#nav .dropup");
const dropupBtn = document.querySelector("#nav .dropup__btn");
const classNameDropupOpen = "dropup--open";
dropupBtn.addEventListener("click", () => {
  dropup.classList.toggle(classNameDropupOpen);
});
// Open if hovering container or child elements
dropup.addEventListener("pointerover", (e) => {
  if (e.pointerType !== "mouse") return;
  dropup.classList.add(classNameDropupOpen);
});
// Close if hovering outside of container
dropup.addEventListener("pointerout", (e) => {
  if (e.pointerType !== "mouse") return;
  dropup.classList.remove(classNameDropupOpen);
});

const heroBtn = document.querySelector("#header .hero__btn");
const heroTxt = document.querySelector("#header .hero__txt");
const classNameIsVisible = "hero__txt--hidden";
heroBtn.addEventListener("click", () => {
  heroTxt.classList.toggle(classNameIsVisible);
});
heroBtn.addEventListener("pointerover", (e) => {
  if (e.pointerType !== "mouse") return;
  heroTxt.classList.add(classNameIsVisible);
});
heroBtn.addEventListener("pointerout", (e) => {
  if (e.pointerType !== "mouse") return;
  heroTxt.classList.remove(classNameIsVisible);
});
