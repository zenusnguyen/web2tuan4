const users = require("../services/users");

function getLogin(req, res, next) {
  res.render("login");
}

function postLogin(req, res, next) {
  const user = users.findByEmail(req.body.email);

  if (!user || users.verifyPassword(req.body.pass, user.pass)) {
    return res.render("login");
  }
  req.session.userId = user.id;
  res.redirect("todolist");
}

module.exports = {
  getLogin,
  postLogin,
};
