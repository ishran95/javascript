// Exercice 1 - Object //

let cat = {
    name: "Miaouss",
    age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);
if (cat.isCute) {
    console.log("So cute !");
}

// Exercice 2 - Combine //

let cat2 = {
    name: "Nekomata",
    age: 20,
    isCute: false
};
console.log("cat :", cat);
console.log("cat2 :", cat2);
let cats = [cat, cat2];
console.log("cats :", cats);
console.log(cat.age, cats[0].age);
console.log(cat2.isCute, cats[1].isCute);

// Exercice 3 - Even //

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(4);
checkIfEven(5);
checkIfEven(567);
checkIfEven(786789087);

// Exercice 4 - Compare //

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`);
    } else {
        console.log("Both are the same");
    }
}

compare(14, 10);
compare(16, 10);
compare(20, 20);

// Exercice 5 - Add up //

function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let result = addUp(12);
console.log(result);
addUp(12);

// Exercice 6 - Time  //

function format(num) {
    

    let hours = Math.floor(num / 3600);
    let restHours = num % 3600;
    let minutes = Math.floor(restHours / 60);
    let secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}

function formatWithoutMaths(num) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
     let seconds = 0;
    for (let i = 0; i < num; i++) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 24) {
            days++;
            hours = 0;
        }
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

function adamaFormat(num) {
    
    let hours = Math.floor(num / 3600);
    let rest = num - hours * 3600;
    let minutes = Math.floor(rest / 60);
    let seconds = rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700);
formatWithoutMaths(3700);
adamaFormat(3700);

// Bonus 1 - Generate password //

function generatePassword(num) {
    let max = 135;
    let min = 80;
    let password = "KONEXIO";
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        while (randomIndex >= 58 && randomIndex <= 64) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        }
        let letter = String.fromCharCode(randomIndex);
        password += letter;
    }

    console.log(password);
}
generatePassword(10);


// Bonus 2 - Jeu de dé //

function launchDice(numberOfDice) {
    let mini = 3;
    let maxi = 8;
    let sum = 0;
    for (let i = 0; i < numberOfDice; i++) {
        let dice = Math.floor(Math.random() * (maxi - mini + 1) + mini);
        sum += dice;
    }
    return sum;
}

let player1 = launchDice(5);
let player2 = launchDice(5);
if (player1 > player2) {
    console.log("player one win")
} else if (player1 < player2) {
    console.log("player two win")
} else {
    console.log("equality");
}

