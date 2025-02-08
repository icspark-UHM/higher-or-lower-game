// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
    if (random < nextRandom) {
        window.alert("Higher! You win!");
    }
    else if (random > nextRandom) {
        window.alert("Lower! You lose!");
    }
    else {
        window.alert("It's the same number again!");
    }
    generateRandom();
}

// Function for the lower button
function lower() {
    if (random > nextRandom) {
        window.alert("Lower! You win!");
    }
    else if (random < nextRandom) {
        window.alert("Higher! You lose!");
    }
    else {
        window.alert("It's the same number again!");
    }
    generateRandom();
}

//Generate a number to start the game!
generateRandom();