
    // Captura o evento de exibição do modal e altera a imagem
    var galleryModal = document.getElementById('galleryModal');
    galleryModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // Botão que acionou o modal
        var imageUrl = button.getAttribute('data-img-src'); // Obtém o caminho da imagem

        // Atualiza o conteúdo da imagem no modal
        var modalImage = document.getElementById('modalImage');
        modalImage.src = imageUrl;
    });

