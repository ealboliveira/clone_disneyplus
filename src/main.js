document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const botao = event.target;
            const abaAlvo = document.querySelector(`[data-tab-id=${botao.getAttribute('data-tab-button')}]`);
            escondeTodasAbas();
            abaAlvo.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.classList.add('shows__tabs_button--is-active');
        });
    }
});

function escondeTodasAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < abas.length; i++) {
        abas[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs_button--is-active');
    }
}
