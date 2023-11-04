'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tuyenduong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 
    }
  };
  tuyenduong.init({
  
    matuyen:DataTypes.STRING,
    dodai:DataTypes.FLOAT,
    tuyendi:DataTypes.STRING,
    tuyenden:DataTypes.STRING,
    gia:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tuyenduong',
  });
  return tuyenduong;
};