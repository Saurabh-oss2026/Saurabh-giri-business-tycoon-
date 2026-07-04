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

}
