const result = document.querySelector('.result');
const humanScoreSpan = document.querySelector('.your-score span');
const machineScoreSpan = document.querySelector('.machine-score span');

let humanScore = 0;
let machineScore = 0;

const PLAY_GAME = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = [PLAY_GAME.ROCK, PLAY_GAME.PAPER, PLAY_GAME.SCISSORS];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.textContent = 'Empate!'
    } else if (human === PLAY_GAME.ROCK && machine === PLAY_GAME.SCISSORS || human === PLAY_GAME.PAPER && machine === PLAY_GAME.ROCK || human === PLAY_GAME.SCISSORS && machine === PLAY_GAME.PAPER) {
        result.textContent = 'Você ganhou!'
        humanScore++
    } else {
        result.textContent = 'Você perdeu!'
        machineScore++
    }

    humanScoreSpan.textContent = humanScore
    machineScoreSpan.textContent = machineScore
}