'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('taikhoan', {  
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },       

            sdt: {
             
                type: Sequelize.STRING
            },
            matkhau: {
                type: Sequelize.STRING
            },
            manv: {
                type: Sequelize.INTEGER
            },
            makh: {
                type: Sequelize.INTEGER
            },

            maquyen: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('taikhoan');
    }
};