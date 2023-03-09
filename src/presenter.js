import post from "./post";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#contenido");
const form = document.querySelector("#twitter-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tittle = post(titulo.value);
  const content = contenido.value;

  div.innerHTML += "<p>" +"titulo:" +tittle +"</br>"+ "detalle:"+content + "</p>";
});
