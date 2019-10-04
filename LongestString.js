// Good morning! Write a function that takes an array of strings and return the longest string in the array.

function longestString(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length > arr[0].length) {
        arr[0] = arr[i]; 
      }
    }
    return arr[0]; 
  } 
  
  longestString(['short', 'really, really long!', 'medium'])