const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
  updateUser,
} = require('./controllers/api/user-methods');

const userController = require('./controllers/api/user-methods');

console.log(userController.getAllUsers);
