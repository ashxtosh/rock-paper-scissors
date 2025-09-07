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
            return "Draw.";
        } else if (computerChoice === "paper") {
            computerScore++;
            return "You lost this round.";
        } else {
            humanScore++;
            return "You won this round.";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            humanScore++;
            return "You won this round.";
        } else if (computerChoice === "paper") {
            return "Draw.";
        } else {
            computerScore++;
            return "You lost this round.";
        }
    } else {
        if (computerChoice === "rock") {
            computerScore++;
            return "You lost this round.";
        } else if (computerChoice === "paper") {
            humanScore++;
            return "You won this round.";
        } else {
            return "Draw.";
        }
    }
}


const btns = document.querySelectorAll("button");
const resultsDiv = document.querySelector("span");

const scoreDisplay = document.createElement("p");
resultsDiv.appendChild(scoreDisplay);

btns.forEach(button => {
    button.addEventListener('click', function(){
        const humanChoice = button.id; // "rock", "paper", or "scissors"
        const computerChoice = getComputerChoice();

        const roundLine = document.createElement("p");

        roundLine.textContent = playRound(humanChoice, computerChoice);

        resultsDiv.appendChild(roundLine);

        scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

        if(humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? "You won the game! 🎉" : "Computer won the game! 🤖";
            const winnerMsg = document.createElement("h3");
            winnerMsg.textContent = winner;
            resultsDiv.appendChild(winnerMsg);

            btns.forEach(b => b.disabled = true);
        }

    })
})




// function playGame() {
//     humanScore = 0;
//     computerScore = 0;
//     for(let i = 0; i < 5; i++) {
//         let num = parseInt(prompt("Enter 1 for rock, 2 for paper, 3 for scissors:"));
//         humanChoice = getHumanChoice(num);
//         computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//         alert(`Your score: ${humanScore} Computer score: ${computerScore}`);
//     }
//     alert("Thank you for playing!");
// }
