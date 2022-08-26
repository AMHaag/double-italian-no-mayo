const { Posts, User, Comments, Vote } = require('../../models');

let postController = {
  getAllPosts: function (req, res) {
    Posts.findAll({
      attributes: ['id', 'title', 'content', 'created_at', 'user_id'],
      include: [
        {
          model: Comments,
          attributes: [
            'id',
            'commentsText',
            'posts_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getSinglePost: function (req, res) {
    Posts.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: Comments,
          attributes: [
            'created_at',
            'id',
            'commentsText',
            'posts_id',
            'user_id',
          ],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({
            message: 'Post not found',
          });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createPosts: function (req, res) {
    Posts.create({
      content: req.body.content,
      title: req.body.title,
      user_id: req.session.user_id,
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  editPosts: function (req, res) {
    Posts.update(
      {
        content: req.body.content,
        title: req.body.title,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: 'Post not found' });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deletePosts: function (req, res) {
    Posts.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: 'Post not found' });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = postController;
