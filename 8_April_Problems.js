//Que 1: Create a function that returns true when num1 is equal to num2; otherwise return false
//Examples: isSameNum(4, 8) ➞ false, isSameNum(2, 2) ➞  true

// function isSameNum(num2){ 
//     var num1 = num2 ;
//     if(num1){ 
//         return "true"
//     }else{ 
//         return "false"
//     }
        
//     }


// console.log(isSameNum(2, 2) );

//Que 2: Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10
//Examples: makesTen(9, 10) ➞ true, makesTen(9, 9) ➞ false, makesTen(1, 9) ➞ true

// function makesTen(a, b){ 
//     return ((a == 10 || b == 10) || (a + b == 10));
// }
// console.log(makesTen(1, 9));


//Que 3: A bartender is writing a simple program to determine whether he should serve drinks to someone. 
//He only serves drinks to "people 18" and older and when "he's not on break".
//Examples: shouldServeDrinks(17, true) ➞ false, shouldServeDrinks(19, false) ➞ true, shouldServeDrinks(30, true) ➞ false
//as shown in above examples, first argument is age of person and second argument determines if bartender is present or not,
//true means present and false means he is on break

//Que 4: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers
//Examples: isEvenOrOdd(3) ➞ "odd", isEvenOrOdd(146) ➞ "even"

// function isEvenOrOdd(odd,even){ 
//     var num = 146
// if( num%2==0){ 
//     return "is an even no"
// }else(num == 1)
//    return "is an odd no"
// }

// console.log(isEvenOrOdd() ); 


//Que 5: Luke Skywalker has family and friends. 
//Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

//Person	    Relation
//Darth Vader	father
//Leia	        sister
//Han	        brother in law
//R2D2	        droid

//In above table relation of each person with luke is given, consider the example: 
//relationToLuke("Darth Vader") ➞ "Luke, I am your father."
//In example you can see Darth Vader is father of luke hence we returned the "Luke, I am your father."
//If person passed to function id R2D2 then output will be "Luke, I am your droid."
function relationToLuke(string){ 
     return "luck i am your" + " " + "father"+ string
}
console.log(relationToLuke());