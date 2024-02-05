let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
//   console.log("game was draw");
  msg.innerHTML = "Game was draw. Play again.";
  msg.style.backgroundColor = "#388697";

};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("you win");
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    // console.log("you lose");
    msg.innerHTML = `You lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";

  }
};

const playGame = (userChoice) => {
//   console.log("user choice =", userChoice);
  //generate computer choice ->moduler
  const compChoice = genCompChoice();
//   console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // comp have paper,scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp have rock,scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //comp have rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
