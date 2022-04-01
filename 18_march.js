//ARRAYS IN JAVASCRIPT //
//traversal of an array //,
// var myFreinds = ['vinod', 'ramesh', 'arjun','vishal'];
// console.log()

// console.log(myFreinds[3]);

//ifwe want to chake the length of elements of an array//
// console.log(myFreinds. length);

// for in loop //
// var myFreinds = ['pratu','surr', 'om','sheetal']
// for(let elements in myFreinds){ 
//     console.log(elements);
// }
// //for of loop //

// for(let elements of myFreinds){ 
//     console.log(elements);
// }

// array proto type //
// for each()//
// var myFreinds = ['pratu' ,"surr",'om','sheetal'];
// myFreinds. forEach(function(elements, index, array){ 
//     console.log(elements + " inde : " + index + " " + array );
// });

// //fat arrow//
// var myFreinds = ['pratu' ,"surr",'om','sheetal'];
// myFreinds. forEach((elements, index, array) => { 
//     console.log(elements + " inde : " + index + " " + array );
// });

// //searching and filter in an array //
// //index of()//
// var myFreinds = ['vinod', 'bhadur', ' thapa' , 'thapatechnical', 'thapa'];
// console.log(myFreindNames. indexof('thapa', 3));

// last index of //
//var myFriendNames = ['vinod','bhadur','thapa','thapatechnical', 'thapa'];
//console.log(myFriendNames.lastIndexOf('thapa', 3));

//includes() //

//var myFriendNames = ['vinod','bhadur','thapa','thapatechnical', 'thapa'];
//console.log(myFriendNames.includes('thapa', 3));

//find //
//const prices = [200,300, 400, 350, 450, 500, 600];
//prices < 400
//const findEelm = prices.find((currVal) => { 
//  //  return currVal < 400
//});
//console.log(findEelm);

//find index() //

//console.log(prices.find((currVal)  => currVal < 1400) );

//filter ()//

//const price = [200,300, 400, 350, 450, 500, 600];
//price < 400
//const newPriceTag = prices.filter((elem, index) => { 
//  //  return elem < 400;

//})
//console.log(newPriceTag);

// array subsection// //how to start an array //

//array sort ()//

//const months = ['March', 'Jan','April','Feb','Dec','Nov'];
//sole.log(months.sort());

//const array1 = [1, 30, 4, 21, 100000, 99];
//console.log(array1.sort());

// PERFORM CRUD //
// push ()//                                //end adition //
//const animals =['pigs', 'goata','sheep'];
//animals.push('parrot');
//console.log(animals);

// unshift () //                            //start adittion //
//const animals =['pigs', 'goata','sheep'];
//animals.unshift('chicken','parrot')
//console.log(animals);

//const numbers =[1, 2, 3, 4, 5, 6];
//numbers.unshift(7,8)
//console.log(numbers);

//pop()//       remove last array

//const plants = ['broccoli' , 'cauliflower', 'ksle','tomato','cabbage'];
//console.log(plants);
//console.log(plants.pop());
//console.log(plants);

//shift//
// const plants = ['broccoli' , 'cauliflower', 'ksle','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());

//map , filter,reduce method //
//map//
// const array1 = [1, 4, 9, 16, 25];
// num > 9 new
// let newArr = array1.map((currElem, index, array) => { 
//     return currElem > 9;

// })
// console.log(array1);
// console.log(newArr);
// let newArr = array1.map((curElm, index, array)=> { 
//     return `index no =${index} and the value is ${curElm} belong to ${array}`
// })
// console.log(newArr);

//REDUCE METHOD //
//accumlator, curr value, current index, array
// let arr = [5, 6, 2];
// let sum = arr.reduce((accumlator, curElem, index , arr) => { 
//     return accumlator *= curElem;

// })
// console.log(sum);

//STRING IN JAVASCRIPT //
//LENGTH//
//let myName = "pratiksha pawar";
//console.log(myName.length);

//escape character
// let anySentence = "we are the so-called \"vikings\" from the north.";
// console.log(anySentence);

//let anySentence = 'we are the so-called \'vikings\ from the north.';
//console.log(anySentence);

//string to string
//index of()
// const myBioData = 'i am the thapa technical';
// console.log(myBioData.indexOf("Thapa"));

//last index of()
// const myBioData = 'i am the thapa  technical';
// console.log(myBioData.lastIndexOf("t", 6));
