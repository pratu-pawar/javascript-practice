//Que 1: Create a function that returns true when num1 is equal to num2; otherwise return false
//Examples: isSameNum(4, 8) ➞ false, isSameNum(2, 2) ➞  true

function isSameNum(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}

console.log(isSameNum(2, 2));

//Que 2: Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10
//Examples: makesTen(9, 10) ➞ true, makesTen(9, 9) ➞ false, makesTen(1, 9) ➞ true

function makesTen(a, b) {
  return a == 10 || b == 10 || a + b == 10;
}
console.log(makesTen(1, 9));

//Que 3: A bartender is writing a simple program to determine whether he should serve drinks to someone.
//He only serves drinks to "people 18" and older and when "he's not on break".
//Examples: shouldServeDrinks(17, true) ➞ false, shouldServeDrinks(19, false) ➞ true, shouldServeDrinks(30, true) ➞ false
//as shown in above examples, first argument is age of person and second argument determines if bartender is present or not,
//true means present and false means he is on break

function shouldServeDrinks(age, bartenderOnBreak) {
  if (age > 18 && bartenderOnBreak == false) {
    return true;
  } else {
    return false;
  }
}

console.log(shouldServeDrinks((19, false)));

//Que 4: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers
//Examples: isEvenOrOdd(3) ➞ "odd", isEvenOrOdd(146) ➞ "even"

function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(isEvenOrOdd(5));

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
function relationToLuke(person) {
  if(person == "Darth Vader"){
    return "Luke, I am your father."
  }else if(person == "Leia"){
    return "Luke, I am your sister."
  }else if(person == "Han"){
    return "Luke, I am your brother in law."
  }else if(person == "R2D2"){
    return "Luke, I am your droid."
  }
}
console.log(relationToLuke("R2D2"));
