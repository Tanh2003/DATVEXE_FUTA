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

        maquyen: DataTypes.INTEGER,
        tenquyen: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'quyenhan',
           // muốn không thêm s sau tên bảng database phải thêm thuộc tính này
    freezeTableName: true
    });
    return quyenhan;
};