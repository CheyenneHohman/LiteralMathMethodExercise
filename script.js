let warmHugs = "Hi, I'm Olaf and I like warm hugs."

console.log(warmHugs.toUpperCase()); // HI I'M OLAF AND I LIKE WARM HUGS.

console.log(warmHugs.replace("like", "love")); // Hi, I'm Olaf and I love warm hugs.

warmHugs = warmHugs.replace("like", "love");

let beenImpaled = "Oh, look at that. I've been impaled.";

console.log(beenImpaled.slice(18)); // I've been impaled. 

let dotDotDot = `...`

let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

console.log(Math.PI);

// let randomNumber = Math.random();

// randomNumber *= 3;

// randomNumber = Math.floor(randomNumber);

// randomNumber++;

// console.log(randomNumber); // range 1-3

//Alternate way 
let randomNumber = Math.floor(Math.random()*3 +1);
console.log(randomNumber);

//BONUS 

//let itGo = " Let It Go!";
//console.log(itGo.repeat(2); itGo.toUpperCase); 6. Using only one line of code, create the following string " Let It Go!" and change it to "LET IT GO! LET IT GO!" (NOTE: Notice the space before " Let" as well as the space between "GO! LET". Also, NOT allowed to use the replace method to complete this. Finally, a variable is NOT required to complete this.)

console.log(" Let It Go!".repeat(2).toUpperCase());

let reindeers = "Reindeers are better than people.";
console.log(reindeers.replace(/ /g, '_')); //Reindeers_are_better_than_people.

console.log(Math.sqrt(2)); //1.4142135623730951

/* let newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber += 7;
newRandomNumber = Math.floor(newRandomNumber);
console.log(newRandomNumber); */

let newRandomNumber = Math.floor((Math.random()*(23-7+1)+7));
console.log(newRandomNumber);