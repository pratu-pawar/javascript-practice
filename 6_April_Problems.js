//Que 1: Write a function to check if an array contains a particular number.
//Examples: check([1, 2, 3, 4, 5], 3) ➞ true, check([1, 1, 2, 1, 1], 3) ➞ false
//In above examples, we need to check if given number is present in given array

// function check(array){ 
//     return array.includes();
//     }
//     console.log(check([1, 1, 2, 1, 1], 3));


//Que 2: Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. 
//This is calculated by subtracting the number of downvotes from upvotes
//Examples: getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13, getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
//As you can see, we have passed an object to a function and object contains two key-value pairs, upvotes and downvotes respectively
//Your task is substract downvotes from upvotes and return that number


//Que 3: Create a function that accepts an array and returns the last item in the array.
//Examples: getLastItem([1, 2, 3]) ➞ 3, getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//In above example, array is passed to function and you have to return last element of that array

//function getLastItem(array){ 
//    return array.slice(-1);
//}
//console.log(getLastItem(["cat", "dog", "duck"]));

//Que 4: Create a function that takes an array of numbers or letters and returns a string.
//Examples: arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456", arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
//As shown in example, you have to return concatenated string of array's elements

// function arrayToString(array, string) { 
//     return array.join("");

// }

// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));


//Que 5: Write a function to reverse an array.
//Examples: reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1], reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
//You have to reverse the whole array which is passed to function

// function number(array){ 
//     return array.reverse();

// }

// console.log(number([9, 9, 2, 3, 4]));