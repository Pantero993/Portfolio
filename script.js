// Função para mostrar a mensagem de boas-vindas
function showWelcomeMessage() {
    const userName = prompt("Olá! Qual é o seu nome?");
    if (userName) {
        alert("Bem-vindo ao portfólio, " + userName + "!");
    } else {
        alert("Bem-vindo ao portfólio!");
    }
}

// Chama a função quando a página carregar
window.onload = showWelcomeMessage;
