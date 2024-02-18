// console.log("hello world");
// alert("Is this working");

// Random [whole] number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Capitalize the first letter in a word
function capitalize(rawPlayerSelection) {
    const upperPlayerSelection = rawPlayerSelection.charAt(0).toUpperCase() + rawPlayerSelection.slice(1);    

    return upperPlayerSelection;
    
}

// Randomly choose rock/paper/scissors for CPU
function getComputerChoice () {
    let rdm = getRandomInt(3);
    // console.log("My num: ",rdm);
    let computerSelection;
    if (rdm == 0) {
        computerSelection = "Rock";
        // console.log("Is this working, rock?")
    } else if (rdm == 1) {
        computerSelection = "Paper";
        // console.log("Is this working, paper?")
    } else {
        computerSelection = "Scissors";
        // console.log("Is this working, scissors?")
    }
    
    // return console.log("CPU Choice: ",computerSelection);
    return computerSelection;

}

function getPlayerChoice () {
    const rawPlayerSelection = prompt("Enter your choice [rock, paper, or scissors]:").toLowerCase();
    const playerSelection    = capitalize(rawPlayerSelection);

    // console.log("raw: ",rawPlayerSelection);
    // console.log("transformed: ",playerSelection);

    return playerSelection;

}

function playRound (playerSelection, computerSelection) {
    // console.log("Computer: ",computerSelection,", Player: ",playerSelection)

    let roundResult;


    if ((playerSelection == "Rock"     && computerSelection == "Rock")  ||
        (playerSelection == "Paper"    && computerSelection == "Paper") ||
        (playerSelection == "Scissors" && computerSelection == "Scissors")) {

        roundResult = "tie";
        console.log("It's a tie.");


    } else if 
        ((playerSelection == "Rock"     && computerSelection == "Scissors") ||
        (playerSelection  == "Paper"    && computerSelection == "Rock")     ||
        (playerSelection  == "Scissors" && computerSelection == "Paper")) {

        roundResult = "win";
        console.log("You win! " + playerSelection + " beats " + computerSelection);

    } else {

        roundResult = "lose";
        console.log("You lose! " + computerSelection + " beats " + playerSelection);

    }

    // console.log("Computer: ",computerSelection,", Player: ",playerSelection, ", Result: ",roundResult);
    return roundResult;


}

function playGame () {
    // console.log("playGame")
    let totalWins=0;
    let totalLose=0;
    let totalTie=0;
    let roundResult;

    for (let i = 0; i < 5; i+=1 ) {
        const playerSelection   = getPlayerChoice();
        const computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        const roundResult = playRound(playerSelection,computerSelection);
        if (roundResult == "win") {
            totalWins += 1;
            console.log("Current wins: ",totalWins);
        } else if (roundResult == "lose") {
            totalLose += 1;
        } else {
            totalTie += 1;
        }

    }
    console.log("Total wins: ",totalWins);
    alert(
        "Total wins: " + totalWins +
        "\nTotal losses: " + totalLose +
        "\nTotal Ties: " + totalTie
    );
}

playGame();