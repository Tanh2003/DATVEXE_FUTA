'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quyenhan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 
    }
  };
  quyenhan.init({
  
    maquyen:DataTypes.INT,
    tenquyen:DataTypes.STRING,
 
  }, {
    sequelize,
    modelName: 'quyenhan',
  });
  return quyenhan;
};