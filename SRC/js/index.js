// Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

let indiceAtual = 0;
const intervalo = 3000; // Tempo em milissegundos para mudar a imagem

// Função para mudar para a próxima imagem automaticamente
function proximaImagem() {
    const proximoIndice = (indiceAtual + 1) % imagens.length;
    mudarImagem(proximoIndice);
    indiceAtual = proximoIndice;
}

// Passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        mudarImagem(indice);
        indiceAtual = indice; // Atualizar o índice atual quando o usuário clicar em um botão
    });
});

function mudarImagem(indice) {
    // Passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();
    
    // Passo 4 - marcar o botão clicado como se estivesse selecionado
    selecionarBotaoCarrosel(botoesCarrossel[indice]);
    
    // Passo 5 - esconder a imagem ativa de fundo
    esconderImagemAtiva();
    
    // Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
    mostrarImagemDeFundo(indice);
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    if (imagemAtiva) {
        imagemAtiva.classList.remove('ativa');
    }
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

// Iniciar o carrossel automático
setInterval(proximaImagem, intervalo);

// Chamar a função para iniciar o carrossel com a primeira imagem
mudarImagem(indiceAtual);
