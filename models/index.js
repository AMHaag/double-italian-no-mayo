const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comment');

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comments, {
  foreignKey: 'posts_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Posts, {
  foreignKey: 'posts_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Post, Comment };
