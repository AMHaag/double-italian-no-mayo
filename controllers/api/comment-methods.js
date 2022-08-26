const { Posts, User, Comments, Vote } = require('../../models');

let commentsController = {
  getAllComments: function (req, res) {
    Comments.findAll()
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createComment: function (req, res) {
    // expected format {"commentText": "This is text", "user_id": "1", "post_id": "2"}
    Comments.create({
      commentsText: req.body.commentsText,
      user_id: req.session.user_id,
      posts_id: req.body.posts_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //   getSingleComment: function (req, res) {},
  //   updateComment: function (req, res) {},
  deleteComment: function (req, res) {
    Comments.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbCommentData) => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'Comment not found' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = commentsController;
