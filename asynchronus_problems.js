//FOR ALL THE ANSWERS PLEASE COPY THIS URL IN CHROME AND YOU CAN REFER THE ANSWERS FROM THERE:
"https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md"

//Q1: Print "Hello, world" with a delay of 3 seconds
//Make use of setTimeout

//Q2: Create a function which receives a function as argument and executes it after 2 seconds


//Q3: Print numbers from 1 to 10 with delay of 1 second between each value being printed
//Make use of setTimeout

//Q4: Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval
//Make use of setInterval

//Q5: Execute an array of asynchronous functions one after the other in sequence using callbacks
//Hints:
//1. The asynchronous function can be simulated using setTimeout which executes the callback
//2. The array of functions execution can be managed by having a function which takes care of execution of all the async functions
//3. Asynchronous functions need not be aware of the function to be executed and will take a callback as argument and execute it after completion

//Q6:Execute 3 asynchronous functions one after the other in sequence using promise chaining
//Hints:
//1. The implementation of chaining is that the result is passed through the chain of "then" handlers for all the promises
//2. "then" method on Promise also returns a promise which can be used to perform "then" on the returned promise
//3. The errors in promise / promise chaining can be handled with the error callback for each promise when it settles or with a generic catch block

//Q7: Execute 3 asynchronous functions one after the other in sequence using async await
//Hint: Async function with await for each promise can be used to execute in sequence