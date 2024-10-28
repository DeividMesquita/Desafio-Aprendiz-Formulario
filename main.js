const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    // Verifica se o primeiro nome tá vazio
    if (!firstNameInput.value.trim()) {
        alert("Por favor, preencha seu primeiro nome");
        return;
    }
    // Verifica se o segundo nome tá vazio
    if (!lastNameInput.value.trim()) {
        alert("Por favor, preencha seu segundo nome");
        return;
    }
    // Verifica se o email está nos padrões
    if (!emailInput.value.trim() || !isEmailValid(emailInput.value)) {
        alert("Parece que isso não é um e-mail válido");
        return;
    }
    // Verifica a senha
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }
    // Envia o formulário
    form.submit();
});

// Função que valida email
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Função que valida senha
function validatePassword(password, minDigits) {
    return password.length >= minDigits;
}
