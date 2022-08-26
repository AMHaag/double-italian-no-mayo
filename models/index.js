const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Posts, {
  foreignKey: 'user_id'
});

Posts.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Posts.hasMany(Comments, {
  foreignKey: 'posts_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comments.belongsTo(Posts, {
  foreignKey: 'posts_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Posts, Comments };
