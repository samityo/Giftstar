module.exports = function(sequelize, DataTypes) {
  var Registries = sequelize.define("registries", {
    registry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

});

Registries.associate = function(models) {
  Registries.belongsTo(models.users);
  Registries.hasMany(models.products)
}
  return Registries;
 };
