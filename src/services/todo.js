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

function getTodo() {
  return todoList;
}
function getComplete() {
  return todoList.filter((todo) => todo.isDone == true);
}
function makeDone(id) {
  todoList.forEach((todo) => {
    if (todo.id == id) {
      todo.isDone = true;
    }
  });
  console.log("todoList: ", todoList);
}
function addTodo(todo) {
  todoList.push(todo);
}
function getLenght(todo) {
  return todoList.length;
}
module.exports = {
  getTodo,
  getComplete,
  getActive,
  addTodo,
  getLenght,
  makeDone,
};
