//searching for a string in a string //
//search
//const myBioData = 'i am the thapa technical';
//let sData = myBioData.search('thapa');
//console.log(sData);

//extracting string //
//slice 
//var str = "apple , bananaa , kiwi ";

//let res = str.slice(7, -3);
//console.log(res);

// substring method //
//var str = "apple , bananaa , kiwi ";
//let res = str.substring(0 , 4);
//console.log(res);

//substr//
// var str = "apple , bananaa , kiwi "
// let res = str.substring( -4)
// console.log(res);

// replasing string content //
//let myBioData = 'i am vinod bhadur thapa vinod';
//let replaceData = myBioData.replace('vinod','Vinod');
//console.log(replaceData);

//extracting string character//
//charAt//
//let str = "HELLO WORLD";
//console.log(str.charAt(4));

// the charCode(method) //          unicode value//
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(8));

//proparty access//
//var str = "HELLO WORLD"
//console.log(str [2]);

// other usefull method //
//uppercase and lowecase //
//let myName = "vinod thapa";
//console.log(myName.toLowerCase());
//console.log(myName.toUpperCase());

//concat
//let fName =  'vinod';
//let lName = 'thapa';
//console.log(fName + lName);
//console.log(`${fName} . ${lName}`);

//string trim//
//var  str = "             hello world         "
//console.log(str.trim());

//converting to srting to an array //
//var txt = "a,b,c |,d,e,";           //string
//console.log(txt.split(","));         // split on commas
//console.log(txt.split(" "));       //split on space
//console.log(txt.split("|"));       //split on pipe


//DATE TIME IN JAVASCRIPT //
//NEW DATE()
//let currDate = new Date()
//cnsole.log(currDate);
//console.log(new Date());
//console.log(new Date().toLocaleString());
//console.log(new Date().toString());

//console.log(Date.now());  //milisecond

//new Date (year, month)
//var d  = new Date(2021, 0, 5, 10, 33, 30, 0 );
//console.log(d.tolocalstring());

//new date
//var d = new Date( "march24,2022 08:02:00 AM")
//console.log(d.toLocaleString());

//new date millisecond /

//var d = new Date(86400000*2)
//console.log(d.toLocaleString());


//date methods// how to get indivisual date
//const currDate = new Date()
//console.log(currDate.tolocalestring());
//console.log(currDate.getfullyear());
//console.log(currDate.getmonth());
//console.log(currDate.getDate());
//console.log(currDate.getDay());

//how to set the indivisual date
// console.log(currDate.setFullYear(2022));
// console.log(currDate.setFullYear(2022, 10, 5));
// console.log(currDate.setMonth(10));
// console.log(currDate.setDate(5));
// console.log(currDate.tolocalestring());

//time method//
//const curTime = new Date();
//console.log(curTime.getTime());
//cnsole.log(curTime.getHours());
//console.log(curTime.getMinutes());
//console.log(curTime.getSeconds());
//console.log(curTime.getMilliseconds());

//how to set indivisual time //
//let curTime = new Date();
//console.log(curTime.setTime());
//console.log(curTime.setHours(5));
//console.log(curTime.setMinutes(5));
//console.log(curTime.setSeconds(5));
//console.log(curTime.setMilliseconds(5));

// javascript math object //
//console.log(Math.PI)
//console.log(Math.PI);

//Math.round()
//let num = 10.499;
//console.log(Math.round(10.599));

//Math power//
//console.log(Math.pow(4,2));

//Math sqrt()//squar root
//console.log(Math.sqrt(25));
//console.log(Math.sqrt(81));
//console.log(Math.sqrt(66));

//math abs() math absolute retuns the absolute positive value

//console.log(Math.abs(-55));
//console.log(Math.abs(-55.5));
//console.log(Math.abs(-955));
//console.log(Math.abs(4-6));

//math.ceil()//
//console.log(Math.ceil(4.51));
//console.log(Math.ceil(99.1));

//math floor  //
//console.log(Math.floor(4.7));
//console.log(Math.floor(99.1));

//math minimum /
//console.log(Math.min(0, 150, 30, 20, -8, -200));

//math max //
//console.log(Math.max(0, 150, 30, 20, -8, -200));

//math .random()//
//console.log(Math.random());

//console.log(Math.floor(Math.random()*10));

//math.trunc ()//
//console.log(Math.trunc(4.6));
//console.log(Math.trunc(-99.1));

console.log(Math.trunc(-34.5));