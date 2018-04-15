const todoInput = document.querySelector("#todoInput");
const newTodoBtn = document.querySelector("#submitTodo");
const ulEl = document.querySelector("#todoList");

function addTodo() {
    //Get the value of the input field
    let newTodoContent = todoInput.value;
    //Create the new todo li element
    let newTodo = document.createElement("li");
    let span = document.createElement("span");
    //Set the text content of the new todo li to be the value from the input field
    span.textContent = newTodoContent;
    newTodo.appendChild(span);
    //Add the class of 'todoLi' to the new li element
    newTodo.classList.add("todoLi");
    
    //Append the new todo li element to the ul element
    ulEl.appendChild(newTodo);

    //Create a delete button
    const deleteBtn = document.createElement("button");
    //Add the classes of 'btn-spacing', 'btn' and 'btn-danger'
    deleteBtn.classList.add("btn-spacing");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    //Set the textContent to 'Delete'
    deleteBtn.textContent = "Delete";
    //Append the button to the new todo li element
    newTodo.appendChild(deleteBtn);
    
    //Create an edit button
    const editBtn = document.createElement("button");
    //Add the classes of 'btn-spacing', 'btn' and 'btn-primary'
    deleteBtn.classList.add("btn-spacing");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    //Set the textContent to 'Edit'
    editBtn.textContent = "Edit";
    //Append the button to the new todo li element
    newTodo.appendChild(editBtn);
    
    //Clear the input field
    todoInput.value = "";
}

function editTodo() {
    //When the edit button is clicked on the following will occur
}

//Create an event listener for when the Add item button is clicked
newTodoBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    addTodo();
});

//Create an event for when an element within the ul element is clicked
ulEl.addEventListener("click", function(event) {
    event.preventDefault();

    
    if(event.target.textContent === "Delete") {         //If the 'delete' button has been clicked
        console.log("The delete button was clicked..");
        //Remove the li from the parent ul element
        let removeEl = event.target.parentNode;
        console.log(removeEl);
        ulEl.removeChild(removeEl);


    } else if(event.target.textContent === "Edit") {    //If the 'edit' button has been clicked
        console.log("The edit button was clicked..");

        let editText = event.target.previousSibling.previousSibling;    //Target the span of the edited li
        let appendBeforeEl = event.target.previousSibling;      //Target the element the input field will be appended before
        let editedTodo = editText.parentNode;       //Target the edited li
        let editInput = document.createElement("input");    //Create the input field
        editInput.value = editText.textContent;     //Set the value of the input field to the text content of the span

        appendBeforeEl.classList.remove("btn-danger");
        appendBeforeEl.classList.add("btn-success");
        appendBeforeEl.textContent = "Save";

        editedTodo.removeChild(editText);       //Remove the span element
        
        editedTodo.insertBefore(editInput, appendBeforeEl);     //Append the input element next to the buttons
    
    } else if(event.target.textContent === "Save") {
        console.log("The save button was pressed...");
        //Replace the text content of the event.target to be "Delete" again
        event.target.textContent = "Delete";
        event.target.classList.remove("btn-success");
        event.target.classList.add("btn-danger");

        let editInput = event.target.previousSibling;
        let inputContent = editInput.value;
        let appendBeforeEl = event.target;      //Target the element the span field will be appended before
        
        //Create a span element
        let span = document.createElement("span");
        //Set the text content of the span to be the value of the input field
        span.textContent = inputContent;

        let editedTodo = event.target.parentNode;

        editedTodo.removeChild(editInput);
        editedTodo.insertBefore(span, appendBeforeEl);



        //Remove the input element and replace with the span element

        
    }
});

