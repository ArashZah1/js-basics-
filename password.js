const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator tool!')

reader.question("What would you like to have as your password?: ", function(input){
    const passWord = input
    if (passWord.length >= 10) {
        console.log('Thats a good password!')
    } else {
        console.log('That password is too short.')
    }
    reader.close()
});

