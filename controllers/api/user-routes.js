const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
  updateUser,
} = require('./user-methods');

//! /api/user/
router.route('/').get(getAllUsers).post(createUser);

//! /api/user/:id
router
  .route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//! /api/user/login
router.post('/login', loginUser);

//! /api/user/logout
router.post('/logout', logoutUser);

module.exports = router;
