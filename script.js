let button = document.querySelector("#helloButton");
let heading = document.querySelector("h1");

button.addEventListener("click", function() {
    heading.textContent = "Thanks for visiting my blog!";
    heading.classList.add("highlight");
});
