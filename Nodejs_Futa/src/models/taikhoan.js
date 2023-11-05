'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class taikhoan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    };
    taikhoan.init({

        sdt: DataTypes.STRING,
        matkhau: DataTypes.STRING,
        maquyen: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'taikhoan',
    });
    return taikhoan;
};