var a = 'rock';
var b = 'scissors';  // variables for human choices
var c = 'paper';

var human_eng = 0;
var com_eng = 0;
var human_bout = 0;   //variables used to keep score. eng = engagement,
var com_bout = 0;
var human_match = 0;
var com_match = 0;
var new_match = '';

var name = '';

function reset_score() {
  human_eng = 0;
  human_bout = 0;     //resets all scores to zero after a match
  com_eng = 0;
  com_bout = 0;
};


high_scores_raw = [];
high_scores = high_scores_raw.sort(function(a, b){return a-b});



function match() {
    alert('High Scores: \n' + high_scores.join(""));

    if(human_match >= 1) {
      var new_match = prompt('YOU WIN! Sweet Victory! Would you like to play again?');
      if (new_match.toUpperCase() === 'YES') {
      reset_score();
      match();
   }
      else if (new_match.toUpperCase() === 'NO') {
      alert('Thanks for playing ' + name + '. See you next time!');
      reset_score();
      high_scores_raw.push(name + "     " + human_match + '\n');
      name = '';
      human_match = 0;
      com_match = 0;
      return;

   }  else {
      reset_score;
      return;
    }
   }
    else if(com_match >= 1) {
    var new_match = prompt('YOU LOSE! Even though you were utterly humiliated, would you like to lose again? Bring your friends and family to watch!');
      if (new_match.toUpperCase() === 'YES') {
      reset_score();
      match();
    }
      else if(new_match.toUpperCase() === 'NO') {
      alert('Thanks for playing ' + name + '. See you next time!');
      reset_score();
      high_scores_raw.push(name + "     " + human_match + '\n');
      name = '';
      human_match = 0;
      com_match = 0;
      return;
    }
  }
    else {
      bout();
    }
  };

function bout() {

  if(human_bout === 2) {
    alert('You will pay for this, ' + name + ', NEXT TIIIIIIME!');
    human_match += 1;
    reset_score();
    match();

  } else if(com_bout === 2) {
    alert('A strong foe is better than a weak friend, ' + name + ' . . . I wish you were stronger! Mwahahahaha!');
    com_match += 1;
    reset_score();
    match();
  }
  else {
    engage();

    while(true)
    {
      if(human_eng === 2 && human_bout === 1) {
        human_bout += 1;
        human_eng = 0;
        com_eng = 0;
        bout();
      } else if(com_eng === 2 && com_bout === 1) {
        com_bout += 1;
        com_eng = 0;
        human_eng = 0;
        bout();
      };

      if(human_eng === 2) {
        alert('You have won a bout, ' + name + ', but the match is not over!');
        human_bout += 1;
        human_eng = 0;
        com_eng = 0;
        bout();
      } else if(com_eng === 2) {
        alert('Your demise is imminent, ' + name + ', one more bout of victory for me and you are toast!');
        com_bout += 1;
        com_eng = 0;
        human_eng = 0;
        bout();
      }
      else {
        bout();
      }
    }
  }


  function engage() {

    if(name === '') {
      name = window.prompt('Welcome to Roshambo! Please enter your name: ');
    }

    if(name === '') {
      alert('You did not enter a name! Goodbye! If you wish to continue, please refresh the page!');   //ensures user enters their name (or at least a string)
      return;
    }

    var choice = window.prompt("Ready for some Rock, Paper, Scissors? Pick your poison!");


    //depending on choice, an alert box will restate what the player chose
    if (choice.toLowerCase() === a || choice.toLowerCase() === b || choice.toLowerCase() ===c) {

    } else {
      alert(name.toUpperCase() +'! you have trouble following directions! Try again!');
      return;
    }

    function com_choice() {

      var beg = "Your sworn enemy has chosen "
      var comR = "ROCK!"
      var comP = "PAPER"
      var comS = "SCISSORS"

      //if computer chooses rock
      var random_choice = Math.random();
      if((random_choice >= 0 && random_choice < .34) && choice === 'rock') {
        alert(beg + comR + ' Great minds think alike ' + name + ' YOU TIE!' );

      }
      else if((random_choice >= 0 && random_choice < .34) && choice === 'scissors') {
        alert(beg + comR + ' HULK SMASH! Try to pick up the pieces, ' + name + '! YOU LOSE!' );
        com_eng += 1

      }
      else if ((random_choice >= 0 && random_choice < .34) && choice === 'paper') {
        alert(beg + comR + '. ' + name + ' You have got it covered. YOU WIN!');
        human_eng += 1

      }

      //if computer chooses paper
      if((random_choice >= .34 && random_choice < .67) && choice === 'rock') {
        alert(beg + comP + ' Use the paper to hide in shame, ' + name +'! YOU LOSE!' );
        com_eng += 1

      }
      else if((random_choice >= .34 && random_choice < .67) && choice === 'scissors') {
        alert(beg + comP + ' That was "SHEAR" luck, ' + name + ', YOU WIN!' );
        human_eng += 1

      }
      else if ((random_choice >= .34 && random_choice < .67) && choice === 'paper') {
        alert(beg + comP + ' Great minds think alike, ' + name + ', YOU TIE!');

      }

      //if computer chooses scissors
      if((random_choice >= .67 && random_choice <= 1) && choice === 'rock') {
        alert(beg + comS + ' What a SMASHING success you are, ' + name +'! YOU WIN!' );
        human_eng += 1

      }
      else if((random_choice >= .67 && random_choice <= 1) && choice === 'scissors') {
        alert(beg + comS + ' Great minds think alike, ' + name + ' YOU TIE!' );

      }
      else if ((random_choice >= .67 && random_choice <= 1) && choice === 'paper') {
        alert(beg + comS + ' Sorry ' + name + ', Coach says you are cut! YOU LOSE!');
        com_eng += 1

      }

    }
    com_choice();
  }

};

match();
