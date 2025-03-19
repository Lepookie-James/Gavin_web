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


function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent = year;
}

/*
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const commentError = document.getElementById('commentError');
    const generalError = document.getElementById('generalError'); // Error below submit button

    let isValid = true;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    commentError.textContent = "";
    generalError.textContent = ""; 
    generalError.style.display = "none"; // Hide initially

    // Trim values to remove spaces
    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let commentValue = commentInput.value.trim();

    // Check if all fields are empty
    if (!nameValue && !emailValue && !commentValue) {
        nameError.textContent = "All fields are required. Please fill out the form."; // Error under name
        generalError.textContent = "All fields are required. Please fill out the form."; // Error below submit
        generalError.style.display = "block"; // Show general error
        isValid = false;
    } else {
        // Validate individual fields
        if (!nameValue) {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

        if (!emailValue) {
            emailError.textContent = "Email is required.";
            isValid = false;
        }

        if (!commentValue) {
            commentError.textContent = "Comment is required.";
            isValid = false;
        }
    }

    return isValid;
}
    */
function validate() {
    // Get the input fields and validation message element by their IDs
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("text");
    var msg = document.getElementById("ValidateMsg"); // Element to display validation message
    // Check if any of the fields are invalid using checkValidity()
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        // If any field is invalid, display an error message
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 } 