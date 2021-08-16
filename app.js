const playerOneScore = document.querySelector('#player-one-score');
const playerTwoScore = document.querySelector('#player-two-score');

const select = document.querySelector('#select-score');

const playerOneButton = document.querySelector('#btn-1');
const playerTwoButton = document.querySelector('#btn-2');
const resetButton = document.querySelector('#btn-reset');

function pauseButtons() {
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
}

function unpauseButtons() {
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
}

playerOneButton.addEventListener('click', (e) => {
    playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1;
    if (playerOneScore.innerText == select.value) {
        playerOneScore.style.color = "green";
        pauseButtons();
    }
});

playerTwoButton.addEventListener('click', (e) => {
    playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1;
    if (playerTwoScore.innerText == select.value) {
        playerTwoScore.style.color = "green";
        pauseButtons();
    }
});

resetButton.addEventListener('click', (e) => {
    playerOneScore.innerText = '0';
    playerTwoScore.innerText = '0';
    playerOneScore.style.color = 'black';
    playerTwoScore.style.color = 'black';

    unpauseButtons();
})