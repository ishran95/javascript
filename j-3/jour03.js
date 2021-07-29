// 01 - Array//

let fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access //

let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove //

let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
objects.pop();
console.log(objects);
objects.push("laptop");
objects.shift();
console.log(objects);

// 04 - Order //

let numbers = [4, 10, 8, 12, 6];
numbers = numbers.reverse();
console.log(numbers);
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// 05 - Boucle //

let total = 0;      
let limit = 10;
for (i = 0; i <= limit; i++) {
  total = total + i;
}
console.log(total);

// 06 - Reverse //
 
let string = "Hello Konexio !";
let splitted = string.split("");
let reversed = [];
for (i = 0; i <= splitted.length; i++) {   
  reversed.unshift(splitted[i]);
}
let result = reversed.join("");
console.log(result);

// Bonus //

for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 3 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("");
  } else {
    console.log(i);
  }
}

// Bonus II //

total = 0;
limit = 10;
i = 0;
while (i <= limit) {
total = total + i;
i++;
}
console.log(total);

// Bonus III //

let promo = ["a", "b", "c", "d"];
let min = 0;  
let max = promo.length - 1;
let random = Math.floor(Math.random() * (max - min + 1));
console.log(promo[random]);

// Bonus IV //

let arr = [];
let mini = 0;
let maxi = 100;
for (i = 0; i < 20; i++) {
let random = Math.floor(Math.random() * (maxi - mini + 1));
arr.push(random);
}

let arrayMax = arr[0];
for (i = 1; i < 20; i++) {
    if (arr[i] > arrayMax) {
        arrayMax = arr[i];
    }
} 
console.log(arrayMax);{
  
}
