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
   
    
    giave:DataTypes.FLOAT,
    soghe:DataTypes.STRING,
    sove:DataTypes.INTEGER,
    machuyen:DataTypes.INTEGER,
    manv:DataTypes.INTEGER,
    makh:DataTypes.INTEGER,
    thoigianbatdau:DataTypes.DATE,
    thoigianmua:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'vexe',
       // muốn không thêm s sau tên bảng database phải thêm thuộc tính này
       freezeTableName: true
  });
  return vexe;
};