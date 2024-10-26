let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.textContent = "GROCERY LIST";
headingEl.classList.add("heading");
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

let listItemEl = document.createElement("li");
listItemEl.textContent = "Milk";
listContainerEl.appendChild(listItemEl);

let groceryItems = ["Curd", "PeanutButter", "CocoChips", "Bread", "Soups"];

for (let grocery of groceryItems) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = grocery;
    listContainerEl.appendChild(listItemEl);
}

let checkEl = document.createElement("input");
checkEl.type = "checkbox";
checkEl.id = "myCheckbox";
bgContainerEl.appendChild(checkEl);
checkEl.classList.add("checkbox");

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "myCheckbox");
labelEl.textContent = "Need Home Delivery";
labelEl.classList.add("label");
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Procced To Pay";
bgContainerEl.appendChild(buttonEl);