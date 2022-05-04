//Que 1: The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants,
//and 20% after-tax income on savings or paying off debt.
//Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows,
// how much a person needs to spend on needs, wants, and savings.

//Examples: fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
//Hint: for given amount divide it into 10 parts, then for "needs" multiply one part by 5, for "wants" multiply by 3 and for
// "savings" multiply by 2. Finally put that values in object and return that object.

const fiftyThirtyTwenty = (money) => {
  let onePart = money / 10;
  let needs = onePart * 5;
  let wants = onePart * 3;
  let savings = onePart * 2;
  return { Needs: needs, Wants: wants, Savings: savings };
};

console.log(fiftyThirtyTwenty(7585))

//Que 2: Create a function that takes a whole number as input and returns the shape with that number's amount of sides.
//Here are the expected outputs to get from these inputs.
// Inputs	Outputs
// 1	    "circle"
// 2	    "semi-circle"
// 3	    "triangle"
// 4	    "square"
// 5	    "pentagon"
// 6	    "hexagon"
// 7	    "heptagon"
// 8	    "octagon"
// 9	    "nonagon"
// 10	    "decagon"

//Examples: nSidedShape(3) ➞ "triangle", nSidedShape(1) ➞ "circle"

//Hint: I'll create objects for shapes and inputs, you will have to use for...in loop to determine the shape for given input
//Example of for...in loop:

const sideObject = {
  1: "circle",
  2: "semi-circle",
  3: "triangle",
  4: "square",
  5: "pentagon",
  6: "hexagon",
  7: "heptagon",
  8: "octagon",
  9: "nonagon",
  10: "decagon",
};

function nSidedShape(sides) {
  for (const property in sideObject) {
    if (sides == property) {
      return sideObject[sides];
    }
  }
}

console.log(nSidedShape(5));
