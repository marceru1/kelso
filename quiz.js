// Dados das perguntas com imagens/GIFs
const questions = [
  {
    id: 1,
    question: "Qual a coisa que mais gostei em você inicialmente?",
    image: "data:image/webp;base64,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", // GIF engraçado de sapato
    options: [
      { text: "Sapato sujo" },
      { text: "Ser fofa" },
      { text: "Ser simpática" },
      { text: "A bunda" },
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Qual contratação mais cara da história do futebol?",
    options: [
      { text: "Messi" },
      { text: "CR7" },
      { text: "Pelé" },
      { text: "Neymar" },
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: "Qual a primeira série que a gente combinou de assistir juntos?",
    image: "https://i.pinimg.com/736x/00/a9/cf/00a9cf328e97a702e757b31efa4cae4a.jpg", // GIF de Netflix
    options: [
      { text: "Tulsa King" },
      { text: "Halloween" },
      { text: "Sopranos" },
      { text: "Dexter" },
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'Qual foi o nome do lanche que você pediu no primeiro encontro para me enganar dizendo que "não come muito"?',
    image: "https://media.giphy.com/media/TZIpL5W9yB4ZNmMskg/giphy.gif", // GIF de hamburguer gigante
    options: [
      { text: "X Burguer" },
      { text: "Artilheiro (45 Burguer)" },
      { text: "iMac (iPhone)" },
      { text: "Hamburguer de Frango (iPhome)" },
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "O que me brilha muito os olhos?",
    image: "https://i.pinimg.com/1200x/d1/b1/9f/d1b19f930d9c3e7af98d364106998502.jpg", // GIF de olhos brilhando
    options: [
      { text: "Você sem roupa" },
      { text: "Seus olhos claros" },
      { text: "Sua bunda imensa" },
      { text: "Ver Neymar jogar" },
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "O que eu queria na primeira vez que lhe vi na farmácia?",
    image: "https://media.giphy.com/media/CUigR37lDHMb3dOrsc/giphy.gif", // GIF de farmácia/remédio
    options: [
      { text: "Anabolizante" },
      { text: "Remédio" },
      { text: "Droga" },
      { text: "Seringa" },
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Qual a música que a gente mais gosta?",
    image: "https://i.pinimg.com/736x/07/15/3c/07153ca55495adcb4934fdab2fb2aad3.jpg", // GIF de música/fone
    options: [
      { text: "Quer fuder c Corola preto" },
      { text: "Ô Neymar" },
      { text: "Sorry" },
      { text: "Innerbloom" },
    ],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "Qual primeiro presente que te dei?",
    image: "https://i.pinimg.com/736x/f5/25/c5/f525c5d47d0aa729f9ab105dde9baa8e.jpg", // GIF de presente
    options: [
      { text: "Pulseira" },
      { text: "Colar" },
      { text: "Lil Striti" },
      { text: "EU" },
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "Qual jogador representa nossa vibe?",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3c2c3ZzZm92M29pOHVqN3Qybm9qbHJtYXltZmIxanR5eHJqdnVmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5ExYAtuRPRWo0tJciM/giphy.gif", // GIF de Ronaldinho feliz
    options: [
      { text: "Neymar (habilidoso, mas dramático 😅)" },
      { text: "Casemiro (firme e constante)" },
      { text: "Ronaldinho (só alegria 😎)" },
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Se eu te chamasse pra sair do nada, você…",
    image: "https://media.giphy.com/media/eFSH5zyPOBxXPhm55b/giphy.gif", // GIF de alguém se arrumando rápido
    options: [
      { text: "Fingiria que pensou, mas já tava pronta" },
      { text: 'Diria "depende", só pra fazer charme' },
      { text: "Aceitaria e fingiria naturalidade (falhando miseravelmente)" },
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "Se a gente fosse um casal famoso, quem seríamos?",
    image: "https://i.pinimg.com/736x/d7/94/c3/d794c38660990eca6134e885c59c7470.jpg", // GIF de Deadpool
    options: [
      { text: "Deadpool e Vanessa" },
      { text: "Tony Stark e Pepper Potts" },
      { text: "Joker e Harley" },
      { text: "Neymar e Bruna Biancardi (só a parte da fidelidade ok)" },
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "O que eu mais gosto de fazer contigo?",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczFsYWp5bDJqYzU0d3NubXhjejQyZ3Q4cjlkbmc5ejd2dHFsc2l5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PliJBYGYyPIgcwIyqg/giphy.gif", // GIF de olhar apaixonado
    options: [
      { text: "Rir escrotamente sobre coisa imbecil" },
      { text: "Conversar" },
      { text: "Secso" },
      { text: "Olhar pra você" },
    ],
    correctAnswer: 3,
  },
];

// Estado do app
let currentQuestion = 0;
let showLoading = false;
let showMission = false;
let showMission2 = false;
let showFinal = false;
let showSuccess = false;
let selectedAnswer = null;
let noButtonPos = { x: 50, y: 50 };

// Função para renderizar
function render() {
  const app = document.getElementById('app');
  
if (showSuccess) {
    app.innerHTML = `
      <div class="container">
        <div class="success-container">
          <svg class="success-heart" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h1 class="success-title">Você disse SIM! 💕</h1>
          <p class="success-subtitle">Parabéns pela melhor escolha da sua vida</p>
          
                    <div class="polaroid-frame">
            <img src="foto_casal.jpeg" class="success-image">
          </div>
                    <p class="success-footer">"E eles viveram felizes para sempre..."</p>
        </div>
      </div>
    `;
    return;
  }
  
 if (showFinal) {
    app.innerHTML = `
      <div class="container">
        <div class="final-container">
          <svg class="final-heart" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>

          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHEyb2h4MzR3cHZuaHpqbnBqcTJrcnN4aXg2bnF3NXl1ZW9mYTlhOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A4K8k6CjsqlHZTVSdO/giphy.gif" alt="Pedido" class="final-gif">

          <h1 class="final-title">💍 VOCÊ ACEITA NAMORAR COMIGO? 💞</h1>
          <div class="buttons-container">
            <button class="yes-button" onclick="handleYes()">SIM 😍</button>
            <button class="no-button" id="noButton" onmouseover="moveNoButton()" onclick="moveNoButton()">não</button>
          </div>
        </div>
      </div>
    `;
    updateNoButtonPosition();
    return;
  }
  
if (showMission2) {
    app.innerHTML = `
      <div class="container">
        <div class="mission-container">
          <svg class="sparkles-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.5 11.5L14 2l.5 9.5L24 12l-9.5.5L14 22l-.5-9.5L4 12l9.5-.5z"></path>
          </svg>

                    <img src="https://media.giphy.com/media/HhtjGpAuaNEoqROc2g/giphy.gif" alt="Momento de decisão" class="mission-gif">

          <h2 class="mission-title">Missão Final:</h2>
          <p class="mission-text">
            Você enfrentou 12 perguntas, sobreviveu às provocações,<br>
            riu das besteiras… e ainda está aqui.<br><br>
            Então só resta uma coisa a perguntar:
          </p>
          <button class="continue-button" onclick="nextToFinal()">PASSE PARA O LADO →</button>
        </div>
      </div>
    `;
    return;
  }
  
  if (showMission) {
    app.innerHTML = `
      <div class="container">
        <div class="mission-container">
          <svg class="sparkles-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.5 11.5L14 2l.5 9.5L24 12l-9.5.5L14 22l-.5-9.5L4 12l9.5-.5z"></path>
          </svg>
          <h2 class="mission-title">Agora, tem uma última missão…</h2>
          <p class="mission-text">Mas cuidado: essa decisão muda tudo.</p>
          <button class="continue-button" onclick="nextToMission2()">PASSE PARA O LADO →</button>
        </div>
      </div>
    `;
    return;
  }
  
  if (showLoading) {
    app.innerHTML = `
      <div class="container">
        <div class="loading-container">
          <div class="loading-icon">
            <svg class="loading-heart" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <svg class="loading-sparkles" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 11.5L14 2l.5 9.5L24 12l-9.5.5L14 22l-.5-9.5L4 12l9.5-.5z"></path>
            </svg>
          </div>
          <h2 class="loading-title">Carregando...</h2>
          <div class="loading-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  app.innerHTML = `
    <div class="container">
      <div class="progress-container">
        <div class="progress-header">
          <span class="progress-text">Pergunta ${currentQuestion + 1} de ${questions.length}</span>
          <svg class="heart-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
      
      <h2 class="question-title">${question.question}</h2>
      
      ${question.image ? `<img src="${question.image}" alt="Imagem da pergunta" class="question-image">` : ''}
      
      <div class="options-grid">
        ${question.options.map((option, index) => `
          <button 
            class="option-button ${selectedAnswer === index ? 'selected' : ''}" 
            onclick="handleAnswer(${index})"
          >
            ${option.text}
          </button>
        `).join('')}
      </div>
      
      ${currentQuestion === questions.length - 1 ? `
        <p class="final-message">
          ✨ PARABÉNS! VOCÊ CHEGOU AO ESTÁGIO FINAL QUE POUCOS CONSEGUEM ✨
        </p>
      ` : ''}
    </div>
  `;
}

// Handlers
function handleAnswer(index) {
  selectedAnswer = index;
  
  // --- INÍCIO DA MODIFICAÇÃO ---
  // 1. Atualiza manualmente os botões na tela (sem chamar render())
  const buttons = document.querySelectorAll('.option-button');
  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
  
  // 2. A chamada 'render()' foi removida daqui
  // --- FIM DA MODIFICAÇÃO ---
  
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      selectedAnswer = null;
      render(); // Agora 'render()' só é chamado aqui, para a próxima pergunta
    } else {
      showLoading = true;
      render();
      setTimeout(() => {
        showLoading = false;
        showMission = true;
        render();
      }, 5000); // 5 segundos de loading
    }
  }, 800); // 0.8 segundos de espera após selecionar
}

function nextToMission2() {
  showMission = false;
  showMission2 = true;
  render();
}

function nextToFinal() {
  showMission2 = false;
  showFinal = true;
  render();
}

function handleYes() {
  showFinal = false;
  showSuccess = true;
  render();
}

function moveNoButton() {
  noButtonPos.x = Math.random() * 80; // Posição aleatória na horizontal (0-80%)
  noButtonPos.y = Math.random() * 80; // Posição aleatória na vertical (0-80%)
  updateNoButtonPosition();
}

function updateNoButtonPosition() {
  const noButton = document.getElementById('noButton');
  if (noButton) {
    noButton.style.left = `${noButtonPos.x}%`;
    noButton.style.top = `${noButtonPos.y}%`;
  }
}

// Inicializar
render();