// 01 - File System //

let fs = require("fs");

console.log("C'est parti pour la recherche :");

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        console.error(err);
       return;
    }
 
    console.log("Lecture en différé : " + data.toString());
 });

//  02 - Map Double //
 
let  numbers = [1, 2, 3, 4, 5];

let doubles = numbers.map(function(num) {
  return num * 2;
});

 console.log(doubles);

// 03 - Map Names //
//let name = ["ishran", "didier"] //
 let longNames = 
 [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
//MAP = boucle//
let shortNames = longNames.map(function(name) { 
   console.log("longNames.map name", name);
   return ;
 });

 // 04 - Filter Numbers //

 let array = [1, "toto", 34, "javascript", 8, -5];
 let numbers = array.filter(function(element) {
     return typeof element === "number";
    return element > 0;
    return isNaN(element) === false;
     return parseInt(element) === element;
 })
 console.log(numbers);
 
 // 05 - Filter Even//

 let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(even);

//06 - Cakes //

let cake =[
  {
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]
let chocolatesCake = cakes.filter(function(element) {
  return element.flavor === "chocolate";
}).map(function(element) {
  element.status = "Sold out !";
  return element;
});

console.log(chocolatesCak);

// BONUS //

let prompt = require("prompt");
let randomWords = require("random-words");

let wordLength = 5;
let mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
while (mysteryWord.length !== wordLength) {
  mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
}

let schema = {
  properties: {
    letter: {
      description: "Enter a letter",
      pattern: new RegExp(`^[a-z]{1}$`),
      required: true,
    },
  },
};

var letters = [];

function displayMisteryWord() {
  return mysteryWord
    .split("")
    .map(function (letter) {
      if (letters.indexOf(letter) === -1) {
        return "_";
      } else {
        return letter;
      }
    })
    .join(" ");
}

function numberOfMissingLetters() {
  var missingLetters = mysteryWord.split("").filter(function (letter) {
    return letters.indexOf(letter) === -1;
  });

  return missingLetters.length;
}

function guess(remainingTry) {
  console.log(`Find the mystery word: ${displayMisteryWord()}`);

  prompt.get(schema, (err, result) => {
    letters.push(result.letter);

    if (numberOfMissingLetters() === 0) {
      console.log(`Congrats, you found the mystery word: ${mysteryWord}`);
    } else {
      remainingTry--;
      if (remainingTry === 0) {
        console.log(`You loose, the mistery word was: ${mysteryWord}`);
      } else {
        console.log(`Ooops... only ${remainingTry} ${remainingTry === 1 ? "chance" : "chances"}`);
        guess(remainingTry);
      }
    }
  });
}

prompt.start();
guess(10);
