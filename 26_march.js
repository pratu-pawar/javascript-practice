//object in javascript//

// var thapatechnical = { 
//     firstname : "vinod",
//     lastname : "thapa",
//     age : 24,
//     profession: "webdeveloper"

// }
// console.log(thapatechnical);
//console.log(thapatechnical.firstname);

// change the property name//
//thapatechnical.profession = "youtuber";
//console.log(thapatechnical);

//add new property/
//thapatechnical.moddlename = "bhadur";
//console.log(thapatechnical);

//delate propertyname//
// delete thapatechnical.middlename;
// console.log(thapatechnical);

 
    // class studants{ 
    //     constructor(name, age, cls){ 
    //     this.myname = name;
    //     this.myage = age;
    //     this.mycls = cls;

//instance method
        //}
        // biodata(){ 
       // console.log(`i am a class method ${this.myname}.iam ${this.myage} years old and i am in class ${this.mycls}`);
        //  }
     
        
   // }

    //class player extends studants{ 
   //constructor(name, age, cls,game){ 
      // super(name ,age, cls, game);
    //this.mygame = game;
   //}

    // play_biodata(){ 
        // console.log(`${super.biodata()}`);
    // }



//    // }
// let obj1 = new studants('pratksha',23,'msc','footbool');


//let obj2 = new studants('suraj',24,'chemical engg);
// console.log(obj1.play_biodata());

//obj2.biodata();


//ASYNCHRONOUS JAVASCRIPT //

//HOSTING IN JAVASCRIPT//
// var myName;
// console.log(myName);

// myName = "pratu"

//scope chain and lexical scoping in javscript//
// let a = "hello guys.";  //globle scope 

//    const first = ()=> { 
//        let b = "how are you."

//         const second = ()=> { 
//             let c = "hi, i am fine thank you";
//             console.log(a+b+c);
//         }
//         second();
//          console.log(a+b+c);  // i cant use c
//    }

// first();

//CLOUSUER IN JAVASCRIPT //
// const outerfun = (a) => { 
//     let b = 10;
//     const innerfun = () => { 
//         let sum = a+b;
//         console.log(`the sum of the no is ${sum}`);
//     }
//      return innerfun;
// }
// let checkclousure = outerfun(5);
// console.dir(checkclousure);

//asynchronous javascript //

// const fun2 = () => { 
//     setTimeout(() =>{ 
//         console.log(`function 2 is called`);
//     },2000
//     );
// }
// const fun1 = ()=>{ 
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 called again`);
// }
// fun1();

//currying function //
 //sum (5)(3)(8)
// sum(5)(3)(8)
// function sum(num1){ 
//     console.log(num1);
//     return function(num2){ 
//         console.log(num1, num2);
//         return function (num3){ 
//             console.log(num1+ num2 + num3);
//         }
        
//     }

// }

//currying function use in fat arrow fuction


// const fun = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

// callBack hell //
// setTimeout(()=>{ 
//    console.log(`1work is done`);
//       setTimeout(() => { 
//           console.log(`2 work is done`);
//            setTimeout(() => {
//                console.log(`3work is done`);
//                    setTimeout(() => {
//                        console.log(`4 work is done`);

//                    }, 1000);
                   
//            },1000 );


//       },1000);



// },1000);

