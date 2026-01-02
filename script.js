// ** CONFIGURAÇÃO DA FASE 1: CONTINENTES **
// IMPORTANTE: Para a próxima rodada, você deve remover o continente eliminado desta lista
// e fazer o upload do arquivo atualizado no GitHub.
let itensAtivos = [
    { text: 'África', fillStyle: '#2ecc71' },     // Verde
    { text: 'Europa', fillStyle: '#e74c3c' },     // Vermelho
    { text: 'Ásia', fillStyle: '#f1c40f' },       // Amarelo
    { text: 'América N.', fillStyle: '#3498db' }, // Azul
    { text: 'América S.', fillStyle: '#9b59b6' }, // Roxo
    { text: 'Oceania', fillStyle: '#e67e22' }     // Laranja
];

let roleta = null;
let wheelSpinning = false;
const btnGirar = document.getElementById('btnGirar');
const resultado = document.getElementById('resultado');

// 1. Função que inicializa e desenha a roleta
function iniciarRoleta() {
    
    roleta = new Winwheel({
        'numSegments': itensAtivos.length,
        'outerRadius': 170, // Tamanho da roleta
        'canvasId': 'canvasRoleta',
        'segments': itensAtivos,
        'animation': {
            'type': 'spinToStop',
            'duration': 5, // Duração do giro em segundos
            'spins': 8,    // Número de rotações completas
            'callbackFinished': alertResultado // Função chamada ao parar
        }
    });

    // Estilos para o texto
    roleta.textFontSize = 14;
    roleta.textFontWeight = 'bold';
    roleta.textFillStyle = '#2c3e50';
    roleta.draw();
}

// 2. Função chamada quando a roleta para
function alertResultado(segmento) {
    wheelSpinning = false;
    btnGirar.disabled = false;
    btnGirar.style.backgroundColor = '#2ecc71'; 

    // Pega o texto do item sorteado
    const itemEliminado = segmento.text;
    
    resultado.innerHTML = `❌ **ELIMINADO!** Adeus: ${itemEliminado}!`;
    resultado.style.color = "red";

    // Ocultar o botão para que o usuário não clique de novo
    btnGirar.style.display = "none";
    
    // Para preparar para a próxima rodada, o desenvolvedor (você)
    // deve editar a lista 'itensAtivos' no código fonte do GitHub
    // e remover o item eliminado.
}

// 3. Lógica de giro ao clicar no botão
btnGirar.addEventListener('click', () => {
    if (wheelSpinning === false) {
        resultado.innerHTML = 'Girando...';
        resultado.style.color = "#e67e22";
        
        btnGirar.disabled = true;
        btnGirar.style.backgroundColor = '#95a5a6'; // Cinza
        
        wheelSpinning = true;
        roleta.startAnimation(); // Inicia o giro
    }
});

// 4. Inicializa a roleta ao carregar a página
iniciarRoleta();
