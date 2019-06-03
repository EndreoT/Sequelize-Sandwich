module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      }
    },
  },
  );

  Customer.associate = function(models) {
    models.Customer.hasMany(models.Burger);
  };
  return Customer;
};