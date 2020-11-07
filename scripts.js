// reference to the div container
let container = document.querySelector("#container");


// add button to top of the screen
let body = document.getElementsByTagName("body") [0];
let btn = document.createElement("button");
btn.textContent = "Reset";
btn.classList.add("reset");
body.prepend(btn);

// loop to create divs
function createDivs(x) {
    for (i = 0; i < (x*x); i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        container.appendChild(div);
    }
}

// loop to remove divs
function removeDivs() {
    let nodes = document.querySelectorAll("#container > div");
    for (i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    }
}



// add hover event listener to each div
function addEvents() {
    let nodes = document.querySelectorAll("#container > div");
    for (i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("mouseenter", function(event) {
//          event.target.classList.toggle("active"); // just toggles the square to gray

            // selects a random color for the hover
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = "#" + randomColor;
        });
    }
}

// creates the default 4x4 grid
createDivs(15);
addEvents();

// creates but hides the error message for the prompt
let error = document.createElement("p");
error.textContent = "Error: numbers over 100 aren't valid";
error.classList.add("error");
body.insertBefore(error, container);    

// button creates a prompt, resets the grid, and creates a new grid based on the number
btn.addEventListener("click", function() {
    removeDivs();
    let newGrid = parseInt(window.prompt("Enter the grid size (1 - 100):",));
    if (newGrid > 100) {
        error.classList.add("error-active");
    } else {
        error.classList.remove("error-active");
        createDivs(newGrid);
        addEvents();
        container.style.gridTemplateColumns = `repeat(${newGrid}, auto)`;
        container.style.gridTemplateRows = `repeat(${newGrid}, auto)`;
    }
})


