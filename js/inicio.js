document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const speed = 200;
          const increment = target / speed;

          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 20);
          } else {
              counter.innerText = target;
          }
      };
      updateCount();
  });
});


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Función para mover el slide
function moveSlide(n) {
  currentIndex = (currentIndex + n + totalItems) % totalItems;
  document.querySelector('.carousel-inner').style.transform = `translateX(${-currentIndex * 100}%)`;
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
