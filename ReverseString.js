// Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.

function reverseString(str) {
  let reversed = str.split('').reverse().join(''); 
  
  return reversed; 
}

reverseString("HELLO")


