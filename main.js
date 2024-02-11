const container = document.querySelector("#parent-container");
container.style.backgroundColor = "blue";
container.style.color = "white";
console.log(container);

const element = document.createElement("div");

element.innerText = "New element created using javascript";

element.style.border = "2px solid black";

element.style.width = "450px";
element.style.height = "450px";

element.style.color = "white";
element.style.backgroundColor = "black";
element.addEventListener("click", (event) => {
    alert("container clicked")
})

// element.removeEventListener("click")
container.appendChild(element);


document.querySelector(".grandchild").addEventListener('click', (event) => {
    event.preventDefault();
    // event.stopPropagation(); // stopping the event from propogating
    alert("In grandchild")
},true)

document.querySelector(".parent").addEventListener('click', (event) => {
    alert("In parent")
    
}, true)
document.querySelector(".child").addEventListener('click', (event) => {
    // event.stopPropagation(); // stopping the event from propogating
    alert("In child")
}, true)


/*
Assignments
1. Implement polyfills of promise.any, promise.race, reduce, forEach
2. Create the table UI using vanilla javascript
3. https://www.frontendmentor.io/challenges
*/