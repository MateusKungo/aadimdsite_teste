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
setTimeout(function() {
    document.getElementById('whatsappNotification').style.display = 'block';
}, 5000); 
