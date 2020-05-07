const User = require("../services/users");
module.exports = function auth(req, res, next) {
  const userId = req.session.userId;
  res.locals.currentUser = null;
  if (!userId) {
    return next();
  }
  const user = User.findById(userId);
  if (!user) {
    return next();
  }
  req.currentUser = user;
  res.locals.currentUser = user;
  next();
};
