// ⚙️ Activar o desactivar modo actualización
const actualizacion = false;

window.addEventListener('load', () => {
  if (actualizacion) {
    // Mostrar el video introductorio
    const videoContainer = document.getElementById('videoContainer');
    const introVideo = document.getElementById('introVideo');
    const maintenanceMessage = document.getElementById('maintenanceMessage');

    videoContainer.style.display = 'flex';

    // Esperar a que termine el video (1 min = 60000ms) y mostrar el mensaje
    setTimeout(() => {
      videoContainer.style.display = 'none';
      maintenanceMessage.style.display = 'flex';
    }, 60000);
  } else {
    // Animación normal con logo que se traga la pantalla
    const loader = document.getElementById('loader');
    const logo = document.getElementById('logo');

    setTimeout(() => {
      logo.style.animation = 'none';
      loader.classList.add('swallow');
      logo.style.transform = 'scale(50)';
      logo.style.opacity = '0';

      setTimeout(() => {
        loader.style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.body.style.overflow = 'auto';
      }, 1200);
    }, 4000);

    // Cargar imágenes 1.png a 17.png
    const gallery = document.getElementById('gallery');
    for (let i = 1; i <= 17; i++) {
      const img = document.createElement('img');
      img.src = `${i}.png`;
      img.alt = `Imagen ${i}`;
      img.loading = 'lazy';
      gallery.appendChild(img);
    }

    // Cerrar aviso bienvenida
    document.getElementById('closeWelcome').addEventListener('click', () => {
      const welcome = document.getElementById('welcome');
      welcome.style.opacity = 0;
      setTimeout(() => (welcome.style.display = 'none'), 500);
    });
  }
});
