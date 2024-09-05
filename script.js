// Seleccionamos el botón de Like y el contador de likes
const likeButton = document.querySelector('.like-button');
const likesCount = document.querySelector('.likes');

// Convertimos el texto de likes a número y lo aumentamos cuando se haga clic
let likes = 0; // Inicializamos el contador de likes

likeButton.addEventListener('click', () => {
    likes++; // Incrementamos el contador de likes
    likesCount.textContent = `${likes} like(s)`; // Actualizamos el texto de los likes
});