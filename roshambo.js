// global variables
var a = 'rock';
var b = 'scissors'; // variables for human choices
var c = 'paper';
var human_eng = 0;
var com_eng = 0;
var human_bout = 0; //variables used to keep score. eng = engagement,
var com_bout = 0;
var human_match = 0;
var com_match = 0;
var new_match = '';
var level = 0;
var name = ''; //variables for modified computer strategy
var psych_tie = 0;
var random_choice = 0;
var choice = '';


function reset_score() {
  human_eng = 0;
  human_bout = 0; //resets all scores to zero after a match
  com_eng = 0;
  com_bout = 0;
};

//leaderboard display
high_scores_raw = [];
high_scores = high_scores_raw.sort(function(a, b) {
  return a - b
});



function match() {
  level = window.prompt(
    'Please select computer strategy\n 1. Random \n 2. Pysch Mode!\n\n Please enter 1 or 2'
  )

  if (name === '') {
    name = window.prompt('Welcome to Roshambo! Please enter your name: ');
  }
  if (name === '') {
    alert(
      'You did not enter a name! Goodbye! If you wish to continue, please refresh the page!'
    ); //ensures user enters their name (or at least a string)
    return;
  };

  if (human_match >= 1) {
    var new_match = prompt(
      'YOU WIN! Sweet Victory! Would you like to play again?');
    if (new_match.toUpperCase() === 'YES') {
      reset_score();
      match();
    } else if (new_match.toUpperCase() === 'NO') {
      alert('Thanks for playing ' + name + '. See you next time!');
      reset_score();
      high_scores_raw.push(name + "     " + human_match + '\n');
      name = '';
      human_match = 0;
      com_match = 0;
      return;

    } else {
      reset_score;
      return;
    }
  } else if (com_match >= 1) {
    var new_match = prompt(
      'YOU LOSE! Even though you were utterly humiliated, would you like to lose again? Bring your friends and family to watch!'
    );
    if (new_match.toUpperCase() === 'YES') {
      reset_score();
      match();
    } else if (new_match.toUpperCase() === 'NO') {
      alert('Thanks for playing ' + name + '. See you next time!');
      reset_score();
      high_scores_raw.push(name + "     " + human_match + '\n');
      name = '';
      human_match = 0;
      com_match = 0;
      return;
    }
  } else {
    bout();
  }
};

function bout() {

  if (human_bout === 2) {
    alert('You will pay for this, ' + name + ', NEXT TIIIIIIME!');
    human_match += 1;
    reset_score();
    match();

  } else if (com_bout === 2) {
    alert('A strong foe is better than a weak friend, ' + name +
      ' . . . I wish you were stronger! Mwahahahaha!');
    com_match += 1;
    reset_score();
    match();
  } else {
    engage();

    while (true) {
      if (human_eng === 2 && human_bout === 1) {
        human_bout += 1;
        human_eng = 0;
        com_eng = 0;
        bout();
      } else if (com_eng === 2 && com_bout === 1) {
        com_bout += 1;
        com_eng = 0;
        human_eng = 0;
        bout();
      }
      if (human_eng === 2) {
        alert('You have won a bout, ' + name + ', but the match is not over!');
        human_bout += 1;
        human_eng = 0;
        com_eng = 0;
        bout();
      } else if (com_eng === 2) {
        alert('Your demise is imminent, ' + name +
          ', one more bout of victory for me and you are toast!');
        com_bout += 1;
        com_eng = 0;
        human_eng = 0;
        bout();
      } else {
        bout();
      }
    }
  }
};

function engage() {
  var choice = window.prompt(
    "Ready for some Rock, Paper, Scissors? Pick your poison!");

  if (choice.toLowerCase() === a || choice.toLowerCase() === b || choice.toLowerCase() ===
    c) {
    com_choice();
  } else {
    alert(name.toUpperCase() +
      '! you have trouble following directions! Try again!');
    return;
  }
};

function com_choice() {

  if (psych_tie = 0) {
    if (level === '1') {
      random_choice = Math.random();
    }
  }
  if (random_choice >= 0 && random_choice < .34) {
    random_choice = 'rock';
  } else if (random_choice >= .34 && random_choice < .67) {
    random_choice = 'paper';
  } else {
    random_choice = 'scissors'
  }
  score();

  if (psych_tie = 1) {
    if (level === 2) {
      if (psych = 1) {
        random_choice = choice;
      } else if (psych = 0) {
        random_choice != random_choice || choice;
      }
    }
  }
  score();
};



function score() {

  var beg = "Your sworn enemy has chosen ";
  var comR = "ROCK!";
  var comP = "PAPER";
  var comS = "SCISSORS";

  if (random_choice === 'rock')
    if (choice === 'rock') {
      alert(beg + comR + ' Great minds think alike ' + name + ' YOU TIE!');
      psych_tie = 0;
    } else if (choice === 'scissors') {
    alert(beg + comR + ' HULK SMASH! Try to pick up the pieces, ' + name +
      '! YOU LOSE!');
    com_eng += 1;
    psych = 1;
    psych_tie = 1;

  } else if (choice === 'paper') {
    alert(beg + comR + '. ' + name + ' You have got it covered. YOU WIN!');
    human_eng += 1;
    psych = 0;
    psych_tie = 1;
  }
  if (random_choice === 'paper') {
    if (choice === 'rock') {
      alert(beg + comP + ' Use the paper to hide in shame, ' + name +
        '! YOU LOSE!');
      com_eng += 1;
      psych = 1;
      psych_tie = 1;
    } else if (choice === 'scissors') {
      alert(beg + comP + ' That was "SHEAR" luck, ' + name + ', YOU WIN!');
      human_eng += 1;
      psych = 0;
      psych_tie = 1;
    } else if (choice === 'paper') {
      alert(beg + comP + ' Great minds think alike, ' + name + ', YOU TIE!');
      psych_tie = 0;
    }
  }
  if (random_choice === 'scissors') {
    if (choice === 'rock') {
      alert(beg + comS + ' What a SMASHING success you are, ' + name +
        '! YOU WIN!');
      human_eng += 1;
      psych = 0;
      psych_tie = 1;
    } else if (choice === 'scissors') {
      alert(beg + comS + ' Great minds think alike, ' + name + ' YOU TIE!');
      psych_tie = 0;
    } else if (choice === 'paper') {
      alert(beg + comS + ' Sorry ' + name +
        ', Coach says you are cut! YOU LOSE!');
      com_eng += 1;
      psych = 1;
      psych_tie = 0;
    }
  }
};
match();
