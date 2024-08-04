document.getElementById('reclamacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const tipoReclamacao = document.getElementById('tipoReclamacao').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar o código para enviar a mensagem para o WhatsApp do cliente
    // Por exemplo, você pode usar a API do Twilio ou outra API de envio de mensagens para WhatsApp

    alert('Reclamação enviada com sucesso! Uma cópia foi enviada para o seu WhatsApp.');

    // Resetar o formulário
    document.getElementById('reclamacaoForm').reset();
});
