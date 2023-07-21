//Generates random int as an index number to fetch element from array as computer choice

document.addEventListener("DOMContentLoaded", function()
{

    var helpbutton = document.getElementById("help-button");
    var helpModal = document.querySelector("dialog[help-modal]");
    var closehelpbutton = document.getElementById("close-help-button");

    helpbutton.addEventListener("click", function(event)
    {
        helpModal.show();
    })

    closehelpbutton.addEventListener("click", function(event)
    {
        helpModal.close();
    })

var playerWinCount = 0;
var computerWinCount = 0;

var buttons = document.querySelectorAll(".element-button").length;
for (var i = 0; i < buttons; i++)
{
    document.querySelectorAll(".element-button")[i].addEventListener("click", function(event)
    {
        var playerChoice = event.target.id;
        gameComputation(playerChoice);
    })
}

    function getComputerChoice()
{
    var elements = ["fire", "water", "earth", "wind"];
    var randomIndex = Math.floor(Math.random() * elements.length);
    var computerChoice = elements[randomIndex];
    console.log(computerChoice);
    return computerChoice;
}

function gameComputation(playerChoice)
{
    var computerChoice = getComputerChoice();
    var outputElement = document.querySelector(".output-bar h2");
    var outputElementTwo = document.querySelector(".tally-bar h2")

    if (playerChoice === computerChoice)
    {
        outputElement.textContent = "Its a draw";
    }
    else if (
        (playerChoice === "fire" && computerChoice === "earth") ||
        (playerChoice === "water" && computerChoice === "fire") ||
        (playerChoice === "water" && computerChoice === "earth") ||
        (playerChoice === "earth" && computerChoice === "wind") ||
        (playerChoice === "wind" && computerChoice === "water") ||
        (playerChoice === "wind" && computerChoice === "fire")
    )
    {
        outputElement.textContent = `Player wins! ${playerChoice} beats ${computerChoice}`;
        playerWinCount++;
        outputElementTwo.textContent = `Player Wins: ${playerWinCount} Computer Wins: ${computerWinCount}`;
    }
    else
    {
        computerWinCount++;
        outputElement.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
        outputElementTwo.textContent = `Player Wins: ${playerWinCount} Computer Wins: ${computerWinCount}`;
    }

    if (playerWinCount === 5)
    {
        outputElementTwo.textContent = "You have won the game!";
        setTimeout(function()
        {
            resetGame();
        }, 2500);
    }
    else if (computerWinCount === 5)
    {
        outputElementTwo.textContent = "Computer has won the game!";
        setTimeout(function()
        {
            resetGame();
        }, 2500);
    }

}

function resetGame()
{
    location.reload();
}

});
