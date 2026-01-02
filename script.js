// Dados completos dos países
const COUNTRIES = {
    AFRICA: [
        "África do Sul", "Angola", "Argélia", "Benin", "Botsuana", "Burkina Faso", "Burundi", 
        "Cabo Verde", "Camarões", "Chade", "Comores", "Congo", "Costa do Marfim", "Djibouti", 
        "Egito", "Eritreia", "Essuatíni", "Etiópia", "Gabão", "Gâmbia", "Gana", "Guiné", 
        "Guiné Equatorial", "Guiné-Bissau", "Quênia", "Lesoto", "Libéria", "Líbia", 
        "Madagáscar", "Malawi", "Mali", "Marrocos", "Maurícia", "Mauritânia", "Moçambique", 
        "Namíbia", "Níger", "Nigéria", "República Centro-Africana", "República Democrática do Congo", 
        "Ruanda", "São Tomé e Príncipe", "Senegal", "Serra Leoa", "Seychelles", "Somália", 
        "Sudão", "Sudão do Sul", "Tanzânia", "Togo", "Tunísia", "Uganda", "Zâmbia", "Zimbábue"
    ],
    EUROPE: [
        "Albânia", "Alemanha", "Andorra", "Áustria", "Bélgica", "Bielorrússia", "Bósnia e Herzegovina", 
        "Bulgária", "Chipre", "Croácia", "Dinamarca", "Eslováquia", "Eslovênia", "Espanha", "Estônia", 
        "Finlândia", "França", "Grécia", "Hungria", "Irlanda", "Islândia", "Itália", "Kosovo", 
        "Letônia", "Liechtenstein", "Lituânia", "Luxemburgo", "Macedônia do Norte", "Malta", 
        "Moldávia", "Mônaco", "Montenegro", "Noruega", "Países Baixos", "Polônia", "Portugal", 
        "Reino Unido", "República Tcheca", "Romênia", "Rússia", "San Marino", "Sérvia", "Suécia", 
        "Suíça", "Ucrânia", "Vaticano"
    ],
    ASIA: [
        "Afeganistão", "Arábia Saudita", "Armênia", "Azerbaijão", "Bahrein", "Bangladesh", "Brunei", 
        "Butão", "Camboja", "Cazaquistão", "China", "Cingapura", "Coreia do Norte", "Coreia do Sul", 
        "Catar", "Emirados Árabes Unidos", "Filipinas", "Geórgia", "Iêmen", "Índia", "Indonésia", 
        "Irã", "Iraque", "Israel", "Japão", "Jordânia", "Kuwait", "Laos", "Líbano", "Malásia", 
        "Maldivas", "Mianmar", "Mongólia", "Nepal", "Omã", "Paquistão", "Quirguistão", "Sri Lanka", 
        "Síria", "Tadjiquistão", "Tailândia", "Taiwan", "Timor-Leste", "Turcomenistão", "Turquia", 
        "Uzbequistão", "Vietnã"
    ],
    NORTH_AMERICA: [
        "Antígua e Barbuda", "Bahamas", "Barbados", "Belize", "Canadá", "Costa Rica", "Cuba", 
        "Dominica", "El Salvador", "Estados Unidos", "Granada", "Guatemala", "Haiti", "Honduras", 
        "Jamaica", "México", "Nicarágua", "Panamá", "República Dominicana", "Santa Lúcia", 
        "São Cristóvão e Nevis", "São Vicente e Granadinas", "Trinidad e Tobago"
    ],
    SOUTH_AMERICA: [
        "Argentina", "Bolívia", "Brasil", "Chile", "Colômbia", "Equador", "Guiana", "Paraguai", 
        "Peru", "Suriname", "Uruguai", "Venezuela"
    ],
    OCEANIA: [
        "Austrália", "Fiji", "Ilhas Marshall", "Ilhas Salomão", "Kiribati", "Micronésia", "Nauru", 
        "Nova Zelândia", "Palau", "Papua-Nova Guiné", "Samoa", "Tonga", "Tuvalu", "Vanuatu"
    ]
};

// Estado do jogo
let gameState = {
    eliminated: [], // [{continent, country, timestamp, round}]
    remaining: {},
    round: 1,
    totalCountries: 0,
    lastElimination: null
};

// Elementos DOM
const elements = {
    spinBtn: null,
    resetBtn: null,
    wheel: null,
    remainingEl: null,
    eliminatedEl: null,
    roundEl: null,
    resultContinent: null,
    resultCountry: null,
    resultTime: null,
    nextTime: null,
    historyList: null,
    continentsGrid: null
};

// Inicialização
function init() {
    // Inicializar elementos DOM
    elements.spinBtn = document.getElementById('spin-btn');
    elements.resetBtn = document.getElementById('reset-btn');
    elements.wheel = document.getElementById('wheel');
    elements.remainingEl = document.getElementById('remaining');
    elements.eliminatedEl = document.getElementById('eliminated');
    elements.roundEl = document.getElementById('round');
    elements.resultContinent = document.getElementById('result-continent');
    elements.resultCountry = document.getElementById('result-country');
    elements.resultTime = document.getElementById('result-time');
    elements.nextTime = document.getElementById('next-time');
    elements.historyList = document.getElementById('history-list');
    elements.continentsGrid = document.getElementById('continents-grid');
    
    // Carregar estado salvo ou inicializar novo
    loadGameState();
    
    // Configurar event listeners
    elements.spinBtn.addEventListener('click', spinWheel);
    elements.resetBtn.addEventListener('click', resetGame);
    
    // Inicializar interface
    updateUI();
    renderContinents();
    
    console.log('Jogo inicializado! Países totais:', gameState.totalCountries);
}

// Carregar estado do jogo
function loadGameState() {
    const saved = localStorage.getItem('countryEliminationGame');
    
    if (saved) {
        const data = JSON.parse(saved);
        gameState = data;
        
        // Reconstruir objetos de países restantes se necessário
        if (!gameState.remaining || Object.keys(gameState.remaining).length === 0) {
            initializeRemainingCountries();
        }
    } else {
        // Novo jogo
        initializeRemainingCountries();
        gameState.eliminated = [];
        gameState.round = 1;
        gameState.lastElimination = null;
    }
    
    // Calcular total de países
    gameState.totalCountries = Object.values(COUNTRIES).reduce((sum, countries) => sum + countries.length, 0);
}

// Inicializar países restantes
function initializeRemainingCountries() {
    gameState.remaining = {
        AFRICA: [...COUNTRIES.AFRICA],
        EUROPE: [...COUNTRIES.EUROPE],
        ASIA: [...COUNTRIES.ASIA],
        NORTH_AMERICA: [...COUNTRIES.NORTH_AMERICA],
        SOUTH_AMERICA: [...COUNTRIES.SOUTH_AMERICA],
        OCEANIA: [...COUNTRIES.OCEANIA]
    };
}

// Salvar estado do jogo
function saveGameState() {
    localStorage.setItem('countryEliminationGame', JSON.stringify(gameState));
}

// Girar a roda
function spinWheel() {
    if (getTotalRemaining() === 0) {
        alert('Todos os países já foram eliminados! Reinicie o jogo.');
        return;
    }
    
    // Desabilitar botão durante a animação
    elements.spinBtn.disabled = true;
    elements.spinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Girando...';
    
    // Adicionar animação de giro
    elements.wheel.classList.add('spinning');
    
    // Processar eliminação após animação
    setTimeout(() => {
        eliminateCountry();
        elements.wheel.classList.remove('spinning');
        elements.spinBtn.disabled = false;
        elements.spinBtn.innerHTML = '<i class="fas fa-play"></i> GIRAR E ELIMINAR!';
    }, 2000);
}

// Eliminar um país
function eliminateCountry() {
    // Obter continentes com países disponíveis
    const availableContinents = Object.keys(gameState.remaining)
        .filter(continent => gameState.remaining[continent].length > 0);
    
    if (availableContinents.length === 0) {
        alert('Erro: Nenhum continente com países disponíveis!');
        return;
    }
    
    // 1. Sortear continente
    const randomContinentIndex = Math.floor(Math.random() * availableContinents.length);
    const continent = availableContinents[randomContinentIndex];
    
    // 2. Sortear país dentro do continente
    const countries = gameState.remaining[continent];
    const randomCountryIndex = Math.floor(Math.random() * countries.length);
    const country = countries[randomCountryIndex];
    
    // 3. Registrar eliminação
    const elimination = {
        continent: getContinentName(continent),
        country: country,
        timestamp: new Date().toLocaleString('pt-BR'),
        round: gameState.round
    };
    
    gameState.eliminated.unshift(elimination); // Adicionar no início
    gameState.lastElimination = elimination;
    
    // 4. Remover país da lista de disponíveis
    gameState.remaining[continent].splice(randomCountryIndex, 1);
    
    // 5. Incrementar rodada
    gameState.round++;
    
    // 6. Salvar e atualizar
    saveGameState();
    updateUI();
    updateHistory();
    updateContinents();
    
    // 7. Efeito sonoro (opcional)
    playEliminationSound();
}

// Atualizar interface
function updateUI() {
    const totalRemaining = getTotalRemaining();
    const totalEliminated = gameState.totalCountries - totalRemaining;
    
    // Atualizar estatísticas
    elements.remainingEl.textContent = totalRemaining;
    elements.eliminatedEl.textContent = totalEliminated;
    elements.roundEl.textContent = gameState.round;
    
    // Atualizar resultado da última eliminação
    if (gameState.lastElimination) {
        elements.resultContinent.textContent = gameState.lastElimination.continent;
        elements.resultCountry.textContent = gameState.lastElimination.country;
        elements.resultTime.textContent = gameState.lastElimination.timestamp;
        elements.resultCountry.classList.add('highlight');
        setTimeout(() => elements.resultCountry.classList.remove('highlight'), 1000);
    }
    
    // Atualizar timer para próxima eliminação
    updateTimer();
}

// Atualizar histórico
function updateHistory() {
    const historyList = elements.historyList;
    
    if (gameState.eliminated.length === 0) {
        historyList.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-inbox"></i>
                <p>Nenhuma eliminação ainda.<br>Gire a roda para começar!</p>
            </div>
        `;
        return;
    }
    
    let historyHTML = '';
    gameState.eliminated.forEach((elim, index) => {
        historyHTML += `
            <div class="history-item">
                <div class="history-round">#${elim.round}</div>
                <div class="history-info">
                    <div class="history-country">${elim.country}</div>
                    <div class="history-continent">${elim.continent}</div>
                </div>
                <div class="history-time">${elim.timestamp}</div>
            </div>
        `;
    });
    
    historyList.innerHTML = historyHTML;
}

// Atualizar visualização dos continentes
function updateContinents() {
    const grid = elements.continentsGrid;
    let html = '';
    
    for (const [continentKey, countries] of Object.entries(gameState.remaining)) {
        const continentName = getContinentName(continentKey);
        const totalCountries = COUNTRIES[continentKey].length;
        const remainingCountries = countries.length;
        const eliminatedCount = totalCountries - remainingCountries;
        
        // Determinar países para mostrar (máximo 8)
        const countriesToShow = [...countries].slice(0, 8);
        const eliminatedCountries = COUNTRIES[continentKey].filter(c => !countries.includes(c));
        const eliminatedToShow = eliminatedCountries.slice(0, 4);
        
        html += `
            <div class="continent-card">
                <div class="continent-header">
                    <div class="continent-name">
                        <i class="fas ${getContinentIcon(continentKey)}"></i>
                        ${continentName}
                    </div>
                    <div class="continent-count">
                        ${remainingCountries}/${totalCountries}
                    </div>
                </div>
                <div class="countries-container">
                    ${countriesToShow.map(country => 
                        `<span class="country-tag">${country}</span>`
                    ).join('')}
                    ${remainingCountries > 8 ? 
                        `<span class="country-tag">+${remainingCountries - 8}</span>` : ''}
                    ${eliminatedToShow.map(country => 
                        `<span class="country-tag eliminated">${country}</span>`
                    ).join('')}
                    ${eliminatedCount > 4 ? 
                        `<span class="country-tag eliminated">+${eliminatedCount - 4}</span>` : ''}
                </div>
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

// Renderizar continentes inicialmente
function renderContinents() {
    const grid = elements.continentsGrid;
    let html = '';
    
    for (const [continentKey, countries] of Object.entries(COUNTRIES)) {
        const continentName = getContinentName(continentKey);
        const totalCountries = countries.length;
        
        // Mostrar alguns países de exemplo
        const sampleCountries = countries.slice(0, 12);
        
        html += `
            <div class="continent-card">
                <div class="continent-header">
                    <div class="continent-name">
                        <i class="fas ${getContinentIcon(continentKey)}"></i>
                        ${continentName}
                    </div>
                    <div class="continent-count">
                        ${totalCountries} países
                    </div>
                </div>
                <div class="countries-container">
                    ${sampleCountries.map(country => 
                        `<span class="country-tag">${country}</span>`
                    ).join('')}
                    ${totalCountries > 12 ? 
                        `<span class="country-tag">+${totalCountries - 12}</span>` : ''}
                </div>
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

// Atualizar timer
function updateTimer() {
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(nextHour.getHours() + 24);
    nextHour.setMinutes(0, 0, 0);
    
    const diff = nextHour - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    elements.nextTime.textContent = `${hours}h ${minutes}m`;
}

// Reiniciar jogo
function resetGame() {
    if (confirm('Tem certeza que deseja reiniciar o jogo? Todo o progresso será perdido.')) {
        localStorage.removeItem('countryEliminationGame');
        initializeRemainingCountries();
        gameState.eliminated = [];
        gameState.round = 1;
        gameState.lastElimination = null;
        
        saveGameState();
        updateUI();
        updateHistory();
        renderContinents();
        
        // Feedback visual
        elements.resetBtn.classList.add('highlight');
        setTimeout(() => elements.resetBtn.classList.remove('highlight'), 1000);
    }
}

// Funções auxiliares
function getTotalRemaining() {
    return Object.values(gameState.remaining).reduce((sum, countries) => sum + countries.length, 0);
}

function getContinentName(key) {
    const names = {
        AFRICA: 'África',
        EUROPE: 'Europa',
        ASIA: 'Ásia',
        NORTH_AMERICA: 'América do Norte',
        SOUTH_AMERICA: 'América do Sul',
        OCEANIA: 'Oceania'
    };
    return names[key] || key;
}

function getContinentIcon(key) {
    const icons = {
        AFRICA: 'fa-globe-africa',
        EUROPE: 'fa-globe-europe',
        ASIA: 'fa-globe-asia',
        NORTH_AMERICA: 'fa-globe-americas',
        SOUTH_AMERICA: 'fa-globe-americas',
        OCEANIA: 'fa-globe-oceania'
    };
    return icons[key] || 'fa-globe';
}

function playEliminationSound() {
    // Criar som simples sem arquivos externos
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 200;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Áudio não suportado ou bloqueado');
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', init);
