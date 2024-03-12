const boton = document.querySelector("#botonMenu");
const botonClose = document.querySelector("#botonCloseMenu");
const nav = document.querySelector(".nav");
boton.addEventListener("click", () => {
  nav.classList.add("on");
  nav.classList.remove("off");
});
botonClose.addEventListener("click", () => {
  nav.classList.remove("on");
  nav.classList.add("off");
});
