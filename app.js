
// Game Function

const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start the game
  const startGame = () => {
    const startButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");
    const optionScreen = document.querySelector(".options");

    startButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
      optionScreen.classList.add("fadeIn");
    })
  }

  // play the game
  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hand-signs img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    // computer choices
    options.forEach(option => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        
        // setting time
        setTimeout(() => {
          // here we compare player and computer hands
          compareHands(this.textContent, computerChoice);

          // Updating hands
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000)

        //hands animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

        playerHand;
        computerHand;
      });
    });
  };
  //Updating score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score .span");
    const computerScore = document.querySelector(".computer-score .span");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };


  // comparing the computer and player hands

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    // Both player and computer are equal
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie..";
      return;
    }
    
    // Checking rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }

    // Checking paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // checking Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };
  
  // call the start game function
  startGame();
  playGame();
};
// call the game function

game();