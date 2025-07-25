window.addEventListener('load', () => {
  // Control de mantenimiento
  const enMantenimiento = true; // Cambia a false para saltar mantenimiento

  if (enMantenimiento) {
    // Si está en mantenimiento, redirige a mantenimiento.html
    if (!window.location.href.includes('cuenta-atras.html')) {
      window.location.href = 'cuenta-atras.html';
      return; // Para no ejecutar más código aquí
    }
  } else {
    // Si NO está en mantenimiento y estamos en mantenimiento.html, redirige a index.html
    if (window.location.href.includes('mantenimiento.html')) {
      window.location.href = 'index.html';
      return;
    }
  }

  // Tu código original empieza aquí
  const loader = document.getElementById('loader');
  const logo = document.getElementById('logo');

  setTimeout(() => {
    // Quitar animación shake para el logo antes de agrandar
    logo.style.animation = 'none';

    // Añadir clase para el efecto de tragarse la pantalla
    loader.classList.add('swallow');

    // Agrandar el logo muchísimo y hacerlo transparente
    logo.style.transform = 'scale(50)';
    logo.style.opacity = '0';

    // Después de la animación quitar loader y mostrar main
    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('main').style.display = 'block';
      document.body.style.overflow = 'auto';
    }, 1200);
  }, 4000);
});

// Cerrar aviso bienvenida
document.getElementById('closeWelcome').addEventListener('click', () => {
  const welcome = document.getElementById('welcome');
  welcome.style.opacity = 0;
  setTimeout(() => (welcome.style.display = 'none'), 500);
});

// Cargar imágenes 1.png a 17.png
const gallery = document.getElementById('gallery');
for (let i = 1; i <= 17; i++) {
  const img = document.createElement('img');
  img.src = `${i}.png`;
  img.alt = `Imagen ${i}`;
  img.loading = 'lazy';
  gallery.appendChild(img);
}
