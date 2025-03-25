



  //lest try


  console.log("Script loaded!");

// Add footer year
function addYear() {
    const year = new Date().getFullYear();
    const yearSpan = document.getElementById("copyYear");
    if (yearSpan) {
        yearSpan.textContent = year;
    }
}

// Highlight active navigation link
function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href").endsWith(currentPage)) {
            link.classList.add("active");
        }
    });
}

// Toggle menu function
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
    }
}

// Greeting logic
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
    let name = "Gavin Lin";
    if (window.location.href.includes("index.html")) {
        let E = document.getElementById("greeting");
        if (E) {
            E.innerHTML = `${greeting}, my name is ${name}`;
        }
    }
}

// On page load, run everything
document.addEventListener("DOMContentLoaded", () => {
    addYear();
    highlightActiveLink();
    greetingFunc();

    // Setup hamburger toggle
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    // jQuery read more / read less
    if (window.jQuery) {
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
        console.error("jQuery not loaded.");
    }
});
