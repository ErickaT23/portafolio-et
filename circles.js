// Función para crear círculos aleatorios
function createRandomCircle(x, y) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Asigna la posición del mouse a los círculos
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Agrega el círculo al contenedor
    document.querySelector('.circle-container').appendChild(circle);

    // Elimina el círculo después de un tiempo para evitar la acumulación
    setTimeout(() => {
        circle.remove();
    }, 5000);
}

// Escucha el movimiento del mouse y crea círculos en la posición del mouse
document.addEventListener('mousemove', (event) => {
    createRandomCircle(event.clientX, event.clientY);
});
