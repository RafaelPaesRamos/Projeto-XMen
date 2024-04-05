/* 
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

*/
// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll(' .personagem');

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

    //passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

const personagemselecionado = document.querySelector('.selecionado');
personagemselecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
    
    //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

const imagempersonagemgrande = document.querySelector('.personagem-grande');

//passo 2 - alterar a imagem do personagem grande

const idpersonagem = personagem.attributes.id.value;
imagempersonagemgrande.src = `./src/imagens/card-${idpersonagem}.png`;

//passo 3 - alterar o nome do personagem grande

const nomepersonagem = document.getElementById('nome-personagem');
nomepersonagem.innerText = personagem.getAttribute('data-name');

//passo 4 - alterar a descrição do personagem grande

const descricaopersonagem = document.getElementById('descricao-personagem');
descricaopersonagem.innerText = personagem.getAttribute('data-description');
})
})







