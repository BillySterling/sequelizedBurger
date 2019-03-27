module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
      burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
                args: [1, 20],
                msg: "Burger name must be between 1 - 20 characters"
            }
          }
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
      }
  });

  return Burgers;
};
