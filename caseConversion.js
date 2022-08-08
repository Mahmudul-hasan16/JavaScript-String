const userName = 'blackpink';
const userInput = 'blackpinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());

if (userName.toLowerCase() == userInput.toLowerCase()) {
    console.log('valid user');
}
else {
    console.log('Invalid user');
}