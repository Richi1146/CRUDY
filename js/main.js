// Estado del juego
let gameState = {
  path: null,
  door: null,
  originalSequence: [],
  playerSequence: [],
};

// Oculta todas las secciones y muestra solo una
function switchTo(sectionId) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

// Inicia el juego y muestra el primer nivel
function startGame() {
  switchTo("level1");
}

// Guarda el camino elegido y avanza al siguiente nivel
function choosePath(path) {
  gameState.path = path;
  switchTo("level2");
}

// Guarda la puerta elegida y finaliza el recorrido (puedes agregar más niveles o resumen aquí)
function chooseDoor(door) {
  gameState.door = door;

  // Aquí podrías mostrar un nuevo nivel, mensaje de victoria o continuar con el reto
  alert(
    `Has elegido el camino "${gameState.path}" y la puerta "${gameState.door}".\nPrepárate para lo que viene...`
  );
}

function generateSequence (){
  const colors =["🔴","🟢","🔵"];
  gameState.originalSequence = [];
  
  for (let i = 0; i < 3; i++){
    const color = colors[Math.floor(Math.random() * colors.length)];
    gameState.originalSequence.push(color);
  }
}

const RUTA_AUDIO = './assets/audios/';

function asignarAudiosABotones() {
  const botonesConAudio = document.querySelectorAll('button[data-audio]');

  botonesConAudio.forEach(boton => {
    boton.addEventListener('click', () => {
      const archivo = boton.dataset.audio;
      if (archivo) {
        const sonido = new Audio(RUTA_AUDIO + archivo);
        sonido.play();
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  asignarAudiosABotones();
    });






