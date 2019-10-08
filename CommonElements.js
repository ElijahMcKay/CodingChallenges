//Write a function called commonElements that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

function commonElements(arr1, arr2) {
    //setting up temp array to hold like items
    let tempArr = []; 
    // loop through the first array 
    for(let i = 0; i < arr1.length; i++) {
      //loop through the second array 
      for(let j = 0; j < arr2.length; j++) {
        console.log('arr1', arr1[i]); 
        console.log('arr2', arr2[j]); 
        if(arr1[i] === arr2[j]) { 
          console.log('test');
          tempArr.push(arr1[i]); 
        }
      }
    }
    return tempArr;  
  }
  
  commonElements([1, 2, 3, 4], [3, 4, 5, 6]); 