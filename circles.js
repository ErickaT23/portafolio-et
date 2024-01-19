// Función para crear círculos aleatorios
function createRandomCircle(x, y) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    // Asigna la posición a los círculos
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Agrega el círculo al contenedor
    document.querySelector('.circle-container').appendChild(circle);

    // Elimina el círculo después de un tiempo para evitar la acumulación
    setTimeout(() => {
        circle.remove();
    }, 5000);
}

// Función para manejar el evento de movimiento (tanto mouse como touch)
function handleMove(event) {
    let x, y;
    // Verifica si el evento es táctil
    if (event.type === 'touchmove') {
        // Previene el comportamiento por defecto para eventos táctiles
        event.preventDefault();
        // Obtiene las coordenadas del touch
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        // Obtiene las coordenadas del mouse
        x = event.clientX;
        y = event.clientY;
    }
    createRandomCircle(x, y);
}

// Escucha el movimiento del mouse
document.addEventListener('mousemove', handleMove);

// Escucha el movimiento táctil
document.addEventListener('touchmove', handleMove);

