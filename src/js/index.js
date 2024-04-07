/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

    Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe "ativo" nos projetos escondidos


Objetivo 2 - esconder o botão de mostrar mais após ser clicado

    passo 1 - pegar o botão e esconder ele
*/



//Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html
//Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')

//passo 2 - identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    //para isso precisamos criar uma nova variável
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
    mostrarMaisProjetos(projetosInativos)
    
    //Objetivo 2 - esconder o botão de mostrar mais após ser clicado
    //passo 1 - pegar o botão e esconder ele
    esconderBotao()

})
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover')
}

function mostrarMaisProjetos(projetosInativos) {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo')
    })
}

