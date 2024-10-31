let list = document.getElementById("list");
const button = document.getElementById("btn");
const newtask = document.getElementById("newtask");

let task = [];

button.addEventListener("click",() => {
    console.log(newtask.value)
    if(newtask.value != "") {
        task.push(newtask.value);
        list.innerHTML = task.map((item) => `<div class="tasks" ><input title=${item} type="checkbox" >${item}<i class="dlt fa-regular fa-trash-can"></i></div>`).join("");
        newtask.value = "";

        let deletebtns = Array.from(document.getElementsByClassName("dlt"));
        deletebtns.forEach(btn => { 
            btn.addEventListener("click", () => {
                const parent = btn.parentNode;
                parent.remove();
            })
        });
        
        let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    checkbox.parentElement.classList.add("checked");
                } else {
                    checkbox.parentElement.classList.remove("checked");
                }
            });
        });

    }
});

