'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('tuyenduong', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            matuyen: {
                type: Sequelize.INTEGER
            },
            dodai: {
                type: Sequelize.INTEGER
            },
            tuyendi: {
                type: Sequelize.STRING
            },
            tuyenden: {
                type: Sequelize.STRING
            },
            gia: {
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
        await queryInterface.dropTable('tuyenduong');
    }
};