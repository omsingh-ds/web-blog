let heading = document.querySelector("h1");

heading.textContent = "My Awesome Web Blog";

let button = document.querySelector("#helloButton");
let heading = document.querySelector("h1");

button.addEventListener("click", function() {
    heading.textContent = "You clicked the button!";
});
