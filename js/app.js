'use stict';
var  score= 0;  

var userName = prompt('What is your name?');

console.log('the user name is ' + userName);

var aboutMe = prompt('Wanna get to know me better?');

if (aboutMe.toLowerCase() === 'yes'|| aboutMe.toLowerCase() === 'y' ) {
  console.log('User answerd '+aboutMe, 'should be yes');
  alert('Great! lets start');
} else if (aboutMe.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
  alert('Sorry');
} else {
  prompt('Please answer with a yes or a no');
}
//  Question: What color do I like? Answer: Blue is Yes

var question1 = prompt('Do I like the color blue?');
if (question1.toLowerCase() === 'yes'|| aboutMe.toLowerCase() === 'y') {
  console.log('User answerd '+question1, 'should be yes');
  alert('Right!');
  score++;
} else if (question1.toLowerCase() === 'no'|| aboutMe.toLowerCase() === 'n' ) {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

//  Question: Do I like ketchup on my hotdog? Answer: Yes
var question2 = prompt('Do I like ketchup on a hotdog?');
if (question2.toLowerCase() === 'yes' || aboutMe.toLowerCase() === 'y') {
  console.log('User answerd '+question2, 'should be yes');
  alert('Right!');
  score++;
} else if (question2.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

// Question: Do I like to watch sports? Answer: Yes
var question3 = prompt('Do I like to watch sports?');
if (question3.toLowerCase() === 'yes'|| aboutMe.toLowerCase() === 'y' ) {
  alert('Right!');
  score++;
} else if (question3.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

// Question: Do I like margaritas? Answer: Yes
var question4 = prompt('Do I like margaritas?');
if (question4.toLowerCase() === 'yes' || aboutMe.toLowerCase() === 'y' ) {
  alert('Right!');
  score++;
} else if (question4.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}
// Question: Do I like pineapple on my pizza? Answer: Yes

var question5 = prompt('Do I like pineapple on pizza?');
if (question5.toLowerCase() === 'yes' || aboutMe.toLowerCase() === 'y' ) {
  alert('Wrong!');
} else if (question5.toLowerCase() === 'no' || aboutMe.toLowerCase() === 'n' ) {
  alert('Right!');
  score++;
} else {
  prompt('Please answer with a yes or a no');
}

alert(' Thank you for playing ' + userName);

// Guess my number game 
var luckyNumber=1; 
console.log(luckyNumber);
for (var i=0; i<4; i++){
  if (i===0){
    var guessLuckyNumber= prompt('Lets play a game. I am thinking of a number between 1-10 can you guess waht number I am thinking? You have 4 guesses.');

  }
  else{
    guessLuckyNumber = prompt("Try again. Guess a number between 1-10. You have " + (4-i) + "guesses remaning");
  }

  while (!(guessLuckyNumber > 0 && guessLuckyNumber < 11 )){
    guessLuckyNumber = prompt("Was that number between 1-10? You need to enter any whole number in the rannge of 1 through 10.");
  }

  if (luckyNumber == guessLuckyNumber){ 
    alert(" Great guess!  " + guessLuckyNumber + " was correct.");
    score++;
    break;
  }
  else if (i==3){
    alert("Sorry, Today just isnt your day.")
  }
  else if (guessLuckyNumber < luckyNumber){
    alert("Too low! Try again.");
  }
  else if  (guessLuckyNumber > luckyNumber){
  alert("Too high! Try again.");

  }
}


var superHerosilike= ['Batman', 'Doctor Strange', 'Spider-Man', 'Daredevil', 'Iron-Man'];

alert("Sorry,Try again.");
var userAnswer;
loop1:
for (var t=0; t<6;t++){
  
  userAnwser=prompt("What is my favortie superheros?");
  for(var i = 0; i < superHerosilike.length; i++) {
    //console.log(superHerosilike[i]);
    if(superHerosilike[i]  ===userAnwser){
      alert("Good Job!");
      score++;
      break loop1;
    }
  
  
  }
  alert("Sorry,try again");

}

alert("You got "+score+" out of 7");