var a = 'rock';
var b = 'scissors';
var c = 'paper';

function new_game() {
  var choice = window.prompt("Ready for some Rock, Paper, Scissors? Pick your poison!");
};

function roshambo(input) {
if(a && b) return console.log("Rock defeats scissors! SMASH!")
if(a && c) return console.log("Paper's got it covered! It defeats rock!")
if(b && c) return console.log("Coach says you're cut! Scissors win!")


};

new_game();
