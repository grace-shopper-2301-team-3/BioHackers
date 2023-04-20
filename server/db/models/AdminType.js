const Sequelize = require("sequelize");
const db = require("../db");

const AdminType = db.define("admin_type", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  adminType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  permissions: {
    type: Sequelize.JSON,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = AdminType;
