module.exports = function (sequelize, DataTypes) {
  const Burger = sequelize.define("burger", {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 140],
          }
        },
        devoured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
      });
      Burger.associate = function (models) {
        models.burger.belongsTo(models.customer, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      };
  return Burger;
};
