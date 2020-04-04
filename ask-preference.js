var response = prompt('Do you prefer cats, dogs or both?')
var message;
if (response === 'cats'){
    message = 'Cats are purrfect!'
} else if (response === 'dogs'){
    message = 'I love dogs too!'
} else if (response === 'both'){
    message = 'I agree, they both are great!'
} else {message = 'Animals are awesome!'}

document.write('<h3>'+ message + '<h3>')