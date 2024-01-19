// Este código permite que las tarjetas se agranden al hacer clic en dispositivos móviles.
const tarjetas = document.querySelectorAll('.tarjeta');

if (window.innerWidth <= 768) { // Verifica el ancho de la pantalla
    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener('click', () => {
            tarjeta.style.height = '220px'; // Ajusta la altura al hacer clic
        });
    });
} else {
    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener('mouseover', () => {
            tarjeta.style.height = '440px';
        });

        tarjeta.addEventListener('mouseout', () => {
            tarjeta.style.height = '400px';
        });
    });
}
