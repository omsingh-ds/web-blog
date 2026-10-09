let button = document.querySelector("#helloButton");
let heading = document.querySelector("h1");

button.addEventListener("click", function() {
    heading.textContent = "Thanks for visiting my blog!";
    heading.classList.toggle("highlight");

    if (heading.classList.contains("highlight")) {
        console.log("Highlight ON");
    } else {
        console.log("Highlight OFF");
    }
});



let darkModeButton = document.querySelector("#darkModeButton");

// Restore the saved preference
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


let nameInput = document.querySelector("#nameInput");
let greetButton = document.querySelector("#greetButton");
let greeting = document.querySelector("#greeting");


greetButton.addEventListener("click", function() {
    let name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Please enter your name!";
    } else {
        greeting.textContent = "Hello, " + name + "! Welcome to my blog.";
    }
});
