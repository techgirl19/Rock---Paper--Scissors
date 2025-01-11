let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const messages = document.getElementById("msg");
const scoreboard = document.getElementById("score");
const resetbutton = document.getElementById("reset");

function getComputerChoice() {
  const random_number = Math.random();
  if (random_number < 0.33) {
    return "rock";
  } else if (random_number > 0.33 && random_number < 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function PlayRound(humanchoice) {
  const computerchoice = getComputerChoice();
  if (humanchoice === computerchoice) {
    messages.innerHTML = `<p>It's a tie! ${humanchoice}.</p>`;

  }
  else if ((humanchoice === "scissor" && computerchoice === "paper") ||
    (humanchoice === "paper" && computerchoice === "rock") ||
    (humanchoice === "rock" && computerchoice === "scissor")
  ) {
    humanScore++;
    messages.innerHTML = ` <p>You win! ${humanchoice} beats ${computerchoice}.</p>`;
  }
  else {
    computerScore++;
    messages.innerHTML = `<p>Computer wins! ${computerchoice} beats ${humanchoice}.</p>`;
  }
  updateScore()
}

function updateScore() {
  scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}



choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const humanchoice = e.currentTarget.id;
    PlayRound(humanchoice);

  });
});

function resetgame() {
  humanScore = 0
  computerScore = 0
  scoreboard.textContent = "You: 0 | Computer: 0";
  messages.innerHTML = `<p> Let's Play!</p>`;
}

resetbutton.addEventListener("click", resetgame);

