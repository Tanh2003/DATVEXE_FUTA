'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('khachhang', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
         
            sdtkh: {
            
                type: Sequelize.STRING
            },
            hoten: {
                type: Sequelize.STRING
            },
            diachi: {
                type: Sequelize.STRING
            },
            ngaysinh: {
                type: Sequelize.DATE
            },
            gioitinh: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            mave: {
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
        await queryInterface.dropTable('khachhang');
    }
};