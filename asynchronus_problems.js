//FOR ALL THE ANSWERS PLEASE COPY THIS URL IN CHROME AND YOU CAN REFER THE ANSWERS FROM THERE:
"https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md"

//Q1: Print "Hello, world" with a delay of 3 seconds
//Make use of setTimeout

// setTimeout(() =>{ 
//     console.log("Hello , world");

// },3000)

//Q2: Create a function which receives a function as argument and executes it after 2 seconds
// function callbackExec(callback) { 
//     if (typeof callback === 'function'){ 
//         setTimeout(() =>{ 
//             callback();
//             console.log("callback is executed after 2 sec");
//         },2000)
//     }

// }

// function displayHello(){ 
//     console.log('hello');
// }
// callbackExec(displayHello);

//Q3: Print numbers from 1 to 10 with delay of 1 second between each value being printed
//Make use of setTimeout

//const num1 = 1, num2 = 10;   //for loop use
//for( let i = num1; i <= num2; i++){ 
 //   setTimeout(() =>{ 
 //       console.log(i);
 //   }, 1000)
//}
//Q4: Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval
//Make use of setInterval

// const num1 = 1, num2 = 10;
// let i = num1;
// const intervalId = setInterval(() =>{ 
//     console.log(i++);
//     if(i === mum2 + 1)
//     clearInterval(intervalId)
// }, 1000)

// const num1 = 1, num2 = 10;   //for loop use
// for( let i = num1; i <= num2; i++){ 
//    setInterval(() =>{ 
//        console.log(i);
//        if(i === num2 + 1)
//        clearInterval(intervalId)
//     }, 1000)
// }

//Q5: Execute an array of asynchronous functions one after the other in sequence using callbacks
//Hints:
//1. The asynchronous function can be simulated using setTimeout which executes the callback
//2. The array of functions execution can be managed by having a function which takes care of execution of all the async functions
//3. Asynchronous functions need not be aware of the function to be executed and will take a callback as argument and execute it after completion
// function asyncFunc1(callback) { 
//     console.log('started asyncFunc1');
//     setTimeout(()=>{ 
//         console.log('completed asyncFunc1');
//         callback();
//     }, 3000);

// }
// function asyncFunc2(callback){ 
//     console.log('started asyncFunc2');
//     setTimeout(() =>{ 
//         callback();
//     }, 2000);

// }
// function asyncFunc3(callback){ 
//     console.log('started asyncFunc3');
//     setTimeout(() => {
//         console.log('completed asyncFunc3');
//     }, 1000);
// }
// function callbackManager(asyncFuncs){ 
//     function nextFuncExecutor() { 
//         const nextAsyncFunc = asyncFuncs.shift();
//         if (nextAsyncFunc && typeof nextAsyncFunc === 'function'){ 

            
//         }
//         nextFuncExecutor();
//     }
// }
// callbackManager([asyncFunc1, asyncFunc2, asyncFunc3]);

//Q6:Execute 3 asynchronous functions one after the other in sequence using promise chaining
//Hints:
//1. The implementation of chaining is that the result is passed through the chain of "then" handlers for all the promises
//2. "then" method on Promise also returns a promise which can be used to perform "then" on the returned promise
//3. The errors in promise / promise chaining can be handled with the error callback for each promise when it settles or with a generic catch block

asyncFunc1().then(
    () => { 
       console.log('Completed async1'); 
       asyncFunc2().then(
           () => { 
               console.log('Completed async2');
               asyncFunc3().then(
                   () => { 
                       console.log('Completed async3');
                       console.log('All succeeded');
                   },
                (err) => { 
                    console.log('Failure in  + err');
                }
               );  
           },
           (err) => { 
               console.log('Failure in  + err');
           }
       );
    },
    (err) => { 
        console.log('Failure in  + err');
    }
);


asyncFunc1()
.then(asyncFunc2)
.then(asyncFunc3)
. catch(() => { 
    console.log("errpor occured in one of the async function ");
});



//Q7: Execute 3 asynchronous functions one after the other in sequence using async await
//Hint: Async function with await for each promise can be used to execute in sequence
async function executor(){ 
 try{
     await asyncFunc1();
     await asyncFunc2();
     await asyncFunc3();
     console.log('All succeeded');
}
catch{ 
    console.log("Error occured");
}
} 