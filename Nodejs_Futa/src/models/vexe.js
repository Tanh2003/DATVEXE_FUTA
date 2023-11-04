'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vexe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 
    }
  };
  vexe.init({
    mave:DataTypes.INTEGER,
    sdt:DataTypes.STRING,
    giave:DataTypes.INTEGER,
    soghe:DataTypes.STRING,
    matuyen:DataTypes.INTEGER,
    manv:DataTypes.INTEGER,
    thoigianbatdau:DataTypes.DATE,
    soxe:DataTypes.INTEGER,
    thoigianmua:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'vexe',
  });
  return vexe;
};