const todoList = [
  {
    id: 0,
    todo: "di hoc ",
    isDone: false,
  },
];

function getActive() {
  return todoList.filter((todo) => todo.isDone === false);
}


function findById(id) {
  return todoList.find((todo) => todo.id == id);
}
function getTodo() {
  return todoList;
}
function getComplete() {
  return todoList.filter((todo) => todo.isDone == true);
}
function makeDone(id) {
  todoList.forEach((todo) => {
    if (todo.id == id) {
      todo.isDone = !todo.isDone;
    }
  });
}
function addTodo(todo) {
  todoList.push(todo);
}
function getLenght(todo) {
  return todoList.length;
}
module.exports = {
  findById,
  getTodo,
  getComplete,
  getActive,
  addTodo,
  getLenght,
  makeDone,
};
