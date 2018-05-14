'use strict';
module.exports = (sequelize, DataTypes) => {
  var TweedTable = sequelize.define('TweedTable', {
    author: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  TweedTable.associate = function(models) {
    // associations can be defined here
  };
  return TweedTable;
};