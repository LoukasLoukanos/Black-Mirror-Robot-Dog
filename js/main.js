/* Declara uma constante chamada "controle" e atribui a ela uma NodeList contendo 
todos os elementos do documento que possuem o atributo "data-controle".*/
const controle = document.querySelectorAll("[data-controle]")

/* Declara uma constante chamada "estatisticas" e atribui a ela uma NodeList contendo 
todos os elementos do documento que possuem o atributo "data-estatistica".*/
const estatisticas = document.querySelectorAll("[data-estatistica]")

/* Define um objeto chamado "pontuacao_caracteristicas" que contém várias propriedades, onde cada propriedade 
é uma caracteristica do robô.*/
const pontuacao_caracteristicas = {
    "intensidade": {
        "forca": 13,
        "poder": 9,
        "energia": -7,
        "velocidade": 5
    },
    "processamento": {
        "forca": 0,
        "poder": 6,
        "energia": -9,
        "velocidade": 15
    },
    "blindagem":{
        "forca": 12,
        "poder": 15,
        "energia": -8,
        "velocidade": -11
    },
    "agilidade":{
        "forca": 3,
        "poder": 4,
        "energia": -6,
        "velocidade": 14
    },
    "resistencia":{
        "forca": -4,
        "poder": 7,
        "energia": 14,
        "velocidade": 0
    }
}

/* Adiciona um evento de clique a cada elemento encontrado na NodeList "controle". Quando um elemento é clicado, ele chama a função "manipulaDados" 
passando o valor do atributo "data-controle" do elemento clicado e o pai do elemento como parâmetros. Em seguida, chama a função "atualizaEstatistica" 
passando o valor do atributo "data-peca" do elemento clicado. */
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento, evento.target.dataset.controle, evento.target.parentNode)
    })
})

/* Seleciona o elemento dentro do "controle" que possui o atributo "data-contador" e armazena em uma constante chamada "peca". Em seguida, 
verifica se a "operacao" é igual a "-", se for, subtrai 1 do valor de "peca.value", caso contrário, adiciona 1 ao valor de "peca.value". */
function manipulaDados(evento, operacao, controle) {
    const capacidade_total = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        capacidade_total.value = parseInt(capacidade_total.value) - 1;
        atualizaEstatistica(evento.target.dataset.botao_operacao, -1); // Chamada da função com valor -1
    } else {
        capacidade_total.value = parseInt(capacidade_total.value) + 1;
        atualizaEstatistica(evento.target.dataset.botao_operacao, 1); // Chamada da função com valor 1
    }
}

/* Percorre todos os elementos da NodeList "estatisticas". Para cada elemento, atualiza o seu texto interno (textContent) somando o valor numérico correspondente à propriedade do objeto "pontuacao_caracteristicas" relacionada à "peca" e à propriedade "data-estatistica" do elemento. */
function atualizaEstatistica(botao_operacao, valor) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + (pontuacao_caracteristicas[botao_operacao][elemento.dataset.estatistica] * valor);
    });
}

//--- Ação 'Iniciar produção' ----------------------------------

document.getElementById('producao').addEventListener('click', function () {
    const imagem_original = document.getElementById('robotdog');
    const imagem_substituta = "img/robot-finish.png";
    
    // Substituir a imagem original pela imagem substituta
    imagem_original.src = imagem_substituta;
});
