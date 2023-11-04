'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
 
    }
  };
  nhanvien.init({
  
    phoneNumber:DataTypes.STRING,
    password:DataTypes.STRING,
    fullName:DataTypes.STRING,
    address:DataTypes.STRING, 
    dateOfBirth:DataTypes.DATE, 
    gender: DataTypes.STRING, 
    image:DataTypes.TEXT,
    job:DataTypes.STRING,
    roleId:DataTypes.STRING,

   
  }, {
    sequelize,
    modelName: 'nhanvien',
  });
  return nhanvien;
};