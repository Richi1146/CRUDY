// Estado del juego
let gameState = {
  path: null,
  door: null
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

const boton = document.getElementById("botonSonido");
const audio = document.getElementById("audioBoton");
boton.addEventListener("click", () => {
      audio.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
      audio.play();
    });

const btnT = document.getElementById("botonTrampa");
const audT = document.getElementById("audioBotonTrampa");
btnT.addEventListener("click", () => {
      audT.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
      audT.play();
    });

const btnC = document.getElementById("botonCorrecto");
const audC = document.getElementById("audioBotonCorrecto");
btnC.addEventListener("click", () => {
      audC.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
      audC.play();
    });

const btnN = document.getElementById("botonCorrectoNexo");
btnN.addEventListener("click", () => {
      audC.currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
      audC.play();
    });






