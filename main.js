// select the title input field
// var titleFld = document.querySelector("#title");
var titleFld = $("#title");
// console.log(titleFld);
// select the add button
var addBtn = $("#addBtn");
// select the todo list
var todos = $("#todos");

addBtn.click(addTodo);

// add todo
function addTodo() {
    // console.log("hello from addTodo");
    // Get user input value for title
    var title = titleFld.val();
    // console.log(title);
    // Create a list item with user input
    var note = $("<li>").append(title);
    note.addClass("list-group-item");
    var deleteBtn = $("<btn>")
        .addClass("btn btn-danger float-right")
        .click(deleteTodo);
    var deleteIcon = $("<i>").addClass("fas fa-trash");
    deleteBtn.append(deleteIcon);
    note.append(deleteBtn);
    // console.log(note);
    todos.append(note);
}

// Delete the selected todo
function deleteTodo(e) {
    // console.log("hello from delete");
    var todo = $(e.currentTarget).parent();
    todo.remove();
}
