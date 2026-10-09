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
