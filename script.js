// ** Lista de Países / Itens (FASE 2: PAÍSES)**
// **********************************************
// IMPORTANTE: Você deve atualizar esta lista após cada eliminação!
// Para a Fase 1 (Continentes), apenas troque os nomes.
let paisesAtivos = [
    { text: 'Brasil', fillStyle: '#2ecc71' },
    { text: 'Portugal', fillStyle: '#e74c3c' },
    { text: 'Angola', fillStyle: '#f1c40f' },
    { text: 'Japão', fillStyle: '#3498db' },
    { text: 'Nigéria', fillStyle: '#9b59b6' },
    { text: 'Canadá', fillStyle: '#1abc9c' },
    { text: 'Austrália', fillStyle: '#e67e22' },
    { text: 'Índia', fillStyle: '#c0392b' }
];
// **********************************************

let roleta = null;
let wheelSpinning = false;
const canvas = document.getElementById('canvasRoleta');
const btnGirar = document.getElementById('btnGirar');
const resultado = document.getElementById('resultado');

// Função para iniciar e desenhar a roleta
function iniciarRoleta() {
    // Se a roleta já existe, remove o canvas antigo para desenhar o novo
    if (roleta) {
        roleta.clearCanvas();
    }

    roleta = new Winwheel({
        'numSegments': paisesAtivos.length,     // Número de países
        'outerRadius': 212,                     // Tamanho da roleta
        'canvasId': 'canvasRoleta',             // ID do canvas
        'segments': paisesAtivos,               // Array de países
        'animation': {                          // Configurações da animação
            'type': 'spinToStop',
            'duration': 5,                      // 5 segundos de giro
            'spins': 8,                         // 8 rotações completas
            'callbackFinished': alertResultado   // Função a ser chamada ao parar
        }
    });

    // Configurações de texto padrão
    roleta.textFontSize = 14;
    roleta.textFontWeight = 'bold';
    roleta.textFillStyle = '#2c3e50';

    // Redesenha a roleta com as novas configurações
    roleta.draw();
}

// Função chamada quando a roleta para
function alertResultado(segmento) {
    wheelSpinning = false;
    btnGirar.disabled = false;
    btnGirar.style.backgroundColor = '#2ecc71';

    const paisEliminado = roleta.get</*in-line*/ $WiningSegment$>().text;
    resultado.innerHTML = `❌ **ELIMINADO!** O país que saiu é: ${paisEliminado}!`;

    // **LOGICA DE ATUALIZAÇÃO IMPORTANTE**
    
    // 1. Remove o país eliminado da lista
    paisesAtivos = paisesAtivos.filter(pais => pais.text !== paisEliminado);

    // 2. Desabilita o botão para que não gire de novo até a próxima rodada
    btnGirar.disabled = true;
    btnGirar.style.backgroundColor = '#7f8c8d'; 
    btnGirar.innerHTML = 'AGUARDANDO PRÓXIMA RODADA (Atualize o código!)';


    // Dica: Para o uso no Instagram, após ver o resultado aqui, 
    // você edita o vídeo da roleta gravada para parar neste ponto!

    // Se sobrou apenas 1, declara o vencedor
    if (paisesAtivos.length === 1) {
        resultado.innerHTML += `<br><br>🏆 **PARABÉNS!** O país VENCEDOR é: ${paisesAtivos[0].text}!`;
    }
}

// Lógica de giro ao clicar no botão
btnGirar.addEventListener('click', () => {
    if (wheelSpinning === false) {
        resultado.innerHTML = 'Girando...';
        btnGirar.disabled = true;
        btnGirar.style.backgroundColor = '#f39c12';
        wheelSpinning = true;

        // Inicia o giro
        roleta.startAnimation();
    }
});

// Inicializa a roleta ao carregar a página
iniciarRoleta();
