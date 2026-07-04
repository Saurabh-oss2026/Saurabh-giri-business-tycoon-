// customer.js

const customerNames = [
    "Rahul",
    "Aman",
    "Priya",
    "Riya",
    "Vikas",
    "Neha"
];

function randomCustomer() {
    const name =
        customerNames[Math.floor(Math.random() * customerNames.length)];

    document.getElementById("customer").innerHTML =
        "👤 " + name + " bought tea!";

    earn();
}

setInterval(randomCustomer, 5000);
