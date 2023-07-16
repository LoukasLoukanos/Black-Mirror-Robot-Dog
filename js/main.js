// Declara uma constante chamada "controle" e atribui a ela uma NodeList contendo 
// todos os elementos do documento que possuem o atributo "data-controle".
const controle = document.querySelectorAll("[data-controle]")

// Declara uma constante chamada "estatisticas" e atribui a ela uma NodeList contendo 
// todos os elementos do documento que possuem o atributo "data-estatistica".
const estatisticas = document.querySelectorAll("[data-estatistica]")

// Define um objeto chamado "pecas" que contém várias propriedades, onde cada propriedade 
// é uma peça do robô. Cada peça tem suas próprias propriedades, como "forca", "poder", 
// "energia" e "velocidade", com valores numéricos associados a elas.
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

/* Adiciona um evento de clique a cada elemento encontrado na NodeList "controle". Quando um elemento é clicado, ele chama a função "manipulaDados" 
passando o valor do atributo "data-controle" do elemento clicado e o pai do elemento como parâmetros. Em seguida, chama a função "atualizaEstatistica" 
passando o valor do atributo "data-peca" do elemento clicado. */
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

/* Seleciona o elemento dentro do "controle" que possui o atributo "data-contador" e armazena em uma constante chamada "peca". Em seguida, 
verifica se a "operacao" é igual a "-", se for, subtrai 1 do valor de "peca.value", caso contrário, adiciona 1 ao valor de "peca.value". */
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

/* Percorre todos os elementos da NodeList "estatisticas". Para cada elemento, atualiza o seu texto interno (textContent) somando o valor numérico correspondente à propriedade do objeto "pecas" relacionada à "peca" e à propriedade "data-estatistica" do elemento. */
function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}