const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

//------------------------
// Esperar 5 segundos antes de mostrar el contenido
window.addEventListener("load", function() {
    setTimeout(function() {
        // Ocultar el preloader
        document.getElementById("preloader").style.display = "none";

        // Mostrar el contenido y aplicar la transición de opacidad
        const contenido = document.getElementById("contenido");
        contenido.style.display = "block";
        contenido.style.opacity = "1";
    }, 1500); 
});

//.----------------------animacion del body
