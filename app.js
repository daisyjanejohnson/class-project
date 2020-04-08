// // ask name

function askName() {
  var username = prompt('What is your name?');
  return document.write('<h3>' + 'Hello, ' + username + '</h3>');
}

// // Add Greeting

function addGreeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 17) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  return document.write('<h3>' + greeting + '</h3>');
}

// // Ask Preference

function getItemType() {
  var response = prompt('Do you want to adopt a cat or dog?')
  var item;
  if (response === 'cat') {
    // message = 'I can\'t blame you, cats are purrfect!'
    item = '<img src="images/catt.png">';
  } else if (response === 'dog') {
    // message = 'Everyone knows a dog is a person\'s best friend!'
    item = '<img src="images/doggg.png">';
  // } else if (response === 'both') {
  //   // message = 'Wow, you are the best!'
  //   item = '<img src="images/dog-and-cat.jpeg'
  } else { message = 'I know you want to adopt someone today, just look around!' }

  return item;
}

function howMany(){
  var count = prompt('Great, how many would you like?');
  
  while(isNaN(count) || count === ''){
    count = prompt('PLEASE ENTER A NUMBER! How many would you like?')
  }
  return count;
}

function showOrder(){
  var result = '';
  var itemType = getItemType();
  var orderTotal = howMany();
  for (var i = 0; i < orderTotal; i++){
    result = result + '<p>' + itemType + '</p>';
  }
  return document.write(result); 
}



