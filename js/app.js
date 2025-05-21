let totalSegundos = 0;
let intervalo;
let enPausa = true;

const input = document.getElementById("entradaHora");
const btnAceptar = document.getElementById("btnAceptar");
const display = document.querySelector("p.display-1");

const btnPlay = document.querySelector(".bi-play-fill");
const btnPause = document.querySelector(".bi-pause-fill");
const btnReset = document.querySelector(".bi-arrow-clockwise");

const entrada = (e) => {
  e.preventDefault();
  const datoHora = input.value.trim();

  const partes = datoHora.split(":");
  if (partes.length !== 3) {
    alert("Por favor ingresá el tiempo en formato HH:MM:SS");
    return;
  }

  let [horas, minutos, segundos] = partes.map(Number);

  if (
    isNaN(horas) ||
    isNaN(minutos) ||
    isNaN(segundos) ||
    horas < 0 ||
    minutos < 0 || minutos > 59 ||
    segundos < 0 || segundos > 59
  ) {
    alert("Ingresá valores válidos para horas, minutos y segundos.");
    return;
  }
}
