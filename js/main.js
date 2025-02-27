document.addEventListener("DOMContentLoaded", () => {
    // Asegura que la página inicie en la parte superior
    window.scrollTo(0, 0);

    const botones = document.querySelectorAll(".filter-item");
    const tarjetas = document.querySelectorAll("a[data-seccion]");

    // Si no hay botones o tarjetas, salir para evitar errores
    if (!botones.length || !tarjetas.length) return;

    // Selecciona el botón "Materias" al inicio
    const defaultFilter = "materias";
    const defaultButton = document.querySelector(`.filter-item[data-number="${defaultFilter}"]`);
    if (defaultButton) defaultButton.classList.add("active");

    const filtrarTarjetas = (categoria) => {
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.remove("show");
            tarjeta.classList.add("hidden");

            if (tarjeta.dataset.seccion === categoria) {
                requestAnimationFrame(() => {
                    tarjeta.classList.remove("hidden");
                    tarjeta.classList.add("show");
                });
            }
        });
    };

    // Aplicar filtro inicial
    filtrarTarjetas(defaultFilter);

    // Evento para cambiar filtro al hacer clic en un botón
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const seleccionado = e.target.closest(".filter-item");
            if (!seleccionado || seleccionado.classList.contains("active")) return;

            botones.forEach(btn => btn.classList.remove("active"));
            seleccionado.classList.add("active");

            filtrarTarjetas(seleccionado.dataset.number);
        });
    });
});

