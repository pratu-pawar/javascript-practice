//que 1: Write a function that returns the string "something" joined with a space " " and the given argument a
//for example, if your function is giveSomething("is in the air"), where "is in the air" is argument for function \
//then expected output is "something is in the air"

//que 2: Create a function that will handle simple math expressions. The input is an expression in the form of a string.
//calculator("23+4") ➞ 27
//calculator("45-15") ➞ 30
//calculator("13+2-5*2") ➞ 5
//calculator("49/7*2-3") ➞ 11
//above given are sample examples, you are expected to give output as shown above for passed string as an argument to function

//que 3: Create a function that returns true if a string is empty and false otherwise
//Examples: isEmpty("") ➞ true, isEmpty(" ") ➞ false, isEmpty("a") ➞ false
//as shown in examples, you should return if given string is empty or not

//que 4: Create a function that takes a word and returns the new word without including the first character
//Examples : newWord("apple") ➞ "pple", newWord("cherry") ➞ "herry", newWord("plum") ➞ "lum"
//as shown in examples, you should return string after taking out first alphabet of string

//que 5: Create a function that takes an array of numbers or letters and returns a string
//Examples : arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456", arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef", 
//arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
//as shown in examples, you should return concatenated string of string of array

//que 6: Create a function that takes an array and a string as arguments and returns the index of the string
//Examples: findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2, findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
//as shown in examples, two arguments are passed to function, first one is array and next is string, you are expected to find index of
//that string inside the passed array


//que 7: Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s"
//Examples: isPlural("changes") ➞ true, isPlural("change") ➞ false
//as shown in examples, you should return if given string contains "s" at the end of string


//que 8: Create a function that takes a string and returns the concatenated first and last character
//Examples : firstLast("ganesh") ➞ "gh", firstLast("kali") ➞ "ki"
//as shown in examples, you should return string with concatenation of first and last letter of passed string

//que 9: Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". 
//However, if no argument is passed, return "Today, I am feeling neutral"
//Examples: moodToday("happy") ➞ "Today, I am feeling happy", moodToday() ➞ "Today, I am feeling neutral"
//as shown in examples, you should return string with attaching passed "mood" at the end of "Today, I am feeling"
//if no "mood" is passed then you should return "Today, I am feeling neutral"


//que 10: Given a letter and an array of words, return whether the letter does not appear in any of the words
//Examples : forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false, forbiddenLetter("m", []) ➞ true
//as shown in examples, single letter as argument and array of strings are passed as argument to function
//you are expected to check if passed letter is present in array of string and if it is present then return true else rerurn false.