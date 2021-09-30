const readlineSync = require('readline-sync');
const chalk = require('chalk');
const userName = readlineSync.question('Please Enter Your Name ');
console.log("Welcome " + userName + " Let's see how much you know about IPL .");
console.log("************************************************");
var score = 0;
 iplQuestions = [
  questionOne = {
    question : "How many teams are there in IPL tournament?",
    A : "9",
    B : "8",
    C : "6",
    answer : "B"
  },
  questionTwo  ={
    question : "Which team has never played in IPL finals?",
    A : "Delhi Capitals",
    B : "Rajsthan Royals",
    C : "Mumbai Indians",
    answer : "A"
  },
  questionThree  ={
    question : "Who is the owner of Kolkata Knight Rider?",
    A : "Mukesh Ambani",
    B : "Shahrukh Khan",
    C : "Preity Zinta",
    answer : "B"
  },
  questionFour ={
    question : "Which team won most matches in ipl?",
    A : "Mumbai Indians",
    B : "Chennai Super KIngs",
    C : "Kolkata Knight Riders",
    answer : "A"
  },
  questionFive ={
    question : "Which team in the IPL has never changed its captains?",
    A : "Kolkata Knight Riders",
    B : "Chennai Super Kings",
    C : "Mumbai Indians",
    answer : "B"
  },
  questionSix  ={
    question : "Which team holds the lowest score(49) in an IPL match?",
    A : "Delhi Capitals",
    B : "Sunrisers Hyderabad",
    C : "Royal Challengers Banglore",
    answer : "C"
  },
  questionSeven  ={
    question : "Who is the first team to win IPL?",
    A : "Mumbai Indians",
    B : "Kolkata Knight Riders",
    C : "Rajasthan Royals",
    answer : "C"
  },
  questionEight ={
    question : "Which player holds the record for most sixes in IPL?",
    A : "Chris Gayle",
    B : "AB de villiers",
    C : "MS Dhoni",
    answer : "A"
  },
  questionNine ={
    question : "Which team's jersey color is Pink?",
    A : "Delhi Capital",
    B : "Kings XI Punjab",
    C : "Rajasthan Royals",
    answer : "C"
  },
  questionTen ={
    question : "Which player holds the record of fastest fifty in IPL?",
    A : "K L Rahul",
    B : "Nicholas Pooran",
    C : "Yuvraj Singh",
    answer : "A"
  }
];


for(let i=0;i<iplQuestions.length;i++){
  console.log(chalk.cyan('Question : '+ iplQuestions[i].question));
  console.log(chalk.yellow("A :" + iplQuestions[i].A));
  console.log(chalk.yellow("B : "  +iplQuestions[i].B));
  console.log(chalk.yellow("C :" +iplQuestions[i].C));
  var userAnswer = readlineSync.question("Answer : ");
  if(userAnswer.toUpperCase() === iplQuestions[i].answer.toUpperCase()){
    console.log(chalk.green("You are right"))
    score = score + 1;
  }
  else{
    console.log(chalk.red("You are wrong"))
  }
  console.log(chalk.blue("Your Score = " + score))
console.log("------------------------------------------------------")
}
console.log("******************************************************")
console.log("Your Total Score = " + score);