// Write a program that takes a single parameter
// from the command line, a number, and rolls that many six-sided dice.
// For example, the following is a sample output of the program.
// To generate a random number,
// you'll have to use the built-in Math.random.

// ex output
// node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5

//.1 Take one input from the command line  (process.argv)
var number = Number(process.argv[2])

//.2 Create an array with that many places
// var dice = [1, 2, 3 , 4 , 5 , 6];

//.3 For each place that is the number, Math.random, for in

function die(max, min){
  return Math.floor(Math.random() * (max - min)+ min)
};

// console.log(die(1,9));

//.4 Display output as console.log

function rollDie(num) {
  var numRolls = [];
  for (i = 0; i < num; i++){
    numRolls.push(die(1,6));
  }
  console.log("Rolled " + num + " dice:" + numRolls);
};

rollDie(number);







