module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },

    total_likes: {
      type: DataTypes.INTEGER
    }
  });
  return User;
};