const router = require('express').Router();
const auth = require('../../utils/auth');
const {
  getAllPosts,
  getSinglePost,
  createPosts,
  editPosts,
  deletePosts,
} = require('./post-methods');

//! /api/posts
router.route('/').get(getAllPosts).post(auth, createPosts);

//! /api/posts/:id
router
  .route('/:id')
  .get(auth, getSinglePost)
  .put(auth, editPosts)
  .delete(auth, deletePosts);

module.exports = router;
