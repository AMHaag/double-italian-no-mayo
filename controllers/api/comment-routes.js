const router = require('express').Router();
const {
  getAllComments,
  createComment,
  //   getSingleComment,
  updateComment,
  deleteComment,
} = require('./comment-methods');
const auth = require('../../utils/auth');

//! /api/comments
router.route('/').get(getAllComments).post(auth, createComment);

//! /api/comments/:id
router
  .route('/:id')
  //   .get(getSingleComment)
  //   .put(auth, updateComment)
  .delete(auth, deleteComment);

module.exports = router;
