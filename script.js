document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibir resposta
    document.getElementById('resposta').innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi recebida.</p>`;

    // Limpar o formulário
    document.getElementById('feedback-form').reset();
});

// Função para adicionar uma nova notificação
function adicionarNotificacao(texto) {
    const alertas = document.getElementById('alertas');
    const novaAlerta = document.createElement('div');
    novaAlerta.classList.add('alerta');
    novaAlerta.innerHTML = `<strong>🔔 Novo Alerta:</strong> ${texto}`;
    alertas.appendChild(novaAlerta);
}

// Exemplo de uso
adicionarNotificacao("a procurar.......");

function ativarAltoContraste() {
    document.body.classList.toggle('alto-contraste');
}
function aumentarFonte() {
    document.body.style.fontSize = "larger";
}
function diminuirFonte() {
    document.body.style.fontSize = "smaller";
}
function lerTexto(texto) {
    let speech = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(speech);
}
