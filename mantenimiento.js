// mantenimiento.js

// Variable que controla si seguir en mantenimiento o ir a index.html
const enMantenimiento = true;  // Cambia a false para redirigir a index.html

window.addEventListener('load', () => {
  if (!enMantenimiento) {
    // Si NO está en mantenimiento, redirige a la página principal
    window.location.href = 'index.html';
  }
  // Si está en mantenimiento (true), no hace nada y se queda en mantenimiento.html
});
