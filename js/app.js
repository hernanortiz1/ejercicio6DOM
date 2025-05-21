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
    minutos < 0 ||
    minutos > 59 ||
    segundos < 0 ||
    segundos > 59
  ) {
    alert("Ingresá valores válidos para horas, minutos y segundos.");
    return;
  }

  totalSegundos = horas * 3600 + minutos * 60 + segundos;
  enPausa = false;
  actualizarDisplay();
  iniciarTemporizador();
};

btnAceptar.addEventListener("click", entrada);

btnPlay.addEventListener("click", () => {
  if (totalSegundos > 0 && enPausa) {
    enPausa = false;
    iniciarTemporizador();
  }
});


btnPlay.addEventListener("click", () => {
  if (totalSegundos > 0 && enPausa) {
    enPausa = false;
    iniciarTemporizador();
  }
});

btnPause.addEventListener("click", () => {
  enPausa = true;
  clearInterval(intervalo);
});

btnReset.addEventListener("click", () => {
  enPausa = true;
  clearInterval(intervalo);
  totalSegundos = 0;
  display.textContent = "00 : 00 : 00";
});

function iniciarTemporizador() {
  clearInterval(intervalo); // Limpia si ya estaba corriendo
  intervalo = setInterval(() => {
    if (!enPausa && totalSegundos > 0) {
      totalSegundos--;
      actualizarDisplay();
    } else if (totalSegundos <= 0) {
      clearInterval(intervalo);
    }
  }, 1000);
}

function actualizarDisplay() {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  display.textContent = `${formato(horas)} : ${formato(minutos)} : ${formato(segundos)}`;
}

function formato(valor) {
  return valor.toString().padStart(2, "0");
}