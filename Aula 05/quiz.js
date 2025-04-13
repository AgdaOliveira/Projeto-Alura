// Função para embaralhar o array (usando o algoritmo de Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// PARTE 1: Lista de perguntas e respostas
let perguntas = [];
let todasPerguntas = [
  {
    "pergunta": "Quem foi a primeira pessoa a viajar no Espaço?",
    "respostas": [
      { "opcao": "Yuri Gagarin", correto: true },
      { "opcao": "A cadela Laika", correto: false },
      { "opcao": "Neil Armstrong", correto: false },
      { "opcao": "Marcos Pontes", correto: false }
    ]
  },
  {
    "pergunta": "Que país tem o formato de uma bota?",
    "respostas": [
      { "opcao": "Brasil", correto: false },
      { "opcao": "Itália", correto: true },
      { "opcao": "México", correto: false },
      { "opcao": "Alemanha", correto: false }
    ]
  },
  {
    "pergunta": "Quantos ossos temos no nosso corpo?",
    "respostas": [
      { "opcao": "180", correto: false },
      { "opcao": "300", correto: false },
      { "opcao": "206", correto: true },
      { "opcao": "230", correto: false }
    ]
  },
  {
    "pergunta": "Qual a maior floresta tropical do mundo?",
    "respostas": [
      { "opcao": "Floresta Amazônica", correto: true },
      { "opcao": "Caatinga", correto: false },
      { "opcao": "Mata Atlântica", correto: false },
      { "opcao": "Pantanal", correto: false }
    ]
  },
  {
    "pergunta": "Qual é o maior planeta do Sistema Solar?",
    "respostas": [
      { "opcao": "Terra", correto: false },
      { "opcao": "Marte", correto: false },
      { "opcao": "Júpiter", correto: true },
      { "opcao": "Saturno", correto: false }
    ]
  },
  {
    "pergunta": "Qual é a capital da França?",
    "respostas": [
      { "opcao": "Paris", correto: true },
      { "opcao": "Londres", correto: false },
      { "opcao": "Berlim", correto: false },
      { "opcao": "Madri", correto: false }
    ]
  },
  {
    "pergunta": "Nesses pares, ambos são mamíferos:",
    "respostas": [
      { "opcao": "Baleia azul e golfinhos", correto: true },
      { "opcao": "Macacos e sapos", correto: false },
      { "opcao": "Morcegos e galinhas", correto: false },
      { "opcao": "Porcos e pinguins", correto: false }
    ]
  },
  {
    "pergunta": "Qual é o maior oceano do mundo?",
    "respostas": [
      { "opcao": "Oceano Atlântico", correto: false },
      { "opcao": "Oceano Índico", correto: false },
      { "opcao": "Oceano Pacífico", correto: true },
      { "opcao": "Oceano Ártico", correto: false }
    ]
  },
  {
    "pergunta": "Qual é o continente mais frio do planeta?",
    "respostas": [
      { "opcao": "África", correto: false },
      { "opcao": "América do Sul", correto: false },
      { "opcao": "Antártica", correto: true },
      { "opcao": "Ásia", correto: false }
    ]
  },
  {
    "pergunta": "Qual é o maior animal terrestre?",
    "respostas": [
      { "opcao": "Elefante", correto: true },
      { "opcao": "Girafa", correto: false },
      { "opcao": "Hipopótamo", correto: false },
      { "opcao": "Rinoceronte", correto: false }
    ]
  },
  {
    "pergunta": "Qual é a capital do Japão?",
    "respostas": [
      { "opcao": "Tóquio", correto: true },
      { "opcao": "Seul", correto: false },
      { "opcao": "Pequim", correto: false },
      { "opcao": "Bangcoc", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const botaoReiniciar = document.querySelector(".reiniciar"); // Botão de reiniciar na tela final

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0;     // Contador de acertos
let shufledRespostas = []; // Respostas embaralhadas

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  shufledRespostas = shuffle(perguntaAtual.respostas); // Embaralha as respostas
  for (let i = 0; i < shufledRespostas.length; i++) {
    const resposta = shufledRespostas[i];
    // Cria um novo botão para cada resposta
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    
    // Evento de clique para o botão de resposta
    botao.onclick = function () {
      if (resposta.correto) {
        acertos++; // Incrementa se a resposta estiver correta
      }
      
      // Avança para a próxima pergunta
      indiceAtual++;
      
      // Se ainda houver perguntas, carrega a próxima; caso contrário, finaliza o jogo
      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };
    
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";        // Esconde as perguntas
  conteudoFinal.style.display = "flex";     // Mostra a tela final
}

// PARTE 6: Função para reiniciar o jogo
function reiniciarJogo() {
  // Reinicia os valores de controle
  indiceAtual = 0;
  acertos = 0;

  perguntas = shuffle(todasPerguntas).slice(0, 4); // Seleciona 4 perguntas aleatórias
  
  // Restaura a tela de perguntas
  conteudo.style.display = "block";
  conteudoFinal.style.display = "none";
  
  // Inicia o jogo novamente
  carregarPergunta();
}

// Adiciona o evento de clique para o botão de reiniciar
if (botaoReiniciar) {
  botaoReiniciar.addEventListener("click", reiniciarJogo);
}

// PARTE 7: Iniciando o jogo pela primeira vez
// Embaralha as perguntas inicialmente
perguntas = shuffle(todasPerguntas).slice(0, 4);
carregarPergunta();

    