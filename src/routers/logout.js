module.exports = function logOut(req, res) {
  delete req.session.userId;
  res.redirect("/");
};
