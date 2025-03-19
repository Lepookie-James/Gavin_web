console.log("Script loaded!");
// Declare Variables
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);


function findTheBananaForEach(array) {
    array.forEach(item => {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

//findTheBananaForEach(L1);
//findTheBananaForEach(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
    let name="Gavin Lin";
    // DOM Manipulation
    if (window.location.href.includes("index.html")) {
        let E = document.getElementById("greeting");
        if (E) {
            E.innerHTML = `${greeting}, my name is ${name}`;
        }
    }
}

greetingFunc();

function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent = year;
}

function showList() {
    let list = document.getElementById("funList");
    let button = document.getElementById("showListButton");

    if (list.style.display === "none") {
        list.style.display = "block"; 
        button.style.display = "none"; 
    }
}


function showError(input, message) {
    let error = document.createElement("p");
    error.className = "error-message";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
}
document.addEventListener("DOMContentLoaded", function () {
    // Greeting message
    if (window.location.href.includes("index.html")) {
        const name = "Gavin Lin";
        const greetingElement = document.getElementById("greeting");
        const hour = new Date().getHours();
        let greeting = "Good evening";
        if (hour < 12) {
            greeting = "Good morning";
        } else if (hour < 18) {
            greeting = "Good afternoon";
        }
        greetingElement.textContent = `${greeting}, my name is ${name}`;
    }

    // Ensure jQuery is loaded before using it
    if (window.jQuery) {
        // Read More / Read Less Toggle
        $("#readMore").click(function () {
            $("#shortBio").hide();
            $("#fullBio").show();
            $("#readMore").hide();
            $("#readLess").show();
        });

        $("#readLess").click(function () {
            $("#fullBio").hide();
            $("#shortBio").show();
            $("#readLess").hide();
            $("#readMore").show();
        });

    } else {
        console.error("jQuery is not loaded. Make sure it's included in the <head>.");
    }
});

console.log("Script loaded!"); // Debugging log

function validateForm(event) {
    console.log("validateForm called"); // Debugging log
    event.preventDefault(); // Prevent form submission

    // Get form fields by their IDs
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let formMessage = document.getElementById("formMessage");

    console.log("Name:", name.value); // Debugging log
    console.log("Email:", email.value); // Debugging log
    console.log("Message:", message.value); // Debugging log

    // Check if any field is empty
    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all required fields.");
        formMessage.textContent = "All fields are required. Please fill them out before submitting.";
        formMessage.style.color = "red"; // Make the message stand out
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green"; // Success message in green
        // Uncomment the line below to actually submit the form
        // document.getElementById("contactForm").submit();
    }
}