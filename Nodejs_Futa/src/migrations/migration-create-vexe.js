'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('vexe', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            
            makh: {
                type: Sequelize.INTEGER
            },
            giave: {
                type: Sequelize.FLOAT
            },
            soghe: {
                type: Sequelize.STRING
            },
            manv: {
                type: Sequelize.INTEGER
            },
            machuyen: {
                type: Sequelize.INTEGER
            },
            sove:{
                type: Sequelize.INTEGER
            },
            thoigianbatdau: {
                type: Sequelize.DATE
            },
            thoigianmua: {
                type: Sequelize.DATE
            },
            maxe: {
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
        await queryInterface.dropTable('vexe');
    }
};