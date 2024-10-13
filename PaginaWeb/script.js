document.addEventListener('scroll', function() {
    var infoBox = document.getElementById('info-box');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        infoBox.style.display = 'block'; // Muestra el recuadro
    } else {
        infoBox.style.display = 'none'; // Oculta el recuadro
    }
});
