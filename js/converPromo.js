function openModal() {
    var modalElement = new bootstrap.Modal(document.getElementById('videoModal'));
    modalElement.show();
}

// Exibe o modal a cada 7 segundos (7000 milissegundos)
setInterval(openModal, 3000000);

function redirectToWhatsApp() {
    var whatsappURL = "https://wa.me/+923584804?text=Olá, gostaria de saber mais sobre a AADIMD!";
    window.open(whatsappURL, '_blank');
}

// Exibe a notificação após 5 segundos
// Função para exibir a notificação após 5 segundos
setTimeout(function() {
    document.getElementById('whatsappNotification').style.display = 'block';

    // Função para fechar a notificação após 3 minutos (180.000 milissegundos)
    setTimeout(function() {
        document.getElementById('whatsappNotification').style.display = 'none';
    }, 180000); // 3 minutos em milissegundos
}, 5000);

