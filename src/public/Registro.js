document.addEventListener("DOMContentLoaded", function() {
    const registrarButton = document.getElementById("registrarButton");
    const regresarButton = document.getElementById("regresarButton");
    const loginLink = document.querySelector(".login-link");
    const registroForm = document.querySelector(".registro-container");
    const passwordInput = document.querySelector("input[type='password']");
    const confirmPasswordInput = document.querySelectorAll("input[type='password']")[1];

    // Validación de contraseña en tiempo real
    confirmPasswordInput.addEventListener('input', function() {
        if(passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden");
            confirmPasswordInput.style.borderColor = "#ff6b6b";
        } else {
            confirmPasswordInput.setCustomValidity("");
            confirmPasswordInput.style.borderColor = "#7ebc89";
        }
    });

    // Manejo del formulario
    registroForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        if(passwordInput.value !== confirmPasswordInput.value) {
            alert("Por favor verifica que las contraseñas coincidan");
            return;
        }

        // Mostrar feedback visual
        registrarButton.disabled = true;
        registrarButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registrando...';

        // Simular envío (reemplazar con llamada real a API)
        setTimeout(() => {
            alert("¡Registro exitoso! Serás redirigido al login");
            window.location.href = "login.html";
        }, 1500);
    });

    // Botón regresar
    regresarButton.addEventListener("click", function() {
        window.location.href = "../views/Index.html";
    });

    // Enlace a login
    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "../views/Login.html";
    });

    // Validación en tiempo real para todos los campos
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", function() {
            if(this.checkValidity()) {
                this.style.borderColor = "#7ebc89";
            } else {
                this.style.borderColor = "#ddd";
            }
        });
    });

    // Control de animación
    const registroWrapper = document.querySelector(".registro-wrapper");
    const registroImage = document.querySelector(".registro-image");
    
    registroWrapper.addEventListener("mouseenter", function() {
        registroImage.style.transform = "translateX(100%)";
    });
    
    registroWrapper.addEventListener("mouseleave", function() {
        registroImage.style.transform = "translateX(0)";
    });
});