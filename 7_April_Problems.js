//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//Examples: filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//As shown in example, you have to filter out strings and keep only integers in array

// function filterArray(array){ 
//     return array.filter(x => typeof x === 'number');
        
    
// }
// console.log(filterArray([1, 2, "a", "b"]));

//Create a function that takes an array as an argument and 
//returns true or false depending on whether the average of all elements in the array is a whole number or not.
//Examples: isAvgWhole([1, 3]) ➞ true, isAvgWhole([1, 2, 3, 4]) ➞ false
//Whole numbers means, a number without fractions. So in first example average of 2 elements is (1 + 3)/2 = 2, which is whole numbers
//hence it returned true


//function isAvgWhole(array){ 
 //   return  array.every(val => val === array[0]);
//}
//console.log(isAvgWhole([1, 2, 3, 4]));



//Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest)
//Examples : sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50], sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
//You have to sort array of numbers in ascending order

//function sortNumsAscending(array){ 
 //   return array.sort((a , b) => a - b)
//}
//console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));


//Create a function that sorts an array and removes all duplicate items from it.
//Examples: set([1, 3, 3, 5, 5]) ➞ [1, 3, 5], set([4, 4, 4, 4]) ➞ [4]
//as shown in examples, you have to remove the duplicates from an array and arrange them in ascending order

//   function set(array){ 
//       return array.filter((Element, index)=> 
//           array.indexOf(Element) === index
//       );
//   }

// console.log(set([4, 4, 4, 4]));

//Create a function that takes an array and returns the sum of all numbers in the array.
//Examples: getSumOfItems([2, 7, 4]) ➞ 13
//as shown in example you are expected to return sum of all numbers inside of an array

// function getSumOfItems(array){ 
//     let sum = 0;
//     for(let a of array)
//     sum += a;
//     return sum;
// }
// console.log(getSumOfItems([2, 7, 4]));