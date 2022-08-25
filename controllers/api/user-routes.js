const router = require('express').Router();
const { User, Post, Comment, Vote } = require('../../models');
const {getAllUsers,getSingleUser,createUser,deleteUser,loginUser,logoutUser,updateUser} = require('./user-methods')

//! /api/user/
router.get('/', getAllUsers);

//! /api/user/:create
router.post('/', createUser);

//! /api/user/:id
router.get('/:id', getSingleUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

//! /api/user/login
router.post('/login', loginUser);

//! /api/user/logout
router.post('/logout', logoutUser);





module.exports = router;
