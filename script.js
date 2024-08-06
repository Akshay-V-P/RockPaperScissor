// display divs
const playerDisplay = document.querySelector(".player-display")
const computeDisplay = document.querySelector(".computer-display")

// image path constants
const scissorRoot = `./img/signs/scissor-sign.png`
const paperRoot = `./img/signs/paper-sign.png`
const rockRoot = `./img/signs/rock-sign.png`

// sign image element
const playerImg = playerDisplay.querySelector("img")
const computerImg = computeDisplay.querySelector("img")

// win or lose display element
const wonMsg = document.querySelector(".won-msg")

// score display element
const computeScoredisplay = document.querySelector(".computer-score")
const playerScoredisplay = document.querySelector(".player-score")

let computerScore = 0, playerScore = 0


// updates ui according to selection
function updateUi(playerOption) {
    // sets default state
    wonMsg.style.display = "none"
    playerImg.src = rockRoot
    computerImg.src = rockRoot
    // calls animation before updating ui 
    signAnimation()
    setTimeout(() => {
    
        switch (playerOption) {
            case 1:
                checkwin("rock");
                break;
            case 2:
                checkwin("paper");
                break;
            default:
                checkwin("scissor");
                break;
        }

    }, 1000);  
}

function checkwin(option) {
    const ROCK = 1;
    const PAPER = 2;
    const SCISSORS = 3;

    // Array to simulate computer choices
    const compSelectionArr = [ROCK, PAPER, SCISSORS];
    // Randomly select computer's choice
    const computerSelection = compSelectionArr[Math.floor(Math.random() * 3)];

    // Determine the outcome
    let result;
    let playerImage, computerImage;

    if (option === "rock") {
        playerImage = rockRoot;
        if (computerSelection === ROCK) {
            computerImage = rockRoot;
            result = "It's a tie";
        } else if (computerSelection === PAPER) {
            computerImage = paperRoot;
            result = "You lose";
            computerScore++
        } else { // SCISSORS
            computerImage = scissorRoot;
            result = "You won";
            playerScore++
        }
    } else if (option === "paper") {
        playerImage = paperRoot;
        if (computerSelection === PAPER) {
            computerImage = paperRoot;
            result = "It's a tie";
        } else if (computerSelection === ROCK) {
            computerImage = rockRoot;
            result = "You won";
            playerScore++
        } else { // SCISSORS
            computerImage = scissorRoot;
            result = "You lose";
            computerScore++
        }
    } else if (option === "scissor") {
        playerImage = scissorRoot;
        if (computerSelection === SCISSORS) {
            computerImage = scissorRoot;
            result = "It's a tie";
        } else if (computerSelection === ROCK) {
            computerImage = rockRoot;
            result = "You lose";
            computerScore++
        } else { // PAPER
            computerImage = paperRoot;
            result = "You won";
            playerScore++
        }
    }

    // Update the UI
    playerImg.src = playerImage;
    computerImg.src = computerImage;
    wonMsg.innerHTML = result;
    wonMsg.style.display = "block";
    computeScoredisplay.innerHTML = computerScore;
    playerScoredisplay.innerHTML = playerScore;
}

// add css animation class to elements 
function signAnimation() {
    playerImg.classList.add("shaking")
    computerImg.classList.add("invertshaking")
    setTimeout(() => {
        playerImg.classList.remove("shaking")
        computerImg.classList.remove("invertshaking")
    }, 600);  
    
}