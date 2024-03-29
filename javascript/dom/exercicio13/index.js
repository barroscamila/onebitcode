const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = [] // tabuleiro virtual, o qual ajudara a verificar a vitoria de um jogador
let turnPlayer = ''

// funcao para alterar o jogador da vez
function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

// inicializar o jogo (preparar o tabuleiro)
function initializeGame() { 
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(function (element) {
        element.classList.remove('win')
        element.innerText = ''
        element.classList.add('cursor-pointer')
        element.addEventListener('click', handleBoardClick) // adicionar o evento a cada elemento
    })
}

// verificacao se o jogador atual ganhou
function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

// desabilitar uma area para nao ser mais clicada durante o jogo
function disableRegion(element) {
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

// funcao referente a vitoria de um dos jogadores
function handleWin(regions) {
    regions.forEach(function (region){
        document.querySelector('[data-region="' + region + '"]' ).classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + " venceu!"
}

// funcao referente aos cliques no tabuleiro
function handleBoardClick(ev) {
    const span = ev.currentTarget
    const region = span.dataset.region // N.N
    const rowColumnPair = region.split('.') // ["N", "N"]
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }
    console.clear() // limpar o console
    console.table(vBoard) // o console tenta mostrar os dados em formato de tabela, se for possível
    disableRegion(span) // desabilitar uma area que ja foi clicada
    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
        handleWin(winRegions)
    } else if (vBoard.flat().includes('')) {
        // o método flat() concatena todos os subarrays em um único array e o includes('') está verificando se ainda há um espaço em branco
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        updateTitle()
    } else {
        document.querySelector('h2').innerHTML = 'Empate!'
    }
}

document.getElementById('start').addEventListener('click', initializeGame)