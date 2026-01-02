// Dados completos dos países com códigos de bandeira
const COUNTRIES = {
    AFRICA: [
        {name: "África do Sul", code: "za"}, {name: "Angola", code: "ao"}, {name: "Argélia", code: "dz"},
        {name: "Benin", code: "bj"}, {name: "Botsuana", code: "bw"}, {name: "Burkina Faso", code: "bf"},
        {name: "Burundi", code: "bi"}, {name: "Cabo Verde", code: "cv"}, {name: "Camarões", code: "cm"},
        {name: "Chade", code: "td"}, {name: "Comores", code: "km"}, {name: "Congo", code: "cg"},
        {name: "Costa do Marfim", code: "ci"}, {name: "Djibouti", code: "dj"}, {name: "Egito", code: "eg"},
        {name: "Eritreia", code: "er"}, {name: "Essuatíni", code: "sz"}, {name: "Etiópia", code: "et"},
        {name: "Gabão", code: "ga"}, {name: "Gâmbia", code: "gm"}, {name: "Gana", code: "gh"},
        {name: "Guiné", code: "gn"}, {name: "Guiné Equatorial", code: "gq"}, {name: "Guiné-Bissau", code: "gw"},
        {name: "Quênia", code: "ke"}, {name: "Lesoto", code: "ls"}, {name: "Libéria", code: "lr"},
        {name: "Líbia", code: "ly"}, {name: "Madagáscar", code: "mg"}, {name: "Malawi", code: "mw"},
        {name: "Mali", code: "ml"}, {name: "Marrocos", code: "ma"}, {name: "Maurícia", code: "mu"},
        {name: "Mauritânia", code: "mr"}, {name: "Moçambique", code: "mz"}, {name: "Namíbia", code: "na"},
        {name: "Níger", code: "ne"}, {name: "Nigéria", code: "ng"}, {name: "República Centro-Africana", code: "cf"},
        {name: "República Democrática do Congo", code: "cd"}, {name: "Ruanda", code: "rw"},
        {name: "São Tomé e Príncipe", code: "st"}, {name: "Senegal", code: "sn"}, {name: "Serra Leoa", code: "sl"},
        {name: "Seychelles", code: "sc"}, {name: "Somália", code: "so"}, {name: "Sudão", code: "sd"},
        {name: "Sudão do Sul", code: "ss"}, {name: "Tanzânia", code: "tz"}, {name: "Togo", code: "tg"},
        {name: "Tunísia", code: "tn"}, {name: "Uganda", code: "ug"}, {name: "Zâmbia", code: "zm"},
        {name: "Zimbábue", code: "zw"}
    ],
    EUROPE: [
        {name: "Albânia", code: "al"}, {name: "Alemanha", code: "de"}, {name: "Andorra", code: "ad"},
        {name: "Áustria", code: "at"}, {name: "Bélgica", code: "be"}, {name: "Bielorrússia", code: "by"},
        {name: "Bósnia e Herzegovina", code: "ba"}, {name: "Bulgária", code: "bg"}, {name: "Chipre", code: "cy"},
        {name: "Croácia", code: "hr"}, {name: "Dinamarca", code: "dk"}, {name: "Eslováquia", code: "sk"},
        {name: "Eslovênia", code: "si"}, {name: "Espanha", code: "es"}, {name: "Estônia", code: "ee"},
        {name: "Finlândia", code: "fi"}, {name: "França", code: "fr"}, {name: "Grécia", code: "gr"},
        {name: "Hungria", code: "hu"}, {name: "Irlanda", code: "ie"}, {name: "Islândia", code: "is"},
        {name: "Itália", code: "it"}, {name: "Kosovo", code: "xk"}, {name: "Letônia", code: "lv"},
        {name: "Liechtenstein", code: "li"}, {name: "Lituânia", code: "lt"}, {name: "Luxemburgo", code: "lu"},
        {name: "Macedônia do Norte", code: "mk"}, {name: "Malta", code: "mt"}, {name: "Moldávia", code: "md"},
        {name: "Mônaco", code: "mc"}, {name: "Montenegro", code: "me"}, {name: "Noruega", code: "no"},
        {name: "Países Baixos", code: "nl"}, {name: "Polônia", code: "pl"}, {name: "Portugal", code: "pt"},
        {name: "Reino Unido", code: "gb"}, {name: "República Tcheca", code: "cz"}, {name: "Romênia", code: "ro"},
        {name: "Rússia", code: "ru"}, {name: "San Marino", code: "sm"}, {name: "Sérvia", code: "rs"},
        {name: "Suécia", code: "se"}, {name: "Suíça", code: "ch"}, {name: "Ucrânia", code: "ua"},
        {name: "Vaticano", code: "va"}
    ],
    ASIA: [
        {name: "Afeganistão", code: "af"}, {name: "Arábia Saudita", code: "sa"}, {name: "Armênia", code: "am"},
        {name: "Azerbaijão", code: "az"}, {name: "Bahrein", code: "bh"}, {name: "Bangladesh", code: "bd"},
        {name: "Brunei", code: "bn"}, {name: "Butão", code: "bt"}, {name: "Camboja", code: "kh"},
        {name: "Cazaquistão", code: "kz"}, {name: "China", code: "cn"}, {name: "Cingapura", code: "sg"},
        {name: "Coreia do Norte", code: "kp"}, {name: "Coreia do Sul", code: "kr"}, {name: "Catar", code: "qa"},
        {name: "Emirados Árabes Unidos", code: "ae"}, {name: "Filipinas", code: "ph"}, {name: "Geórgia", code: "ge"},
        {name: "Iêmen", code: "ye"}, {name: "Índia", code: "in"}, {name: "Indonésia", code: "id"},
        {name: "Irã", code: "ir"}, {name: "Iraque", code: "iq"}, {name: "Israel", code: "il"},
        {name: "Japão", code: "jp"}, {name: "Jordânia", code: "jo"}, {name: "Kuwait", code: "kw"},
        {name: "Laos", code: "la"}, {name: "Líbano", code: "lb"}, {name: "Malásia", code: "my"},
        {name: "Maldivas", code: "mv"}, {name: "Mianmar", code: "mm"}, {name: "Mongólia", code: "mn"},
        {name: "Nepal", code: "np"}, {name: "Omã", code: "om"}, {name: "Paquistão", code: "pk"},
        {name: "Quirguistão", code: "kg"}, {name: "Sri Lanka", code: "lk"}, {name: "Síria", code: "sy"},
        {name: "Tadjiquistão", code: "tj"}, {name: "Tailândia", code: "th"}, {name: "Taiwan", code: "tw"},
        {name: "Timor-Leste", code: "tl"}, {name: "Turcomenistão", code: "tm"}, {name: "Turquia", code: "tr"},
        {name: "Uzbequistão", code: "uz"}, {name: "Vietnã", code: "vn"}
    ],
    NORTH_AMERICA: [
        {name: "Antígua e Barbuda", code: "ag"}, {name: "Bahamas", code: "bs"}, {name: "Barbados", code: "bb"},
        {name: "Belize", code: "bz"}, {name: "Canadá", code: "ca"}, {name: "Costa Rica", code: "cr"},
        {name: "Cuba", code: "cu"}, {name: "Dominica", code: "dm"}, {name: "El Salvador", code: "sv"},
        {name: "Estados Unidos", code: "us"}, {name: "Granada", code: "gd"}, {name: "Guatemala", code: "gt"},
        {name: "Haiti", code: "ht"}, {name: "Honduras", code: "hn"}, {name: "Jamaica", code: "jm"},
        {name: "México", code: "mx"}, {name: "Nicarágua", code: "ni"}, {name: "Panamá", code: "pa"},
        {name: "República Dominicana", code: "do"}, {name: "Santa Lúcia", code: "lc"},
        {name: "São Cristóvão e Nevis", code: "kn"}, {name: "São Vicente e Granadinas", code: "vc"},
        {name: "Trinidad e Tobago", code: "tt"}
    ],
    SOUTH_AMERICA: [
        {name: "Argentina", code: "ar"}, {name: "Bolívia", code: "bo"}, {name: "Brasil", code: "br"},
        {name: "Chile", code: "cl"}, {name: "Colômbia", code: "co"}, {name: "Equador", code: "ec"},
        {name: "Guiana", code: "gy"}, {name: "Paraguai", code: "py"}, {name: "Peru", code: "pe"},
        {name: "Suriname", code: "sr"}, {name: "Uruguai", code: "uy"}, {name: "Venezuela", code: "ve"}
    ],
    OCEANIA: [
        {name: "Austrália", code: "au"}, {name: "Fiji", code: "fj"}, {name: "Ilhas Marshall", code: "mh"},
        {name: "Ilhas Salomão", code: "sb"}, {name: "Kiribati", code: "ki"}, {name: "Micronésia", code: "fm"},
        {name: "Nauru", code: "nr"}, {name: "Nova Zelândia", code: "nz"}, {name: "Palau", code: "pw"},
        {name: "Papua-Nova Guiné", code: "pg"}, {name: "Samoa", code: "ws"}, {name: "Tonga", code: "to"},
        {name: "Tuvalu", code: "tv"}, {name: "Vanuatu", code: "vu"}
    ]
};

// Estado do jogo
let gameState = {
    eliminated: [], // [{continent, country, code, timestamp, round}]
    remaining: {},
    round: 1,
    totalCountries: 0,
    lastElimination: null,
    soundEnabled: true,
    spinning: false
};

// Elementos DOM
const elements = {
    spinBtn: null,
    resetBtn: null,
    soundBtn: null,
    exportBtn: null,
    wheel: null,
    wheelDisplay: null,
    currentFlag: null,
    currentCountry: null,
    remainingEl: null,
    eliminatedEl: null,
    roundEl: null,
    resultContinent: null,
    resultCountry: null,
    resultFlag: null,
    resultTime: null,
    nextTime: null,
    historyList: null,
    top10List: null,
    continentsGrid: null,
    spinSound: null,
    clickSound: null,
    eliminateSound: null
};

// Variáveis de controle da animação
let spinInterval;
let spinStartTime;
let spinDuration = 6000; // 6 segundos
let currentPhase = 'continents'; // 'continents' ou 'countries'
let selectedContinent = null;
let allCountriesList = [];

// Nomes dos continentes
const CONTINENT_NAMES = {
    AFRICA: 'África',
    EUROPE: 'Europa',
    ASIA: 'Ásia',
    NORTH_AMERICA: 'América do Norte',
    SOUTH_AMERICA: 'América do Sul',
    OCEANIA: 'Oceania'
};

// Ícones dos continentes
const CONTINENT_ICONS = {
    AFRICA: 'fa-globe-africa',
    EUROPE: 'fa-globe-europe',
    ASIA: 'fa-globe-asia',
    NORTH_AMERICA: 'fa-globe-americas',
    SOUTH_AMERICA: 'fa-globe-americas',
    OCEANIA: 'fa-globe-oceania'
};

// Inicialização
function init() {
    // Inicializar elementos DOM
    elements.spinBtn = document.getElementById('spin-btn');
    elements.resetBtn = document.getElementById('reset-btn');
    elements.soundBtn = document.getElementById('sound-btn');
    elements.exportBtn = document.getElementById('export-btn');
    elements.wheel = document.getElementById('wheel');
    elements.wheelDisplay = document.getElementById('wheel-display');
    elements.currentFlag = document.getElementById('current-flag');
    elements.currentCountry = document.getElementById('current-country');
    elements.remainingEl = document.getElementById('remaining');
    elements.eliminatedEl = document.getElementById('eliminated');
    elements.roundEl = document.getElementById('round');
    elements.resultContinent = document.getElementById('result-continent');
    elements.resultCountry = document.getElementById('result-country').querySelector('.country-name');
    elements.resultFlag = document.getElementById('result-flag');
    elements.resultTime = document.getElementById('result-time');
    elements.nextTime = document.getElementById('next-time');
    elements.historyList = document.getElementById('history-list');
    elements.top10List = document.getElementById('top10-list');
    elements.continentsGrid = document.getElementById('continents-grid');
    
    // Elementos de áudio
    elements.spinSound = document.getElementById('spin-sound');
    elements.clickSound = document.getElementById('click-sound');
    elements.eliminateSound = document.getElementById('eliminate-sound');
    
    // Criar lista completa de países para animação
    allCountriesList = [];
    for (const continent in COUNTRIES) {
        allCountriesList.push(...COUNTRIES[continent]);
    }
    
    // Carregar estado salvo ou inicializar novo
    loadGameState();
    
    // Configurar event listeners
    elements.spinBtn.addEventListener('click', spinWheel);
    elements.resetBtn.addEventListener('click', resetGame);
    elements.soundBtn.addEventListener('click', toggleSound);
    elements.exportBtn.addEventListener('click', exportHistory);
    
    // Configurar filtros do histórico
    document.querySelectorAll('.history-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.history-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateHistory(this.dataset.filter);
        });
    });
    
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
        gameState = {
            ...data,
            soundEnabled: data.soundEnabled !== undefined ? data.soundEnabled : true,
            spinning: false
        };
        
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
        gameState.soundEnabled = true;
        gameState.spinning = false;
    }
    
    // Calcular total de países
    gameState.totalCountries = Object.values(COUNTRIES).reduce((sum, countries) => sum + countries.length, 0);
    
    // Atualizar botão de som
    updateSoundButton();
}

// Inicializar países restantes
function initializeRemainingCountries() {
    gameState.remaining = {};
    for (const continent in COUNTRIES) {
        gameState.remaining[continent] = [...COUNTRIES[continent]];
    }
}

// Salvar estado do jogo
function saveGameState() {
    localStorage.setItem('countryEliminationGame', JSON.stringify(gameState));
}

// Girar a roda
function spinWheel() {
    if (gameState.spinning) return;
    if (getTotalRemaining() === 0) {
        alert('Todos os países já foram eliminados! Reinicie o jogo.');
        return;
    }
    
    // Iniciar estado de giro
    gameState.spinning = true;
    elements.spinBtn.disabled = true;
    elements.spinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Girando...';
    
    // Tocar som da roleta
    if (gameState.soundEnabled) {
        playSpinSound();
    }
    
    // Resetar variáveis da animação
    currentPhase = 'continents';
    selectedContinent = null;
    spinStartTime = Date.now();
    
    // Adicionar animação de giro à roda
    elements.wheel.style.animation = 'none';
    void elements.wheel.offsetWidth; // Trigger reflow
    elements.wheel.style.animation = `spin ${spinDuration/1000}s cubic-bezier(0.2, 0.8, 0.3, 1) forwards`;
    
    // Iniciar animação da bandeira
    startFlagAnimation();
    
    // Processar resultado após 6 segundos
    setTimeout(() => {
        finishSpin();
    }, spinDuration);
}

// Iniciar animação da bandeira
function startFlagAnimation() {
    let elapsedTime = 0;
    const updateInterval = 100; // Atualizar a cada 100ms
    
    spinInterval = setInterval(() => {
        elapsedTime = Date.now() - spinStartTime;
        
        if (elapsedTime >= spinDuration) {
            clearInterval(spinInterval);
            return;
        }
        
        // Primeiros 3 segundos: mostrar continentes
        if (elapsedTime < 3000) {
            if (currentPhase !== 'continents') {
                currentPhase = 'continents';
            }
            showRandomContinent();
        }
        // Últimos 3 segundos: mostrar países do continente sorteado
        else {
            if (currentPhase !== 'countries') {
                currentPhase = 'countries';
                // Sortear continente quando entrar na fase de países
                selectedContinent = selectRandomContinent();
            }
            showRandomCountry(selectedContinent);
        }
    }, updateInterval);
}

// Mostrar continente aleatório
function showRandomContinent() {
    const continents = Object.keys(CONTINENT_NAMES);
    const randomContinent = continents[Math.floor(Math.random() * continents.length)];
    
    elements.currentFlag.className = `fas ${CONTINENT_ICONS[randomContinent]}`;
    elements.currentFlag.style.color = getContinentColor(randomContinent);
    elements.currentCountry.textContent = CONTINENT_NAMES[randomContinent];
}

// Mostrar país aleatório
function showRandomCountry(continent) {
    if (!continent || !gameState.remaining[continent] || gameState.remaining[continent].length === 0) {
        // Se não houver países no continente, mostrar um aleatório de qualquer continente
        const allContinents = Object.keys(gameState.remaining).filter(c => gameState.remaining[c].length > 0);
        if (allContinents.length === 0) return;
        
        continent = allContinents[Math.floor(Math.random() * allContinents.length)];
    }
    
    const countries = gameState.remaining[continent];
    if (countries.length === 0) return;
    
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    
    elements.currentFlag.className = `fi fi-${randomCountry.code}`;
    elements.currentCountry.textContent = randomCountry.name;
    
    // Adicionar efeito de pulso a cada atualização
    elements.currentFlag.classList.add('flag-spin');
    setTimeout(() => {
        elements.currentFlag.classList.remove('flag-spin');
    }, 500);
}

// Selecionar continente aleatório
function selectRandomContinent() {
    const availableContinents = Object.keys(gameState.remaining)
        .filter(continent => gameState.remaining[continent].length > 0);
    
    if (availableContinents.length === 0) return null;
    
    return availableContinents[Math.floor(Math.random() * availableContinents.length)];
}

// Finalizar giro
function finishSpin() {
    clearInterval(spinInterval);
    
    // Parar som da roleta
    if (gameState.soundEnabled) {
        elements.spinSound.pause();
        elements.spinSound.currentTime = 0;
    }
    
    // Selecionar continente final se ainda não selecionado
    if (!selectedContinent) {
        selectedContinent = selectRandomContinent();
    }
    
    // Selecionar país final
    const countries = gameState.remaining[selectedContinent];
    const randomCountryIndex = Math.floor(Math.random() * countries.length);
    const eliminatedCountry = countries[randomCountryIndex];
    
    // Mostrar resultado final na roda
    elements.currentFlag.className = `fi fi-${eliminatedCountry.code}`;
    elements.currentCountry.textContent = eliminatedCountry.name;
    
    // Adicionar efeito de destaque
    elements.currentFlag.classList.add('pulse');
    
    // Processar eliminação após pequeno delay
    setTimeout(() => {
        eliminateCountry(selectedContinent, eliminatedCountry, randomCountryIndex);
        gameState.spinning = false;
        elements.spinBtn.disabled = false;
        elements.spinBtn.innerHTML = '<i class="fas fa-play"></i> GIRAR E ELIMINAR!';
        
        // Tocar som de eliminação
        if (gameState.soundEnabled) {
            playEliminateSound();
        }
    }, 1000);
}

// Eliminar um país
function eliminateCountry(continent, country, index) {
    // Registrar eliminação
    const elimination = {
        continent: CONTINENT_NAMES[continent],
        country: country.name,
        code: country.code,
        timestamp: new Date().toLocaleString('pt-BR'),
        round: gameState.round
    };
    
    gameState.eliminated.unshift(elimination); // Adicionar no início
    gameState.lastElimination = elimination;
    
    // Remover país da lista de disponíveis
    gameState.remaining[continent].splice(index, 1);
    
    // Incrementar rodada
    gameState.round++;
    
    // Salvar e atualizar
    saveGameState();
    updateUI();
    updateTop10();
    updateHistory();
    updateContinents();
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
        elements.resultFlag.className = `fi fi-${gameState.lastElimination.code}`;
        elements.resultTime.textContent = gameState.lastElimination.timestamp;
        
        // Adicionar efeito de destaque
        elements.resultCountry.parentElement.classList.add('highlight');
        setTimeout(() => {
            elements.resultCountry.parentElement.classList.remove('highlight');
        }, 1000);
    }
    
    // Atualizar timer para próxima eliminação
    updateTimer();
}

// Atualizar Top 10
function updateTop10() {
    const top10List = elements.top10List;
    
    // Últimos 10 eliminados (os que "sobreviveram" mais tempo)
    // Na nossa lógica, quanto maior o número da rodada, mais tempo sobreviveu
    const lastEliminated = [...gameState.eliminated]
        .sort((a, b) => b.round - a.round) // Ordenar por rodada (maior primeiro)
        .slice(0, 10);
    
    if (lastEliminated.length === 0) {
        top10List.innerHTML = `
            <div class="top10-empty">
                <i class="fas fa-crown"></i>
                <p>O Top 10 aparecerá aqui quando houver eliminações suficientes!</p>
            </div>
        `;
        return;
    }
    
    let top10HTML = '';
    lastEliminated.forEach((elim, index) => {
        const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';
        
        top10HTML += `
            <div class="top10-item">
                <div class="top10-rank ${rankClass}">${index + 1}</div>
                <div class="top10-info">
                    <div class="top10-country">
                        <span class="fi fi-${elim.code}"></span>
                        ${elim.country}
                    </div>
                    <div class="top10-details">
                        Eliminado na Rodada #${elim.round} • ${elim.continent}
                    </div>
                </div>
            </div>
        `;
    });
    
    top10List.innerHTML = top10HTML;
}

// Atualizar histórico
function updateHistory(filter = 'all') {
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
    
    let filteredHistory = [...gameState.eliminated];
    
    // Aplicar filtro
    if (filter !== 'all') {
        const now = new Date();
        filteredHistory = filteredHistory.filter(elim => {
            const elimDate = new Date(elim.timestamp);
            
            if (filter === 'today') {
                return elimDate.toDateString() === now.toDateString();
            } else if (filter === 'week') {
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                return elimDate >= weekAgo;
            }
            return true;
        });
    }
    
    if (filteredHistory.length === 0) {
        historyList.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-filter"></i>
                <p>Nenhuma eliminação encontrada com este filtro.</p>
            </div>
        `;
        return;
    }
    
    let historyHTML = '';
    filteredHistory.forEach((elim, index) => {
        historyHTML += `
            <div class="history-item">
                <div class="history-round">#${elim.round}</div>
                <div class="history-flag">
                    <span class="fi fi-${elim.code}"></span>
                </div>
                <div class="history-info">
                    <div class="history-country">
                        ${elim.country}
                    </div>
                    <div class="history-continent">
                        ${elim.continent}
                    </div>
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
        const continentName = CONTINENT_NAMES[continentKey];
        const totalCountries = COUNTRIES[continentKey].length;
        const remainingCountries = countries.length;
        const eliminatedCount = totalCountries - remainingCountries;
        
        // Determinar países para mostrar (máximo 8)
        const countriesToShow = countries.slice(0, 8);
        const eliminatedCountries = COUNTRIES[continentKey].filter(c => 
            !countries.some(rc => rc.name === c.name)
        );
        const eliminatedToShow = eliminatedCountries.slice(0, 4);
        
        html += `
            <div class="continent-card">
                <div class="continent-header">
                    <div class="continent-name">
                        <i class="fas ${CONTINENT_ICONS[continentKey]}"></i>
                        ${continentName}
                    </div>
                    <div class="continent-count">
                        ${remainingCountries}/${totalCountries}
                    </div>
                </div>
                <div class="countries-container">
                    ${countriesToShow.map(country => 
                        `<span class="country-tag">
                            <span class="fi fi-${country.code}"></span>
                            ${country.name}
                        </span>`
                    ).join('')}
                    ${remainingCountries > 8 ? 
                        `<span class="country-tag">+${remainingCountries - 8}</span>` : ''}
                    ${eliminatedToShow.map(country => 
                        `<span class="country-tag eliminated">
                            <span class="fi fi-${country.code}"></span>
                            ${country.name}
                        </span>`
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
        const continentName = CONTINENT_NAMES[continentKey];
        const totalCountries = countries.length;
        
        // Mostrar alguns países de exemplo
        const sampleCountries = countries.slice(0, 12);
        
        html += `
            <div class="continent-card">
                <div class="continent-header">
                    <div class="continent-name">
                        <i class="fas ${CONTINENT_ICONS[continentKey]}"></i>
                        ${continentName}
                    </div>
                    <div class="continent-count">
                        ${totalCountries} países
                    </div>
                </div>
                <div class="countries-container">
                    ${sampleCountries.map(country => 
                        `<span class="country-tag">
                            <span class="fi fi-${country.code}"></span>
                            ${country.name}
                        </span>`
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

// Tocar som da roleta
function playSpinSound() {
    elements.spinSound.currentTime = 0;
    elements.spinSound.play().catch(e => console.log('Áudio bloqueado:', e));
}

// Tocar som de eliminação
function playEliminateSound() {
    elements.eliminateSound.currentTime = 0;
    elements.eliminateSound.play().catch(e => console.log('Áudio bloqueado:', e));
}

// Tocar som de clique
function playClickSound() {
    elements.clickSound.currentTime = 0;
    elements.clickSound.play().catch(e => console.log('Áudio bloqueado:', e));
}

// Alternar som
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    saveGameState();
    updateSoundButton();
    
    if (gameState.soundEnabled) {
        playClickSound();
    }
}

// Atualizar botão de som
function updateSoundButton() {
    if (gameState.soundEnabled) {
        elements.soundBtn.innerHTML = '<i class="fas fa-volume-up"></i> Som';
        elements.soundBtn.classList.add('active');
    } else {
        elements.soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Som';
        elements.soundBtn.classList.remove('active');
    }
}

// Exportar histórico
function exportHistory() {
    if (gameState.eliminated.length === 0) {
        alert('Nenhum histórico para exportar!');
        return;
    }
    
    let csv = 'Rodada,País,Código,Continente,Data/Hora\n';
    gameState.eliminated.forEach(elim => {
        csv += `${elim.round},"${elim.country}","${elim.code}","${elim.continent}","${elim.timestamp}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `historico-eliminacoes-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Reiniciar jogo
function resetGame() {
    if (gameState.spinning) {
        alert('Aguarde a roleta parar antes de reiniciar!');
        return;
    }
    
    if (confirm('Tem certeza que deseja reiniciar o jogo? Todo o progresso será perdido.')) {
        // Tocar som de clique
        if (gameState.soundEnabled) {
            playClickSound();
        }
        
        localStorage.removeItem('countryEliminationGame');
        initializeRemainingCountries();
        gameState.eliminated = [];
        gameState.round = 1;
        gameState.lastElimination = null;
        gameState.spinning = false;
        
        // Resetar display da roda
        elements.currentFlag.className = 'fas fa-globe-americas';
        elements.currentFlag.style.color = '';
        elements.currentCountry.textContent = 'Prepare-se...';
        
        // Resetar animação da roda
        elements.wheel.style.animation = 'wheelIdle 30s linear infinite';
        
        saveGameState();
        updateUI();
        updateTop10();
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

function getContinentColor(continent) {
    const colors = {
        AFRICA: '#FF6B6B',
        EUROPE: '#4ECDC4',
        ASIA: '#FFD166',
        NORTH_AMERICA: '#06D6A0',
        SOUTH_AMERICA: '#118AB2',
        OCEANIA: '#EF476F'
    };
    return colors[continent] || '#FFFFFF';
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', init);
