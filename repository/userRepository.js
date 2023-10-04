const User = require("../models/userModels.js");

async function getAllUser() {
  const users = await User.findAll();
  return users;
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE id_user = ${id}`,
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
}

async function addUser(data) {
  const user = await User.create(data);
  return user;
}

async function validateLogin({ email, password }) {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {
    if (user.validPassword(password)) {
      return user;
    }
  } else {
    return null;
  }
}

async function deleteUser(id) {
  const user = await User.destroy({
    where: {
      user_id: id,
    },
  });

  return user;
}

module.exports = {
  getAllUser,
  getUserById,
  addUser,
  deleteUser,
  validateLogin,
};
