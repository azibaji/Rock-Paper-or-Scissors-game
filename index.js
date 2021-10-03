const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if(userInput === 'rock' || userInput == 'paper' || userInput === 'scissor'){
    return userInput
  }else{
    console.log('Error')
  }
}
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3)
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scisson';
      break;
  }
}
const determineWinner = (userChoice, computerChoice) =>{
if(userChoice === computerChoice){
  return 'The game was a tie!';
}
if(userChoice === 'rock'){
  if(computerChoice === 'paper'){
    return 'The computer won.'
  }else{
    return 'The user won.'
  }
} else if(userChoice === 'paper'){
  if(computerChoice === 'scissor'){
    return 'The computer won.'
  }
  else{
    return 'The user won.'
  }
} else if(userChoice === 'scissor'){
  if(computerChoice === 'rock'){
    return 'The computer won.'
  }else{
    return 'The user won.'
  }
}
}
const playGame = () => {
  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()
  console.log(determineWinner(userChoice,computerChoice))
}
playGame()
