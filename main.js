const form = document.querySelector("#form");
const campos = document.querySelectorAll(".inputs");
const spans = document.querySelectorAll(".span-required");
const emailField = document.querySelector("#email");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    let isFormValid = true;

    campos.forEach((campo, index) => {
        if (!campo.value.trim()) {
            showError(index); // Exibe o span de erro se o campo estiver vazio
            isFormValid = false; // Formulário inválido
        } else {
            hideError(index); // Esconde o span de erro se o campo estiver preenchido
        }
    });

    // Validação específica para o e-mail
    const emailValue = emailField.value.trim(); // Remove espaços em branco no início/fim
    const emailIndex = Array.from(campos).indexOf(emailField); // Encontra o índice do campo de email

    if (emailValue === "") {
        showError(emailIndex);
        spans[emailIndex].innerText = "Email cannot be empty"; // Exibe erro de campo vazio
        isFormValid = false;
    } else if (!isEmailValid(emailValue)) {
        showError(emailIndex);
        spans[emailIndex].innerText = "Invalid email format"; // Exibe erro de formato inválido
        isFormValid = false;
    } else {
        hideError(emailIndex);
    }

    // Se o formulário estiver válido, pode enviar
    if (isFormValid) {
        form.submit(); // Envia o formulário se todos os campos estiverem corretos
    }
});

// Função que valida e-mail
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function showError(index) {
    campos[index].classList.add("input-error");
    spans[index].classList.add("show");
}

function hideError(index) {
    campos[index].classList.remove("input-error");
    spans[index].classList.remove("show");
}