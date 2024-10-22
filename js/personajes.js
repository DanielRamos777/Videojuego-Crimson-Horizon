// js\personajes.jsdocument.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        fetch('../json/personajes.json') // Asegúrate de que la ruta sea correcta
            .then(response => response.json())
            .then(data => {
                const contenedor = document.querySelector('.contenedorDeCarta');
                data.personajes.forEach(personaje => {
                    const cardContainer = document.createElement('div');
                    cardContainer.classList.add('card-container');
    
                    const card = document.createElement('div');
                    card.classList.add('card');
    
                    const cardFront = document.createElement('div');
                    cardFront.classList.add('card-front');
    
                    // Crear el título en la parte inferior
                    const title = document.createElement('h2');
                    title.textContent = personaje.nombre;
                    title.classList.add('card-title'); // Agregar clase para el estilo
                    cardFront.appendChild(title);
    
                    const img = document.createElement('img');
                    img.src = personaje.imagen;
                    img.alt = `Personaje ${personaje.nombre}`;
                    cardFront.appendChild(img);
    
                    const cardBack = document.createElement('div');
                    cardBack.classList.add('card-back');
    
                    const h2 = document.createElement('h2');
                    h2.textContent = personaje.nombre;
                    cardBack.appendChild(h2);
    
                    const tamañoP = document.createElement('p');
                    tamañoP.innerHTML = `<strong>Tamaño:</strong> ${personaje.tamaño}`;
                    cardBack.appendChild(tamañoP);
    
                    const edadP = document.createElement('p');
                    edadP.innerHTML = `<strong>Edad:</strong> ${personaje.edad}`;
                    cardBack.appendChild(edadP);
    
                    const profesionP = document.createElement('p');
                    profesionP.innerHTML = `<strong>Profesión:</strong> ${personaje.profesion}`;
                    cardBack.appendChild(profesionP);
    
                    const habilidadesP = document.createElement('p');
                    habilidadesP.innerHTML = `<strong>Habilidades:</strong> ${personaje.habilidades}`;
                    cardBack.appendChild(habilidadesP);
    
                    const historiaP = document.createElement('p');
                    historiaP.innerHTML = `<strong>Historia:</strong> ${personaje.historia}`;
                    cardBack.appendChild(historiaP);
    
                    const descripcionP = document.createElement('p');
                    descripcionP.innerHTML = `<strong>Descripción:</strong> ${personaje.descripcion}`;
                    cardBack.appendChild(descripcionP);
    
                    card.appendChild(cardFront);
                    card.appendChild(cardBack);
                    cardContainer.appendChild(card);
                    contenedor.appendChild(cardContainer);
    
                    // Añade el evento click para voltear la carta
                    card.addEventListener("click", function () {
                        card.classList.toggle("is-flipped");
                    });
                });
            })
            .catch(error => console.error('Error cargando el JSON:', error));
    });
    