'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return {
        ...this.get(),
        password: undefined,
      };
    }
  }
  Employee.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "First name should not be empty" },
        notNull: { msg: "First name should not be null" },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Last name should not be empty" },
        notNull: { msg: "Last name should not be null" },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Email should not be empty" },
        notNull: { msg: "Email should not be null" },
        isEmail: { msg: "Should be an email" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password should not be empty" },
        notNull: { msg: "Password should not be null" },
        min: {
          args: [6],
          msg: "Minimum 6 characters required in Password",
        }
      },
    }
  }, {
    sequelize,
    tableName: "employees",
    modelName: 'Employee',
  });
  return Employee;
};