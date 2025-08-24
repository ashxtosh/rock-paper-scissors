function getComputerChoice() {
    let num = Math.floor(Math.random()*100);
    if(num < 33) {
        return "rock";
    } else if (num < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = (num) => {
    if(num === 1) return "rock";
    else if (num === 2) return "paper";
    else if (num === 3) return "scissors";
    else return "Invalid Input.";
};

let humanScore = 0;
let computerScore = 0;
let humanChoice; let computerChoice;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            alert("Draw.");
        } else if (computerChoice === "paper") {
            alert("You lost this round.");
            computerScore++;

        } else {
            alert("You won this round.");
            humanScore++;
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            alert("You won this round.");
            humanScore++;
        } else if (computerChoice === "paper") {
            alert("Draw.");
        } else {
            alert("You lost this round.");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            alert("You lost this round.");
            computerScore++;
        } else if (computerChoice === "paper") {
            alert("You won this round.");
            humanScore++;
        } else {
            alert("Draw.");
        }
    }
};

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let num = parseInt(prompt("Enter 1 for rock, 2 for paper, 3 for scissors:"));
        humanChoice = getHumanChoice(num);
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        alert(`Your score: ${humanScore} Computer score: ${computerScore}`);
    }
    alert("Thank you for playing!");
}

playGame();