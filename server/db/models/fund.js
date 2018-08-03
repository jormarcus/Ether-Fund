const Sequelize = require('sequelize');
const db = require('../db');

const Fund = db.define('funds', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true
    }
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: 'Other'
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'Please donate to my campaign.'
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "" 
  }
});

module.exports = Fund;