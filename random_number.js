let heart = 10;
let point = 0;
let final_level = 1;
let max = 10, min = 0;
let chosenNumbers = []; 

document.getElementById("heart").innerText = heart;
document.getElementById("point").innerText = point;
document.getElementById("level").innerText = final_level;
document.getElementById("num2").innerText = max;

let random_number = Math.floor(Math.random() * (max - min + 1)) + min;

function checkNumber() {
    let choose_number = parseInt(document.getElementById("Choose-number").value);

    document.getElementById("result").innerText = choose_number;
    chosenNumbers.push(choose_number); 
    updateChosenNumbers(); 

    if (random_number === choose_number) {

        final_level++;
        max *= 10;
        point += 100;
        heart = 10;

        chosenNumbers = [];
        updateChosenNumbers();

        document.getElementById("num2").innerText = max;
        random_number = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("output").innerText = "Matched! Level Up!";
    } else {
        heart--;
        if (heart === 0) {
            document.getElementById("output").innerText = "Game Over! Restarting...";
            setTimeout(restartGame, 2000);
            return;
        }
        document.getElementById("output").innerText = random_number < choose_number
            ? "Too high! Try a lower number."
            : "Too low! Try a higher number.";
    }

    document.getElementById("heart").innerText = heart;
    document.getElementById("point").innerText = point;
    document.getElementById("level").innerText = final_level;
}

function updateChosenNumbers() {
    document.getElementById("chosen-numbers").innerText = chosenNumbers.length > 0 
        ? chosenNumbers.join(", ") 
        : "None";
}

function restartGame() {
    heart = 10;
    point = 0;
    final_level = 1;
    max = 10;
    min = 0;
    chosenNumbers = [];

    document.getElementById("heart").innerText = heart;
    document.getElementById("point").innerText = point;
    document.getElementById("level").innerText = final_level;
    document.getElementById("num2").innerText = max;
    document.getElementById("output").innerText = "Game Restarted. Try Again!";
    updateChosenNumbers(); 
    
    random_number = Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector("button").addEventListener("click", checkNumber);
