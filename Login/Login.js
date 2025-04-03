document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const regresarButton = document.getElementById("regresarButton");
    const loginForm = document.querySelector(".login-container");
    const loginSpinner = document.getElementById("loginSpinner");
    const loginText = document.getElementById("loginText");
    const inputs = document.querySelectorAll("input");

    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener("input", function() {
            if(this.checkValidity()) {
                this.classList.remove("input-error");
                this.style.borderColor = "#7ebc89";
            } else {
                this.style.borderColor = "#ddd";
            }
        });
    });

    // Manejo del formulario
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let isValid = true;

        // Validar campos
        inputs.forEach(input => {
            if(!input.checkValidity()) {
                input.classList.add("input-error");
                isValid = false;
            }
        });

        if(!isValid) {
            return;
        }

        // Mostrar spinner
        loginSpinner.style.display = "block";
        loginText.textContent = "Autenticando...";
        loginButton.disabled = true;

        // Simular autenticación (reemplazar con llamada real)
        setTimeout(() => {
            // Ocultar spinner
            loginSpinner.style.display = "none";
            loginText.textContent = "Iniciar Sesión";
            loginButton.disabled = false;
            
            // Redirección después de login exitoso
            window.location.href = "../Inicio/Index.html";
        }, 1500);
    });

    // Botón regresar
    regresarButton.addEventListener("click", function() {
        window.location.href = "../Inicio/Index.html";
    });
});