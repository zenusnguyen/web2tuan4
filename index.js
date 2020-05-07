const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieSession = require("cookie-session");
const { getLogin, postLogin } = require("./src/routers/login");
const { getTodo, postTodo,deleteTodo } = require("./src/routers/todolist");
const logOut = require("./src/routers/logout");

const port = process.env.PORT || 3001;

app.use(
  cookieSession({
    name: "session",
    keys: ["1760261"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./src/public"));
app.use(require("./src/middlewares/auth"));

app.get("/", getLogin);
app.post("/login", postLogin);
app.get("/todolist", getTodo);
app.post("/delete", deleteTodo)
app.post("/todolist", postTodo);
app.get("/logout", logOut);
app.listen(port);
console.log(`app start on port : ${port}`);
