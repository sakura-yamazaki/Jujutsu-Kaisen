const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        desselecionarPersonagem();

        desselecionarBotao();

        botao.classList.add('selecionado');
        personagens[index].classList.add('selecionado')

    })

    function desselecionarBotao() {
        const botaoSelecionado = document.querySelector('.botao.selecionado');
        botaoSelecionado.classList.remove('selecionado');
    }

    function desselecionarPersonagem() {
        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove('selecionado');
    }
})