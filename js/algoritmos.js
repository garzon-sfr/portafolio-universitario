// filter nav
const filterBtns = document.querySelectorAll(".filter-item");
const sections = document.querySelectorAll(".filter-content");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Quitar clase active a todos
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        // Mostrar/Ocultar secciones
        sections.forEach(section => {
            if (section.id === filter) {
                section.classList.remove("hidden");
                section.classList.add("show");
            } else {
                section.classList.remove("show");
                section.classList.add("hidden");
            }
        });
    });
});

