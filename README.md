# Eliminação Mundial

Um sistema interativo e 100% aleatório de eliminação de países, onde todos os países têm exatamente a mesma chance de eliminação.

## Visão Geral

Este projeto simula um processo justo e aleatório de eliminação mundial de países, organizado por continentes. Primeiro, o sistema sorteia um continente ativo (que ainda tenha países disponíveis), e em seguida sorteia aleatoriamente um país dentro desse continente para ser eliminado.

## Características

- **100% Aleatório**: Todos os países têm exatamente a mesma probabilidade de eliminação
- **Transparente**: Código aberto e comentado para verificação
- **Persistente**: Progresso salvo automaticamente no navegador
- **Responsivo**: Funciona em dispositivos móveis e desktop
- **Interativo**: Interface amigável com feedback visual

## Como Funciona

1. O sistema começa com todos os países do mundo (aproximadamente 195 países)
2. A cada rodada:
   - Identifica continentes que ainda possuem países não eliminados
   - Sorteia aleatoriamente um continente ativo
   - Sorteia aleatoriamente um país dentro do continente selecionado
   - Marca o país como eliminado
3. O processo continua até que todos os países sejam eliminados

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Flexbox/Grid)
- JavaScript Vanilla (sem frameworks)
- LocalStorage para persistência de dados
- Font Awesome para ícones
- Google Fonts (Inter)

## Estrutura de Arquivos
