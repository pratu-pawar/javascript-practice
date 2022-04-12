//Que 1: A student learning JavaScript was trying to make a function. 
//His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. 
//Examples: nameString("Mubashir") ➞ "MubashirEdabit", nameString("Matt") ➞ "MattEdabit"

//function nameString(string){ 
 //   return string + "Edabit"
//}
//console.log(nameString("Mubashir"));


//Que 2: Create a function that returns the number of arguments it was called with
//Examples: numArgs() ➞ 0, numArgs("foo") ➞ 1
//  function numArgs(...args){ 
//      return args.length
//  }

// console.log(numArgs(1, 2, 3))

//Que 3: Create a function that takes a string of lowercase characters and returns that string reversed and in upper case
//Examples: reverseCapitalize("abc") ➞ "CBA", reverseCapitalize("hellothere") ➞ "EREHTOLLEH"

// function reverseCapitalize (string){ 
//    return string.split("").reverse().join("").toUpperCase()
    
// }
// console.log(reverseCapitalize("hellothere"));

//Que 4: You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. 
//Create a function to find out that integer.
//Examples: lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// 3 has no matching negative appearance.
function lonelyInteger(array){ 
 let positiveArray = array.filter(num => num > 0)
 let negativeArray = array.filter(num => num < 0).map(num => num * -1)
 
 if(positiveArray.length > negativeArray.length){
    var result = positiveArray.filter(item => negativeArray.indexOf(item) == -1)
     return result[0]
 }else{
    var result = negativeArray.filter(item => positiveArray.indexOf(item) == -1)
     let number = result[0]
     return number * (-1)
 }
}
console.log(lonelyInteger([1, -1, 2, -2, 3, -3, -4]));

//Que 5: A palindrome is a word that is identical forward and backwards.
//mom, racecar, kayak -> palidromes
//create a function that checks whether it is a palindrome
//Examples: checkPalindrome("mom") ➞ true, checkPalindrome("scary") ➞ false
//function checkPalindrome()

// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(palindrome("mom"))