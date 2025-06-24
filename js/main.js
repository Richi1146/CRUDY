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
  
  // Ejemplo: podrías continuar con otro switchTo("level3") si creas esa sección
}


