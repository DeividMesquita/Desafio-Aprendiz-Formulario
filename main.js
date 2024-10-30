const form = document.querySelector("#form");
const campos = document.querySelectorAll(".inputs");
const spans = document.querySelectorAll(".span-required");

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

    if (isFormValid) {
        form.submit(); // Envia o formulário se todos os campos estiverem corretos
    }
});

function showError(index) {
    campos[index].classList.add("input-error");
    spans[index].classList.add("show");
}

function hideError(index) {
    campos[index].classList.remove("input-error");
    spans[index].classList.remove("show");
}

// Função que valida email
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Função que valida senha
function validatePassword(password, minDigits) {
    return password.length >= minDigits;
}
