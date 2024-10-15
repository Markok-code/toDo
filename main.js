const inputJob = document.querySelector(".form__input")
const btnClick = document.querySelector(".form__btn")
const ul = document.querySelector(".js--todos-wrapper")
const ToDoList = JSON.parse(localStorage.getItem('ToDoList')) || [];


function addToList(inputJob){
    if(inputJob.value.trim() != ""){
        ToDoList.push(`  
            <li class="todo-item">
                <input class="checkbox" type="checkbox">
                <span class="todo-item__description">${inputJob.value}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>`)
            localStorage.setItem('ToDoList', JSON.stringify(ToDoList));
            ;}

    ul.innerHTML = ""
    ToDoList.forEach((el) =>{
        ul.innerHTML += el;
    })
}
btnClick.addEventListener("click", (event) => {
    event.preventDefault();  
    console.log(inputJob.value);
    
    if(inputJob.value.trim() == ""){
        alert("Помилка")
    }
    addToList(inputJob)
    inputJob.value = ''  
});

addToList(inputJob)


ul.addEventListener("click", (event) => {
    if(event.target.classList.contains("todo-item__delete")) {
        event.target.closest(".todo-item").remove()   
        const todoItem = event.target.closest(".todo-item");
        const index = ToDoList.findIndex(el => el.includes(todoItem.querySelector(".todo-item__description").textContent));
        if (index > -1) {
            ToDoList.splice(index, 1); 
            localStorage.setItem('ToDoList', JSON.stringify(ToDoList));
    }
    addToList(addToList);
    }

    if(event.target.classList.contains("checkbox")) {
        if(event.target.checked) {
            event.target.closest(".todo-item").classList.add("todo-item--checked");
        } else {
            event.target.closest(".todo-item").classList.remove("todo-item--checked");
        }}

});
