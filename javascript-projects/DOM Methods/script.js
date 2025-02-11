const employees = {
    John: 50000,
    Sarah: 60000,
    Mike: 55000,
    Emily: 75000,
    David: 62000,
    Anna: 58000,
    Robert: 70000,
    Jessica: 67000
};

const list = document.getElementById("list");
const addButton = document.querySelector(".add-btn");
const mulButton = document.querySelector(".mul-btn");
const sortAlphaButton = document.querySelector(".sort-alpha-btn");
const sortSalButton = document.querySelector(".sort-sal-btn");

let employeeEntries = Object.entries(employees);
let index = 0;

// Add one employee at a time
addButton.addEventListener("click", () => {
    if (index < employeeEntries.length) {
        const [name, salary] = employeeEntries[index];
        const li = document.createElement("li");
        li.textContent = `${name}: $${salary}`;
        li.setAttribute("data-name", name);
        li.setAttribute("data-salary", salary);
        list.appendChild(li);
        index++;
    } else {
        alert("All employees added!");
    }
});

// Multiply all salaries by 2
mulButton.addEventListener("click", () => {
    employeeEntries = employeeEntries.map(([name, salary]) => [name, salary * 2]);

    document.querySelectorAll("#list li").forEach(li => {
        const name = li.getAttribute("data-name");
        const newSalary = employeeEntries.find(([n]) => n === name)[1];
        li.textContent = `${name}: $${newSalary}`;
        li.setAttribute("data-salary", newSalary);
    });
});

// Sort based on names
sortAlphaButton.addEventListener("click", () => {
    let items = [...document.querySelectorAll("#list li")];
    items.sort((a, b) => a.getAttribute("data-name").localeCompare(b.getAttribute("data-name")));

    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
});

// Sort based on salaries
sortSalButton.addEventListener("click", () => {
    let items = [...document.querySelectorAll("#list li")];
    items.sort((a, b) => parseInt(a.getAttribute("data-salary")) - parseInt(b.getAttribute("data-salary")));

    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
});
