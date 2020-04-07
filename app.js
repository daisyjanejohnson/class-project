// // ask name

function askName() {
  var username = prompt('What is your name?');
  return document.write('<h3>'+ 'Hello, ' + username + '</h3>');  
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

return document.write('<h3>'+greeting+'</h3>');  
}

// // Ask Preference

function askPreference() {
  var response = prompt('Do you prefer cats, dogs or both?')
  var message;
  if (response === 'cats'){
      message = 'Cats are purrfect!'
  } else if (response === 'dogs'){
      message = 'I love dogs too!'
  } else if (response === 'both'){
      message = 'I agree, they both are great!'
  } else {message = 'Animals are awesome!'}
  
  return document.write('<h3>'+ message + '<h3>') 
}