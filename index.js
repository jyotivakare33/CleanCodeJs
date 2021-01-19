const readline = require('readline');
var fs = require('fs');
const chalk = require("chalk");
const Readlinesync = require("readline-sync");
const questions = JSON.parse(fs.readFileSync('question.json'));

const correctValue = 2;
const wrongValue = -1;

let correctAnswers = 0;
let wrongAnswers = 0;

console.log("welcome to this quiz!");
var username = Readlinesync.question("May I have your name please!\n");
console.log(chalk.yellowBright.bold("Welcome "+ username+"!\n"));
console.log(chalk.magenta.bold(" Rules for scores.\n 2 => correct answers \n -1 => Wrong Answers \n According to Airbnb javascript guidelines\n"));


for (const question in questions) {
    console.log(chalk.green(question));
    
    let choiceIndex = 1;
    for (const choice in questions[question]) {
      console.log(`${choiceIndex++}.${questions[question][choice].answer}`);
    }
    var userAnswer = Readlinesync.question("Choose the right answer\n");
    checkAnswer(question, userAnswer);
}


function checkAnswer(question, answer) {
    try {
      if (questions[question][answer-1].correct) {
        console.log(chalk.green.bold("You are Right..\n"));
        correctAnswers++;
      } else {
        console.log(chalk.red.bold("Awwww...Wrong...\n"));
        wrongAnswers++;
      }
    } catch(e) {
      console.log(chalk.cyan.bold("Please enter valid input"));
    }
}

console.log(chalk.blue.bold("Congrats...\n Your score is "+(correctAnswers*correctValue + wrongAnswers*wrongValue)));
