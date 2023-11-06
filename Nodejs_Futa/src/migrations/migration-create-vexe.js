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
            mave: {
               
                type: Sequelize.INTEGER
            },
            sdtkh: {
                type: Sequelize.STRING
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
            thoigianbatdau: {
                type: Sequelize.DATE
            },
            thoigianmua: {
                type: Sequelize.DATE
            },
            soxe: {
                type: Sequelize.STRING
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