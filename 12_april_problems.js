//que 1: Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order
//Examples: minMax([1, 2, 3, 4, 5]) ➞ [1, 5], minMax([2334454, 10, 200, 5, 900]) ➞ [5, 2334454]
//Hint: First sort the array in ascending order and then pick first and last element from array and insert into new array and return that array

const minMax = (array) => {
  let sortedArray = array.sort((a, b) => a - b);
  let requiredArray = [sortedArray[0], sortedArray[sortedArray.length - 1]];
  return requiredArray;
};

console.log(minMax([90, 20, 51, 67, 1]));

//que 2: Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
//largestSwap(27) ➞ false, largestSwap(43) ➞ true
//If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand,
//swapping 43 gives us 34, and 43 > 34
//Hint: Take two digit number and reverse it, first convert number to string, convert string to array and then reverse the array and
// join the array and convert back it to number. Now compare input number with swapped number.

function largestSwap(number) {
  num = number.toString();
  num = num.split("");
  num = num.reverse();
  num = num.join("");
  num = parseInt(num);
  if (num > number) {
    return false;
  } else {
    return true;
  }
}
console.log(largestSwap(72));
//que 3: Create a function to return the amount of potatoes there are in a string
//Examples: potatoes("potato") ➞ 1, potatoes("potatopotato") ➞ 2
//Hint: https://www.codegrepper.com/code-examples/javascript/javascript+count+occurrences+of+word+in+string
//go to this site and check answer

function count(str) {
    return (str.split("potato")).length - 1;
}

console.log(count("potatopotato")) 

//que 4: Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
//The circles constructed must have two methods getArea() (PI*r^2) and
//getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

//Examples: let circy = new Circle(11)
//circy.getArea()
// Should return 380.132711084365
//let circy = new Circle(4.44)
//circy.getPerimeter()
// Should return 27.897342763877365
class Circle {
    constructor(radius) {
      this.radius = radius
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius
    }
    getArea() {
        return Math.PI * (this.radius * this.radius)
    }
  }

  let circle1 = new Circle(2)
  let circle2 = new Circle(10)

  console.log(circle1.getArea())
  console.log(circle2.getPerimeter())
