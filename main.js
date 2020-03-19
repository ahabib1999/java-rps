var elementIds = ["rock_icon", "paper_icon", "scissor_icon", "cpu_rock_icon", "cpu_paper_icon", "cpu_scissor_icon"]

totalScore = {
    user: 0,
    cpu: 0
};
var userPreviousOption = null;
var cpuPreviousOption = null;


function userChoice(userKey) {
    if (userPreviousOption != null) {
        userPreviousOption.style.border = "none";
    }
    var userOption;
    if (userKey == 1) {
        userOption = document.getElementById(elementIds[0])
    }
    else if (userKey == 2) {
        userOption = document.getElementById(elementIds[1]);
    }
    else {
        userOption = document.getElementById(elementIds[2])
    }
    userPreviousOption = userOption;
    userOption.style.border = "10px solid yellow";

    var cpuKey = cpuChoice();
    totalScore = gameLogic(userKey,cpuKey);
    document.getElementById("user-score").innerHTML = totalScore.user
    document.getElementById("cpu-score").innerHTML = totalScore.cpu
}

// Randomly makes a choice between 1, 2 or 3 and returns it
function cpuChoice() {
    if (cpuPreviousOption != null) {
        cpuPreviousOption.style.border = "none";
    }
    var cpuOption, cpuKey;

    var randInt = Math.floor(Math.random() * 3);
    if (randInt == 0) {
        cpuOption = document.getElementById("cpu_rock_icon")
        cpuKey = 1
    }
    else if (randInt == 1) {
        cpuOption = document.getElementById("cpu_paper_icon")
        cpuKey = 2
    }
    else if (randInt == 2) {
        cpuOption = document.getElementById("cpu_scissor_icon")
        cpuKey = 3
    }
    cpuPreviousOption = cpuOption;
    cpuOption.style.border = "10px solid black";
    return cpuKey;
}

function gameLogic(userKey,cpuKey) {
    
    if (userKey == 1 && cpuKey == 2 || userKey == 2 && cpuKey == 3 || userKey == 3 && cpuKey == 1) {
        totalScore.cpu += 5;
        console.log("You lose");
    }
    else if (userKey == 1 && cpuKey == 3 || userKey == 2 && cpuKey == 1 || userKey == 3 && cpuKey == 2) {
        totalScore.user += 5;
        console.log("You win");
    }
    return totalScore;
    
}

function gameReset() {
    totalScore.user = 0
    totalScore.cpu = 0
    document.getElementById("user-score").innerHTML = totalScore.user
    document.getElementById("cpu-score").innerHTML = totalScore.cpu
    userPreviousOption.style.border = "none";
    cpuPreviousOption.style.border = "none";
    userPreviousOption = null;
    cpuPreviousOption = null;
}