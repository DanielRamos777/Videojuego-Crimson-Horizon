document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las tarjetas
    const cards = document.querySelectorAll(".card");

    // Añade un evento click a cada tarjeta
    cards.forEach(card => {
        card.addEventListener("click", function () {
            // Alterna la clase que aplica la rotación
            card.classList.toggle("is-flipped");
        });
    });
});
