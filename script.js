// ===============================
// SAURABH GIRI BUSINESS TYCOON
// script.js
// ===============================

let money = Number(localStorage.getItem("money")) || 100;
let level = Number(localStorage.getItem("level")) || 0;

const business = [
    "Tea Stall",
    "Cafe",
    "Restaurant",
    "Hotel"
];

const images = [
    "assets/tea_stall.jpg",
    "assets/cafe.jpg",
    "assets/restaurant.jpg",
    "assets/hotel.jpg"
];

const upgradeCost = [
    500,
    2000,
    10000
];

updateUI();

function earn() {
    let income = 10 + (level * 20);
    money += income;
    updateUI();
}

function autoIncome() {
    money += 5 + (level * 10);
    updateUI();
}

setInterval(autoIncome, 1000);

function upgrade() {

    if (level >= business.length - 1) {
        alert("🎉 Maximum Business Reached!");
        return;
    }

    if (money >= upgradeCost[level]) {

        money -= upgradeCost[level];
        level++;

        alert("Congratulations!\nYou unlocked " + business[level]);

        updateUI();

    } else {

        alert(
            "Need ₹" +
            upgradeCost[level] +
            " to upgrade."
        );

    }

}

function updateUI() {

    document.getElementById("cash").textContent = money;

    document.getElementById("level").textContent =
        "Business : " + business[level];

    const img = document.querySelector("#business img");

    if (img) {
        img.src = images[level];
    }

    saveGame();

}

function saveGame() {

    localStorage.setItem("money", money);
    localStorage.setItem("level", level);

}

function resetGame() {

    if (confirm("Reset Game?")) {

        localStorage.clear();

        money = 100;
        level = 0;

        updateUI();

    }

let teaLevel = 1;
let speedLevel = 1;
let workers = 0;

function upgradeTea(){

    if(money >= 500){

        money -= 500;
        teaLevel++;

        alert("Tea Price upgraded to Level " + teaLevel);

        updateUI();

    }else{

        alert("Need ₹500");

    }

}

function upgradeSpeed(){

    if(money >= 1000){

        money -= 1000;
        speedLevel++;

        alert("Speed upgraded to Level " + speedLevel);

        updateUI();

    }else{

        alert("Need ₹1000");

    }

}

function hireWorker(){

    if(money >= 2000){

        money -= 2000;
        workers++;

        alert("Worker hired!");

        updateUI();

    }else{

        alert("Need ₹2000");

    }


