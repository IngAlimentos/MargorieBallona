document.addEventListener("DOMContentLoaded", function () {
    // Función para animaciones en scroll
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    }

    // Agregar clase reveal a elementos que queremos animar
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("reveal");
    });

    // También agregamos la clase a otros elementos que queremos animar
    const elements = document.querySelectorAll(".fichas, .box, .texts p, .text p");
    elements.forEach(element => {
        element.classList.add("reveal");
    });

    // Evento scroll
    window.addEventListener("scroll", reveal);

    // Llamar a reveal al cargar la página
    reveal();

    // Smooth scroll para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

