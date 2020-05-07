const bcrypt = require("bcrypt");

const Users = [
  {
    id: 1,
    email: "1760261",
    displayName: "Nguyen Viet Anh",
    pass: "$2y$10$gd5YYULozb0B.DRTi/BQhON.c6Wv.NuJyYJog4ItdIUGFFMS.u3qy",
  },
];

function findById(id) {
  return Users.find((u) => u.id === id);
}
function findByEmail(email) {
  return Users.find((u) => u.email === email);
}
function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
function verifyPassword(password, passHash) {
  return bcrypt.compareSync(password, passHash);
}

module.exports = {
  findById,
  findByEmail,
  hashPassword,
  verifyPassword,
};
