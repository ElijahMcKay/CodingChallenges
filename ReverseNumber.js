// Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  num = num + ''
  
  num = parseInt(num.split('').reverse().join('')); 
  
  return num
}

reverseNumber(123456)


