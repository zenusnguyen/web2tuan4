const todoList = require("../services/todo");

function getTodo(req, res, next) {
  if (req.currentUser) {
    return res.render("todolist", {
      listTitle: "Work List",
      newListItems: todoList.getActive(),
    });
  }
  res.redirect("/");
}
function postTodo(req, res, next) {
  const item = {
    id: todoList.getLenght(),
    todo: req.body.newItem,
    isDone: false,
  };

  todoList.addTodo(item);
  res.redirect("todolist");
}

function deleteTodo(req, res, next) {
  const id = req.body.checkbox;

  todoList.makeDone(id);
  res.redirect("todolist");
}

module.exports = {
  getTodo,
  postTodo,
  deleteTodo,
};
