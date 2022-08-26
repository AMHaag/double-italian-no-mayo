const { User, Post, Comment } = require('../../models');

let userController = {
  getAllUsers: function (req, res) {
    User.findAll({
      attributes: { exclude: ['password'] },
    })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getSingleUser: function (req, res) {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_url', 'content', 'created_at'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_at'],
          include: {
            model: Post,
            attributes: ['title'],
          },
        },
      ],
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'Invalid user id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createUser: function (req, res) {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((dbUserData) => {
        req.session.save(() => {
          req.session.username = dbUserData.username;
          req.session.user_id = dbUserData.id;
          req.session.loggedIn = true;

          res.json(dbUserData);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateUser: function (res, res) {
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'Invalid user id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser: function (req, res) {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'Invalid user id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  loginUser: function (req, res) {
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: 'Username does not exist' });
        return;
      }

      const validPassword = dbUserData.validatePW(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Password incorrect, please try again' });
        return;
      }

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;

        res.json({
          user: dbUserData,
          message: 'Login successful',
        });
      });
    });
  },
  logoutUser: function (req, res) {
    if (!req.session.loggedIn) {
      res.status(404).end();
    } else {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
  },
};

module.export = userController;