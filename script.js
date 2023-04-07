const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (text) {
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    } else {
        alert("No escribió ninguna tarea");
    }
});

function addDeleteBtn() {
    const btn = document.createElement("button");
    btn.classList.add("btn-del");
    btn.innerText = "X";
    btn.addEventListener("click", () => {
        btn.parentNode.remove();
        const lis = document.querySelectorAll("li");
        if (!lis.length) empty.style.display = "initial";
    });
    return btn;
}
