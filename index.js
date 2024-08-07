function getComputerChoice() {
    const randomNumber = Math.random()

    if (randomNumber < 1/3) {
        return "Rock";
    }
    else if (randomNumber < 2/3) {
         return "Paper";
    }
    else {
        return "Scissors";
    }
}

function humanChoice() {
    while (true) {
        let input = prompt("What is your selection? (Rock/Paper/Scissors): ", '');
        input = input.toLowerCase();

        if (input === "rock" || input === "paper" || input === "scissors") {
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
        console.log("Please enter a valid input");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
        let result;
        if (humanChoice == computerChoice) {
            return "It's a tie";
        } 
        else if ((humanChoice === "rock" && computerChoice === "scissors") || 
             (humanChoice === "paper" && computerChoice === "rock") || 
             (humanChoice === "scissors" && computerChoice === "paper")) {
            result = `You win ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else {
            result = `You lose ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
    }
        // create 5 rounds for game
        for (let i = 0; i < 5; i++) {
            // display rounds with console.log
            console.log(`Round ${i + 1}: `);
            // now call first two functions with const vairables
            const humanSelection = humanChoice();
            const computerSelection = getComputerChoice();
            // Invoke Playround function
            playRound(humanSelection, computerSelection);
            // track final score for each game, in loop. Traverse through loop until 
            console.log(`Round Score: ${humanScore}, Computer Score: ${computerScore}`);
            console.log(`--------------------------------`);
        }

        // once all games is over, print that it is over
        console.log("Game Over");
        // if statement for if humanscore > computer score, then you win
        if (humanScore > computerScore) {
            console.log("You win!");
        }
        // Else if statement for if computer score > humanscore, then you lose
        else if (computerScore > humanScore) {
            console.log("You lose.");
        }
        // final else statement for tie game as it is only option left
        else {
            console.log("It is a tie.");
        }
        console.log(`Final Score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    playGame();


