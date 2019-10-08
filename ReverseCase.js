// Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

function reverseCase(str) {
    let arr = []; 
    for(let i = 0; i < str.length; i++) {
      if(str[i] === str[i].toUpperCase()) {
        arr[i] = str[i].toLowerCase(); 
      } else {
        arr[i] = str[i].toUpperCase(); 
      }
    }
    return arr.join(''); 
  }

  reverseCase('HELLO world'); 