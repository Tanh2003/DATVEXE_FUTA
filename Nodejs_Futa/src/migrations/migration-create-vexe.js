'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      sdt: {
        type: Sequelize.STRING
      },
      giave: {
        type: Sequelize.INTEGER
      },
      soghe: {
        type: Sequelize.STRING
      },
      manv: {
        type: Sequelize.INTEGER
      },
      matuyen: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vexe');
  }
};
