//Que 1: Create a function that takes an array of 10 numbers (between 0 and 9) and 
//returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555)
//Examples: formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(array){ 
    return `(${array.slice(0, 3).join('')}) ${array.slice(3, 6).join('')} - ${array.slice(6).join('')}`;

}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//Que 2: Create a function that takes two numbers as arguments (num, length) and 
//returns an array of multiples of num until the array length reaches length
//Examples: arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35], arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

//Que 3: Given an array of boxes, create a function that returns the total volume of all those boxes combined together. 
//A box is represented by an array with three elements: length, width and height.
//For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since 
//(2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
//totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]
//Examples: ) ➞ 63, totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

x =  sumAll([2, 2, 2], [2, 1, 1]);
function sumAll(){ 
    var i ;
    
    for (i = 0; i < arguments.length; i++){ 
        sum += arguments[i];
    }
    return sum;

}

console.log(sumAll());