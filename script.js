// Dados dos países por continente
const world = {
  Africa: [
    "África do Sul", "Angola", "Argélia", "Benin", "Botsuana", "Burkina Faso", "Burundi", "Cabo Verde", 
    "Camarões", "Chade", "Comores", "Congo", "Costa do Marfim", "Djibouti", "Egito", "Eritreia", 
    "Essuatíni", "Etiópia", "Gabão", "Gâmbia", "Gana", "Guiné", "Guiné Equatorial", "Guiné-Bissau", 
    "Quênia", "Lesoto", "Libéria", "Líbia", "Madagáscar", "Malawi", "Mali", "Marrocos", 
    "Maurícia", "Mauritânia", "Moçambique", "Namíbia", "Níger", "Nigéria", "República Centro-Africana", 
    "República Democrática do Congo", "Ruanda", "São Tomé e Príncipe", "Senegal", "Serra Leoa", 
    "Seychelles", "Somália", "Sudão", "Sudão do Sul", "Tanzânia", "Togo", "Tunísia", "Uganda", 
    "Zâmbia", "Zimbábue"
  ],
  Europe: [
    "Albânia", "Alemanha", "Andorra", "Áustria", "Bélgica", "Bielorrússia", "Bósnia e Herzegovina", 
    "Bulgária", "Chipre", "Croácia", "Dinamarca", "Eslováquia", "Eslovênia", "Espanha", "Estônia", 
    "Finlândia", "França", "Grécia", "Hungria", "Irlanda", "Islândia", "Itália", "Kosovo", "Letônia", 
    "Liechtenstein", "Lituânia", "Luxemburgo", "Macedônia do Norte", "Malta", "Moldávia", "Mônaco", 
    "Montenegro", "Noruega", "Países Baixos", "Polônia", "Portugal", "Reino Unido", "República Tcheca", 
    "Romênia", "Rússia", "San Marino", "Sérvia", "Suécia", "Suíça", "Ucrânia", "Vaticano"
  ],
  Asia: [
    "Afeganistão", "Arábia Saudita", "Armênia", "Azerbaijão", "Bahrein", "Bangladesh", "Brunei", 
    "Butão", "Camboja", "Cazaquistão", "China", "Cingapura", "Coreia do Norte", "Coreia do Sul", 
    "Catar", "Emirados Árabes Unidos", "Filipinas", "Geórgia", "Iêmen", "Índia", "Indonésia", 
    "Irã", "Iraque", "Israel", "Japão", "Jordânia", "Kuwait", "Laos", "Líbano", "Malásia", 
    "Maldivas", "Mianmar", "Mongólia", "Nepal", "Omã", "Paquistão", "Quirguistão", "Sri Lanka", 
    "Síria", "Tadjiquistão", "Tailândia", "Taiwan", "Timor-Leste", "Turcomenistão", "Turquia", 
    "Uzbequistão", "Vietnã"
  ],
  NorthAmerica: [
    "Antígua e Barbuda", "Bahamas", "Barbados", "Belize", "Canadá", "Costa Rica", "Cuba", 
    "Dominica", "El Salvador", "Estados Unidos", "Granada", "Guatemala", "Haiti", "Honduras", 
    "Jamaica", "México", "Nicarágua", "Panamá", "República Dominicana", "Santa Lúcia", 
    "São Cristóvão e Nevis", "São Vicente e Granadinas", "Trinidad e Tobago"
  ],
  SouthAmerica: [
    "Argentina", "Bolívia", "Brasil", "Chile", "Colômbia", "Equador", "Guiana", "Paraguai", 
    "Peru", "Suriname", "Uruguai", "Venezuela"
  ],
  Oceania: [
    "Austrália", "Fiji", "Ilhas Marshall", "Ilhas Salomão", "Kiribati", "Micronésia", "Nauru", 
    "Nova Zelândia", "Palau", "Papua-Nova Guiné", "Samoa", "Tonga", "Tuvalu", "Vanuatu"
  ]
};

// Estado do jogo
let gameState = {
  eliminatedCountries: [],
  round: 1,
  remainingCountries: 0,
  totalCountries: 0,
  continents: {}
};

// Elementos do DOM
let eliminateBtn, resetBtn, remainingCountEl, eliminatedCountEl, progressPercentEl, globalProgressEl;
let activeContinentEl, eliminatedCountryEl, roundNumberEl, continentsGridEl, historyListEl;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initializeGame();
  loadGameState();
  renderUI();
  setupEventListeners();
});

// Inicializa o estado do jogo
function initializeGame() {
  // Calcular totais
  gameState.totalCountries = Object.values(world).reduce((total, countries) => total + countries.length, 0);
  gameState.remainingCountries = gameState.totalCountries;
  
  // Inicializar estado dos continentes
  for (const continent in world) {
    gameState.continents[continent] = {
      name: continent,
      countries: [...world[continent]],
      eliminated: [],
      active: true
    };
  }
  
  // Obter referências aos elementos DOM
  eliminateBtn = document.getElementById('eliminate-btn');
  resetBtn = document.getElementById('reset-btn');
  remainingCountEl = document.getElementById('remaining-count');
  eliminatedCountEl = document.getElementById('eliminated-count');
  progressPercentEl = document.getElementById('progress-percent');
  globalProgressEl = document.getElementById('global-progress');
  activeContinentEl = document.getElementById('active-continent');
  eliminatedCountryEl = document.getElementById('eliminated-country');
  roundNumberEl = document.getElementById('round-number');
  continentsGridEl = document.getElementById('continents-grid');
  historyListEl = document.getElementById('history-list');
}

// Carrega o estado salvo do localStorage
function loadGameState() {
  const savedState = localStorage.getItem('worldEliminationGame');
  
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    
    // Atualizar o estado do jogo com os dados salvos
    gameState.eliminatedCountries = parsedState.eliminatedCountries || [];
    gameState.round = parsedState.round || 1;
    
    // Restaurar estado dos continentes
    if (parsedState.continents) {
      for (const continent in parsedState.continents) {
        if (gameState.continents[continent]) {
          gameState.continents[continent].eliminated = parsedState.continents[continent].eliminated || [];
          gameState.continents[continent].active = parsedState.continents[continent].active || true;
          
          // Remover países eliminados da lista de países disponíveis
          gameState.continents[continent].countries = world[continent].filter(
            country => !gameState.continents[continent].eliminated.includes(country)
          );
        }
      }
    }
    
    // Recalcular contadores
    recalculateCounters();
  }
}

// Salva o estado do jogo no localStorage
function saveGameState() {
  localStorage.setItem('worldEliminationGame', JSON.stringify(gameState));
}

// Configura os event listeners
function setupEventListeners() {
  eliminateBtn.addEventListener('click', eliminateCountry);
  resetBtn.addEventListener('click', resetGame);
}

// Função principal para eliminar um país
function eliminateCountry() {
  // Verificar se ainda há países para eliminar
  if (gameState.remainingCountries <= 0) {
    alert("Todos os países já foram eliminados! Reinicie o jogo para começar novamente.");
    return;
  }
  
  // 1. Identificar continentes ativos (com países não eliminados)
  const activeContinents = Object.values(gameState.continents)
    .filter(continent => continent.countries.length > 0);
  
  if (activeContinents.length === 0) {
    alert("Erro: Não há continentes ativos com países disponíveis.");
    return;
  }
  
  // 2. Sortear aleatoriamente um continente ativo
  const randomContinentIndex = getRandomInt(0, activeContinents.length - 1);
  const selectedContinent = activeContinents[randomContinentIndex];
  
  // 3. Sortear aleatoriamente um país dentro do continente selecionado
  const randomCountryIndex = getRandomInt(0, selectedContinent.countries.length - 1);
  const eliminatedCountry = selectedContinent.countries[randomCountryIndex];
  
  // 4. Registrar a eliminação
  gameState.eliminatedCountries.push({
    continent: selectedContinent.name,
    country: eliminatedCountry,
    round: gameState.round
  });
  
  // 5. Atualizar estado do continente
  selectedContinent.eliminated.push(eliminatedCountry);
  selectedContinent.countries.splice(randomCountryIndex, 1);
  
  // Marcar continente como inativo se não houver mais países
  if (selectedContinent.countries.length === 0) {
    selectedContinent.active = false;
  }
  
  // 6. Atualizar contadores e rodada
  gameState.remainingCountries--;
  gameState.round++;
  
  // 7. Salvar estado e atualizar UI
  saveGameState();
  renderUI();
  
  // 8. Animar a eliminação
  animateElimination(selectedContinent.name, eliminatedCountry);
}

// Animação da eliminação
function animateElimination(continent, country) {
  // Efeito visual no botão
  eliminateBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    eliminateBtn.style.transform = 'scale(1)';
  }, 150);
  
  // Destacar informações na tela
  activeContinentEl.style.color = 'var(--danger-color)';
  eliminatedCountryEl.style.color = 'var(--danger-color)';
  
  setTimeout(() => {
    activeContinentEl.style.color = '';
    eliminatedCountryEl.style.color = '';
  }, 1000);
}

// Reinicia o jogo
function resetGame() {
  if (confirm("Tem certeza que deseja reiniciar o jogo? Todo o progresso será perdido.")) {
    localStorage.removeItem('worldEliminationGame');
    initializeGame();
    renderUI();
    
    // Feedback visual
    resetBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      resetBtn.style.transform = 'scale(1)';
    }, 150);
  }
}

// Recalcula os contadores de países
function recalculateCounters() {
  let totalEliminated = 0;
  
  for (const continent in gameState.continents) {
    totalEliminated += gameState.continents[continent].eliminated.length;
  }
  
  gameState.eliminatedCountries = gameState.eliminatedCountries || [];
  gameState.remainingCountries = gameState.totalCountries - totalEliminated;
  gameState.round = totalEliminated + 1;
}

// Atualiza a interface do usuário
function renderUI() {
  // Atualizar contadores
  remainingCountEl.textContent = gameState.remainingCountries;
  eliminatedCountEl.textContent = gameState.totalCountries - gameState.remainingCountries;
  
  // Calcular e atualizar progresso
  const progressPercent = ((gameState.totalCountries - gameState.remainingCountries) / gameState.totalCountries * 100).toFixed(1);
  progressPercentEl.textContent = `${progressPercent}%`;
  globalProgressEl.style.width = `${progressPercent}%`;
  
  // Atualizar informações da última eliminação
  if (gameState.eliminatedCountries.length > 0) {
    const lastElimination = gameState.eliminatedCountries[gameState.eliminatedCountries.length - 1];
    activeContinentEl.textContent = lastElimination.continent;
    eliminatedCountryEl.textContent = lastElimination.country;
    roundNumberEl.textContent = lastElimination.round;
  } else {
    activeContinentEl.textContent = "-";
    eliminatedCountryEl.textContent = "-";
    roundNumberEl.textContent = "1";
  }
  
  // Desabilitar botão se não houver mais países
  eliminateBtn.disabled = gameState.remainingCountries <= 0;
  
  // Renderizar continentes
  renderContinents();
  
  // Renderizar histórico
  renderHistory();
}

// Renderiza a seção de continentes
function renderContinents() {
  continentsGridEl.innerHTML = '';
  
  for (const continent in gameState.continents) {
    const continentData = gameState.continents[continent];
    const totalCountries = world[continent].length;
    const remainingCountries = continentData.countries.length;
    const eliminatedCountries = continentData.eliminated.length;
    
    // Determinar cor da borda com base no progresso
    let borderColor = 'var(--primary-color)';
    if (remainingCountries === 0) {
      borderColor = 'var(--danger-color)';
    } else if (remainingCountries < totalCountries * 0.5) {
      borderColor = 'var(--warning-color)';
    }
    
    const continentCard = document.createElement('div');
    continentCard.className = 'continent-card';
    continentCard.style.borderLeftColor = borderColor;
    
    // Determinar ícone do continente
    const continentIcon = getContinentIcon(continent);
    
    continentCard.innerHTML = `
      <div class="continent-header">
        <div class="continent-name">
          <i class="fas ${continentIcon}"></i>
          ${continent}
        </div>
        <div class="continent-stats">
          ${remainingCountries}/${totalCountries}
        </div>
      </div>
      <div class="progress-container" style="height: 6px; margin: 10px 0;">
        <div class="progress-bar" style="width: ${(eliminatedCountries / totalCountries) * 100}%; height: 100%;"></div>
      </div>
      <div class="countries-list">
        ${renderCountryTags(continentData)}
      </div>
    `;
    
    continentsGridEl.appendChild(continentCard);
  }
}

// Renderiza as tags de países (eliminados e não eliminados)
function renderCountryTags(continentData) {
  const allCountries = [...continentData.countries, ...continentData.eliminated];
  let tagsHTML = '';
  
  // Limitar a exibição para não sobrecarregar a UI
  const displayLimit = 15;
  const displayCountries = allCountries.slice(0, displayLimit);
  
  for (const country of displayCountries) {
    const isEliminated = continentData.eliminated.includes(country);
    const tagClass = isEliminated ? 'country-tag eliminated' : 'country-tag';
    tagsHTML += `<span class="${tagClass}">${country}</span>`;
  }
  
  // Adicionar indicador se houver mais países
  if (allCountries.length > displayLimit) {
    const remainingCount = allCountries.length - displayLimit;
    tagsHTML += `<span class="country-tag">+${remainingCount} mais</span>`;
  }
  
  return tagsHTML;
}

// Renderiza o histórico de eliminações
function renderHistory() {
  historyListEl.innerHTML = '';
  
  if (gameState.eliminatedCountries.length === 0) {
    historyListEl.innerHTML = '<div class="empty-history">Nenhuma eliminação ainda. Clique no botão para começar!</div>';
    return;
  }
  
  // Exibir histórico em ordem reversa (mais recente primeiro)
  const reversedHistory = [...gameState.eliminatedCountries].reverse();
  
  for (const elimination of reversedHistory) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    
    // Determinar ícone do continente
    const continentIcon = getContinentIcon(elimination.continent);
    
    historyItem.innerHTML = `
      <span class="history-round">#${elimination.round}</span>
      <span class="history-continent">
        <i class="fas ${continentIcon}"></i>
        ${elimination.continent}
      </span>
      <span class="history-country">${elimination.country}</span>
      <span class="history-round">${elimination.round}</span>
    `;
    
    historyListEl.appendChild(historyItem);
  }
}

// Retorna um ícone para cada continente
function getContinentIcon(continent) {
  switch(continent) {
    case 'Africa': return 'fa-globe-africa';
    case 'Europe': return 'fa-globe-europe';
    case 'Asia': return 'fa-globe-asia';
    case 'NorthAmerica': return 'fa-globe-americas';
    case 'SouthAmerica': return 'fa-globe-americas';
    case 'Oceania': return 'fa-globe-oceania';
    default: return 'fa-globe';
  }
}

// Gera um número inteiro aleatório entre min e max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // Usando Math.random() para garantir aleatoriedade justa
  return Math.floor(Math.random() * (max - min + 1)) + min;
      }
