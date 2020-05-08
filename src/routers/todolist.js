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

function getCompiled(req, res, next) {
  if (req.currentUser) {
    return res.render("todolist", {
      listTitle: "Work List",
      newListItems: todoList.getComplete(),
    });
  }
  res.redirect("compiled");
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

  const todo = todoList.findById(id);

  todoList.makeDone(id);
  if (todo.isDone) {
    return res.redirect("todolist");
  } else {
    return res.redirect("compiled");
  }
}

module.exports = {
  getTodo,
  postTodo,
  deleteTodo,
  getCompiled,
};
