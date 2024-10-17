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
function mostrarNotificacaoAleatoria() {
    // Array com os tempos em milissegundos (3 segundos, 1 minuto, 5 minutos, 9 minutos)
    const intervalos = [3000, 60000, 300000, 540000];

    // Seleciona aleatoriamente um intervalo do array
    const intervaloAleatorio = intervalos[Math.floor(Math.random() * intervalos.length)];

    // Exibe a notificação após o tempo aleatório escolhido
    setTimeout(function() {
        document.getElementById('whatsappNotification').style.display = 'block';

        // Oculta a notificação após 3 minutos (180.000 milissegundos)
        setTimeout(function() {
            document.getElementById('whatsappNotification').style.display = 'none';
        }, 180000); // 3 minutos
    }, intervaloAleatorio);
}

// Chama a função para iniciar a exibição aleatória da notificação
mostrarNotificacaoAleatoria();
