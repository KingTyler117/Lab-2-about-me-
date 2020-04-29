'use stict'

var name = prompt('What is your name?');

console.log('the user name is ' + name);

var aboutMe = prompt('Wanna get to know me better?');

if (aboutMe.toLowerCase() === 'yes') {
  alert('Great! lets start');
} else if (aboutMe.toLowerCase() === 'no') {
  alert('Sorry');
} else {
  prompt('Please answer with a yes or a no');
}

var question1 = prompt('Do I like the color blue?');
if (question1.toLowerCase() === 'yes') {
  alert('Right!');
} else if (question1.toLowerCase() === 'no') {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

var question2 = prompt('Do I like ketchup on a hotdog?');
if (question2.toLowerCase() === 'yes') {
  alert('Right!');
} else if (question2.toLowerCase() === 'no') {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

var question3 = prompt('Do I like to watch sports?');
if (question3.toLowerCase() === 'yes') {
  alert('Right!');
} else if (question3.toLowerCase() === 'no') {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

var question4 = prompt('Do I like margaritas?');
if (question4.toLowerCase() === 'yes') {
  alert('Right!');
} else if (question4.toLowerCase() === 'no') {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

var question5 = prompt('Do I like pineapple on pizza?');
if (question5.toLowerCase() === 'yes') {
  alert('Right!');
} else if (question5.toLowerCase() === 'no') {
  alert('Wrong!');
} else {
  prompt('Please answer with a yes or a no');
}

alert(' Thank you for playing ' + name);

