// 1. Pick a penguin from Wikipedia's List of Fictional Penguins and
//create an object named myPenguin with properties that represent the information
//(for example: the character's name, origin, and author).
var myPenguin = { 
    character: "Tootsie the penguin",
    origin: "Donald duck",
    author:"A P J abdul kalam"
      

};

console.log(myPenguin);


// 2. Use console.log() to print the penguin's name to the console as part of a welcome message,
//like "Hello, I'm a penguin and my name is [NAME HERE]!"

var person = "hello, i am penguin and my name is " + myPenguin.character

console.log(person);




// 3. Write another line of code that adds a new property to your penguin called canFly and set it to false.
//(Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

myPenguin.canfly = false;

console.log(myPenguin);

// 4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
//(Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
myPenguin.chirp = function () { 
    console.log("CHIRP CHIRP! Is this what penguins sound like?");

}
console.log(myPenguin.chirp());

// 5. Add another method to your penguin called sayHello that prints to the console the same message from step 2 above.
//But this time, be sure to use the "this" keyword to access your penguin's name,
//so that way if you change its name later, your method will still work!

myPenguin.sayHello = function(){ 
    this.author = "A K Ramanujan";
    console.log("hello i am penguin and my name is " + this.author);
}
console.log(myPenguin.sayHello());

// 6. Next, call your penguin's sayHello() method and make sure that it works!
//(Hint: if you need an example of what it looks like when you call a method of an object
//look at console.log() -- that's how you call the log() method of the console object

myPenguin.sayHello()


// 7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace"
//and then call your penguin's sayHello() function one more time to make sure it still works.

myPenguin.character = "Penguin McPenguinFace";
 myPenguin.sayHello();

 console.log(myPenguin.sayHello());

// 8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console
//if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.canfly = function(){ 
    if("i can fly"){ 
        console.log(true);

}else("No flying for me") 
    console.log(false);
}


console.log(myPenguin.canfly());

// 9. Call your penguin's fly() method and make sure it works!
myPenguin.fly = function() { 
    console.log("hello fly method");
}
console.log(myPenguin.fly());
// 10. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canfly = true;

console.log(myPenguin);
// 11. Now call y;ur penguin's fly() method again and make sure it works as expected!
myPenguin.fly();

// 12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

   for (property in myPenguin) {
       console.log(property);
     }
     console.log();
// 13. Write another for ... in loop to print the value of each key to the console.
//(Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

//Answers
//1.
// var myPenguin = {
//   character: "Tootsie the Penguin",
//   origin: "Donald Duck",
//   notes: 'A baby penguin in the classic 1939 cartoon "Donald\'s Penguin".',
// };

//2. 
//console.log("Hello, I'm a penguin and my name is " + myPenguin.character + "!");

//3. 
//myPenguin.canFly = false;

//4. 
//myPenguin.chirp = function () {
//   console.log("CHIRP CHIRP! Is this what penguins sound like?")
// }

//5. 
//myPenguin.sayHello = function () {
//   console.log("Hello, I'm a penguin and my name is " + this.character + "!");
// };

//6. 
//myPenguin.sayHello();

//7. 
//myPenguin.character = "Penguin McPenguinFace";
// myPenguin.sayHello();

//8. 
//myPenguin.fly = function () {
//   if (this.canFly) {
//     console.log("I can fly!");
//   } else {
//     console.log("No flying for me!");
//   }
// };

//9. 
//myPenguin.fly();

//10. 
//myPenguin.canFly = true;

//11. 
//myPenguin.fly();

//12. 
//for (property in myPenguin) {
//   console.log(property);
// }

//13. 
//for (property in myPenguin) {
//   console.log(myPenguin[property]);
// }
