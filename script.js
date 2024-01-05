// Esperar a que se cargue el contenido de la página
document.addEventListener("DOMContentLoaded", function(event) {
    var noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseenter", function(event) {
        // Randomly generate new position
        var xPos = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        var yPos = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

        // Set new position
        noButton.style.top = yPos + "px";
        noButton.style.left = xPos + "px";
    });
});
