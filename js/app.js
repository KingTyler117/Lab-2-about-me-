'use stict';

var score= 0;

//  Question: username

var userName;

function fname() {
  userName = prompt('What is your name?');
}

console.log('the user name is ' + userName);

fname();

//  Question: about me

var aboutMe;

function faboutMe() {
  aboutMe = prompt('Wanna get to know me better?');

  if (aboutMe.toLowerCase() === 'yes'|| aboutMe.toLowerCase() === 'y' ) {
    console.log('User answerd '+aboutMe, 'should be yes');
    alert('Great! lets start');
  } else if (aboutMe.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
    alert('Sorry');
  } else {
    prompt('Please answer with a yes or a no');
  }

}

faboutMe();

//  Question: What color do I like? Answer: Blue is Yes

var question1;

function fquestion1(){
  question1 = prompt('Do I like the color blue?');
  if (question1.toLowerCase() === 'yes'|| aboutMe.toLowerCase() === 'y') {
    console.log('User answerd '+question1, 'should be yes');
    alert('Right!');
    score++;
  } else if (question1.toLowerCase() === 'no'|| aboutMe.toLowerCase() === 'n' ) {
    alert('Wrong!');
  } else {
    prompt('Please answer with a yes or a no');
  }
}

fquestion1();

//  Question: Do I like ketchup on my hotdog? Answer: Yes

var question2;

function fquestion2(){
  question2 = prompt('Do I like ketchup on a hotdog?');
  if (question2.toLowerCase() === 'yes' || aboutMe.toLowerCase() === 'y') {
    console.log('User answerd '+question2, 'should be yes');
    alert('Right!');
    score++;
  } else if (question2.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
    alert('Wrong!');
  } else {
    prompt('Please answer with a yes or a no');
  }
}

fquestion2();

// Question: Do I like to watch sports? Answer: Yes
var question3;

function fquestion3(){
  question3 = prompt('Do I like to watch sports?');
  if (question3.toLowerCase() === 'yes'|| aboutMe.toLowerCase() === 'y' ) {
    alert('Right!');
    score++;
  } else if (question3.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
    alert('Wrong!');
  } else {
    prompt('Please answer with a yes or a no');
  }

}

fquestion3();

// Question: Do I like margaritas? Answer: Yes
var question4;

function fquestion4(){
  question4 = prompt('Do I like margaritas?');
  if (question4.toLowerCase() === 'yes' || aboutMe.toLowerCase() === 'y' ) {
    alert('Right!');
    score++;
  } else if (question4.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
    alert('Wrong!');
  } else {
    prompt('Please answer with a yes or a no');
  }

}

fquestion4();

// Question: Do I like pineapple on my pizza? Answer: Yes
var question5;

function fquestion5(){
  question5 = prompt('Do I like pineapple on pizza?');
  if (question5.toLowerCase() === 'yes' || aboutMe.toLowerCase() === 'y' ) {
    alert('Wrong!');
  } else if (question5.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
    alert('Right!');
    score++;
  } else {
    prompt('Please answer with a yes or a no');
  }

  alert(' Thank you for playing ' + userName);

}

fquestion5();

// Guess my number game

var guessLuckyNumber;

function fnumber(){
  var luckyNumber='1';
  console.log(luckyNumber);
  for (var i=0; i<4; i++){
    if (i===0){
      guessLuckyNumber= prompt('Lets play a game. I am thinking of a number between 1-10 can you guess waht number I am thinking? You have 4 guesses.');

    }
    else{
      guessLuckyNumber = prompt('Try again. Guess a number between 1-10.  You have ' + (4-i) + 'guesses remaning');
    }

    while (!(guessLuckyNumber > 0 && guessLuckyNumber < 11 )){
      guessLuckyNumber = prompt('Was that number between 1-10? You need to enter any whole number in the rannge of 1 through 10.');
    }

    if (luckyNumber === guessLuckyNumber){
      alert(' Great guess!  ' + guessLuckyNumber + ' was correct.');
      score++;
      break;
    }
    else if (i===3){
      alert('Sorry, Today just isnt your day.')
    }
    else if (guessLuckyNumber < luckyNumber){
      alert('Too low! Try again.');
    }
    else if (guessLuckyNumber > luckyNumber){
      alert('Too high! Try again.');

    }
  }
}

fnumber();

// Superhero question

var userAnwser;

function fuserAnswer(){
  var superHerosilike= ['Batman', 'Doctor Strange', 'Spider-Man', 'Daredevil', 'Iron-Man'];
  var gameOver = false;



  alert('Sorry,Try again.');
  for (var t=0; t<6;t++){

    userAnwser=prompt('What is my favortie superheroes?');
    for(var i = 0; i < superHerosilike.length; i++) {
    //console.log(superHerosilike[i]);
      if(superHerosilike[i] ===userAnwser){
        gameOver = true;
        alert('Good Job!');
        alert('Possible correct answers: Batman, Doctor Strange, Spider-Man, Daredevil, Iron-Man');
        score++;
        break;
      }


    }
    if(gameOver){
      break;
    }
    alert('Sorry,try again');

  }

}

fuserAnswer();

alert('You got '+score+' out of 7');
