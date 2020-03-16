var elementIds = ["rock_icon", "paper_icon", "scissor_icon", "cpu_rock_icon", "cpu_paper_icon", "cpu_scissor_icon"]

totalScore = {
    user: 0,
    cpu: 0
};

function userChoice(userKey) {
    var userOption
    if (userKey == 1) {
        userOption = document.getElementById(elementIds[0])
    }
    else if (userKey == 2) {
        userOption = document.getElementById(elementIds[1]);
    }
    else {
        userOption = document.getElementById(elementIds[2])
    }
    userOption.style.border = "10px solid orange";
    
    var cpuKey = cpuChoice();
    totalScore = gameLogic(userKey,cpuKey);
    document.getElementById("score").innerHTML = totalScore.user + " - " + totalScore.cpu; 
}

// Randomly makes a choice between 1, 2 or 3 and returns it
function cpuChoice() {
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
    
    cpuOption.style.border = "10px solid orange";
    return cpuKey;
}

// This compares user and cpu choice and returns score
// Input: userKey, cpuKey
// Output: score = {
    //user: Number,
    //cpu: Number

function gameLogic(userKey,cpuKey) {
    
    if (userKey == 1 && cpuKey == 2 || userKey == 2 && cpuKey == 3 || userKey == 3 && cpuKey == 1) {
        totalScore.cpu += 1;
    }
    else if (userKey == 1 && cpuKey == 3 || userKey == 2 && cpuKey == 1 || userKey == 3 && cpuKey == 2) {
        totalScore.user += 1;
    }
    return totalScore;
    
}

function gameReset() {
    for (i = 0; i < elementIds.length;i++) {
        document.getElementById(elementIds[i]).style.borderStyle = "none";
    }

}