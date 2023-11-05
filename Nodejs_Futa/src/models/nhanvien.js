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

        macv: DataTypes.INTEGER,
        manv: DataTypes.INTEGER,
        sdt: DataTypes.STRING,
        gioitinh: DataTypes.BOOLEAN,
        ngaysinh: DataTypes.DATE,
        tennv: DataTypes.STRING,
        diachi: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'nhanvien',
    });
    return nhanvien;
};