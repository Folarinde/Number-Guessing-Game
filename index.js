let max = 2;
let reward = 0;
let guessChances = 3;
let performLoop = true;
let randomNumber;
prompt('Enter your Username:');

while (performLoop && guessChances >= 1) {
  randomNumber = Math.floor(Math.random() * (max - 1) + 1);
  guess = prompt('Guess a number between 1 and ' + max);
  if (Number(guess) === randomNumber) {
    max++;
    reward++;
    alert('Great! You have ' + reward + ' points. Stage ' + (reward + 1))
  } else {
    guessChances--;
    guess = prompt('Wrong! Take another guess between 1 and ' + max);
    if (Number(guess) === randomNumber) {
      max++;
      reward++;
      alert('Good! You have ' + reward + ' points. Stage ' + (reward + 1))
    } else {
      guessChances--;
      guess = prompt('Wrong! Another guess between 1 and ' + max);
      if (Number(guess) === randomNumber) {
        max++;
        reward++;
        alert('Splendid! You have ' + reward + ' points. Stage ' + (reward + 1))
      }
    }
  }
}
alert('Guess chances exhausted. Random number is ' + randomNumber + '. Game over!!!')