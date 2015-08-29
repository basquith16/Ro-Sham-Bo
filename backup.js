var a = 'rock';
var b = 'scissors';
var c = 'paper';


//helper functions//

function poison() {
  var choice = window.prompt("Ready for some Rock, Paper, Scissors? Pick your poison!");
}

function new_game() {
  var name = window.prompt('Welcome to Roshambo! Please enter your name: ')

  if(name === '') {
    alert('You did not enter a name! Goodbye! If you wish to continue, please refresh the page!');   //ensures user enters their name (or at least a string)
    return;
  }

  var choice = window.prompt("Ready for some Rock, Paper, Scissors? Pick your poison!");


  //depending on choice, an alert box will restate what the player chose
  if (choice.toLowerCase() === a || choice.toLowerCase() === b || choice.toLowerCase() ===c) {
    console.log('Player chose ' + choice)
  } else {
    alert(name.toUpperCase() +'! you have trouble following directions! Refresh and START OVER!');
    return;
  }


    function com_choice() {

      var beg = "Your sworn enemy has chosen "
      var comR = "ROCK!"
      var comP = "PAPER"
      var comS = "SCISSORS"

      var random_choice = Math.random();
      if(random_choice >= 0 && random_choice < .34) {
        if(choice === 'rock') {
        alert(beg + comR + ' Great minds think alike ' + name + ' YOU TIE!' );
        console.log('Com chose rock');
  }
        else if(choice === 'scissors') {
        alert(beg + comR + ' HULK SMASH! Try to pick up the pieces ' + name + '! YOU LOSE!' );
        console.log('Com chose rock');
  }
        else if (choice === 'paper') {
        alert(beg + comR + '.' + name + ' You have got it covered. YOU WIN!');
        console.log('Com chose rock');
      }
}
      else if(random_choice >= .34 && random_choice < .67)  {
        if(choice === 'rock') {
        alert(beg + comP + ' Use the paper to hide in shame, ' + name +'! YOU LOSE!' );
        console.log('Com chose paper');
  }
        else if(choice === 'scissors') {
        alert(beg + comP + ' That was "SHEAR" luck, ' + name + ' YOU WIN!' );
        console.log('Com chose paper');
  }
        else if (choice === 'paper') {
        alert(beg + comP + ' Great minds think alike ' + name + ' YOU TIE!');
        console.log('Com chose paper');
      }
    }

    com_choice();

  };

new_game();
