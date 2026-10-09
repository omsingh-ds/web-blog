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

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


let nameInput = document.querySelector("#nameInput");
let greetButton = document.querySelector("#greetButton");
let greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", function() {
    let name = nameInput.value;
    greeting.textContent = "Hello, " + name + "! Welcome to my blog.";
});
