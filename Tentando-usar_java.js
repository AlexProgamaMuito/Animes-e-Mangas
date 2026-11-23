const pesquisa = document.querySelector("#pesquisar");

const cards = document.querySelectorAll(".card-semana");

pesquisa.addEventListener("input", function() {

    const texto = pesquisa.value.toLowerCase();

    cards.forEach(function(card) {

        const nome = card.textContent.toLowerCase();

        if (nome.includes(texto)) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }

    });

});