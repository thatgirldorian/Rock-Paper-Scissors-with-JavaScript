//The function that holds the game
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
   return userInput; 
  } else {
    console.log("There's been an error, please try again.")
  }
    
};

//A quick test to see if the function works or throws an error
getUserChoice('rook');

//This function helps the computer make a choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
    
}; 

//A test to see if the function above works. This will print paper, rock or scissors, depending on the random number genrated.
console.log(getComputerChoice());

//The function that determines who wins
const determineWinner = (userChoice, computerChoice) => {
  
  //If the game was a tie
  if (userChoice === computerChoice) {
    return "This game was a tie.";
  }
  
  //If the user plays, 'rock'
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "The computer won.";
    } else {
      return "You won!";
    }
  } 
  
  //If the user plays, 'paper'
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The computer won.";
    } else {
      return "You won!";
    }
  }
  
  //If the user plays, 'scissors'
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "The computer won.";
    } else {
      return "You won!";
    }
  }
};

//A quick test to see if our function works. This printed 'rock'. You won!
console.log(determineWinner('paper', 'rock'));

//Function to play game
const playGame = () => {
  let userChoice = getUserChoice('rock', 'paper', 'scissors');
  
  let computerChoice = getComputerChoice();
  
  //Quick test to see if these variables work
  console.log(userChoice);
  console.log(computerChoice);
  
  //Determining who wins
console.log(determineWinner(userChoice, computerChoice));
};


