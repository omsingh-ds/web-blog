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
    } else if(name.toLowerCase() === "om") {
        greeting.textContent = "Welcome back, Om! 👑";
    } else if(name.toLowerCase() === "himanshi") {
        greeting.textContent = "Arre Maalkin👑 aap, Welcome Welcome!";
    } else {
       greeting.textContent = "Welcome to my blog, " + name + "!";
    }
});

let posts = [
    {
        title: "Learning JavaScript",
        category: "JavaScript",
        description: "My first steps into dynamic websites."
    },
    {
        title: "Understanding Arrays",
        category: "JavaScript",
        description: "How to store and work with multiple values."
    },
    {
        title: "My Web Development Journey",
        category: "Journey",
        description: "What I have learned while building this blog."
    }
];
let dynamicPosts = document.querySelector("#dynamicPosts");

posts.forEach(function(post) {
    let card = document.createElement("article");
    card.classList.add("post-card");

    let content = document.createElement("div");
    content.classList.add("post-content");

    let heading = document.createElement("h2");
    heading.textContent = post.title;

    let category = document.createElement("p");
    category.textContent = post.category;

    let description = document.createElement("p");
    description.textContent = post.description;

    content.appendChild(heading);
    content.appendChild(category);
    content.appendChild(description);

    card.appendChild(content);
    dynamicPosts.appendChild(card);
});
