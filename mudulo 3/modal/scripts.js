document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    var modal = document.getElementById("miModal");
    var btn = document.getElementById("abrirModalBtn");
    var span = document.getElementsByClassName("cerrar")[0];
    var secondaryBtn = document.querySelector(".btn-secondary-action");

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic en el botón, abre el modal 
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    if (span) {
        span.onclick = function() {
            cerrarModal();
        }
    }

    // Cuando el usuario hace clic en el botón 'Más tarde' en el footer
    if (secondaryBtn) {
        secondaryBtn.onclick = function() {
            cerrarModal();
        }
    }

    // Cuando el usuario hace clic fuera del modal, lo cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    }
    
    // Opcional: Cerrar con la tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            cerrarModal();
        }
    });
});