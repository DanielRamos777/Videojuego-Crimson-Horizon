document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let isTransitioning = false; // Evita la sobrecarga de clics

  // Función para mover el slide
  function moveSlide(n) {
      if (isTransitioning) return; // Evita sobrecarga de clics durante la animación
      isTransitioning = true;

      currentIndex = (currentIndex + n + totalItems) % totalItems;
      document.querySelector('.carousel-inner').style.transform = `translateX(${-currentIndex * 100}%)`;

      // Permitir otra transición después de la animación
      setTimeout(() => {
          isTransitioning = false;
      }, 500); // Duración de la animación en ms
  }

  // Función para el auto-slide cada 3 segundos
  function autoSlide() {
      moveSlide(1); // Mueve al siguiente slide
  }

  // Iniciar el intervalo de 3 segundos
  let slideInterval = setInterval(autoSlide, 3000); // Cambia cada 3000ms = 3 segundos

  // Pausar el auto-slide cuando se presiona un botón y reanudarlo después
  document.querySelector('.prev').addEventListener('click', () => {
      clearInterval(slideInterval); // Pausa el auto-slide
      moveSlide(-1); // Mover al slide anterior
      slideInterval = setInterval(autoSlide, 3000); // Reiniciar el auto-slide
  });

  document.querySelector('.next').addEventListener('click', () => {
      clearInterval(slideInterval); // Pausa el auto-slide
      moveSlide(1); // Mover al siguiente slide
      slideInterval = setInterval(autoSlide, 3000); // Reiniciar el auto-slide
  });
});
