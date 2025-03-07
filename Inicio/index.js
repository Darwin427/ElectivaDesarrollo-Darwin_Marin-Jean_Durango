document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".carousel-slides");
    const buttons = document.querySelectorAll(".carousel-btn");
    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".carousel-item").length;

    function changeSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        buttons.forEach((btn, i) => {
            btn.style.backgroundColor = i === currentIndex ? "#fff" : "rgba(255, 255, 255, 0.8)";
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => changeSlide(index));
    });

    setInterval(nextSlide, 4000); // Cambio automático cada 4 segundos
});

    // -------------------- Formulario "Pedir Cita" --------------------
    const form = document.querySelector("#cita-form");
    const nombreInput = document.querySelector("#nombre");
    const servicioInput = document.querySelector("#servicio");
    const fechaInput = document.querySelector("#fecha");

    if (fechaInput) {
        const today = new Date().toISOString().split("T")[0];
        fechaInput.setAttribute("min", today);
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que la página se recargue

            const nombre = nombreInput.value.trim();
            const servicio = servicioInput.value;
            const fecha = fechaInput.value;
            let valid = true;

            // Limpiar estilos previos
            [nombreInput, servicioInput, fechaInput].forEach(input => input.style.border = "2px solid #04D99D");

            if (!nombre) {
                nombreInput.style.border = "2px solid red";
                valid = false;
            }
            if (!servicio) {
                servicioInput.style.border = "2px solid red";
                valid = false;
            }
            if (!fecha) {
                fechaInput.style.border = "2px solid red";
                valid = false;
            }

            if (valid) {
                alert(`¡Cita agendada!\nNombre: ${nombre}\nServicio: ${servicio}\nFecha: ${fecha}`);
                form.reset();
            } else {
                alert("Por favor, complete todos los campos correctamente.");
            }
        });
    }
    

    document.getElementById("menu-toggle").addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("active");
    });
