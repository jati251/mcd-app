'use strict';
const {hashPassword} =require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, { foreignKey: "authorId" })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already in use!'
      },
      validate: {
        notNull: {
          msg: `Email is required`
        },
        notEmpty: {
          msg: `Email is required`
        },
        isEmail: {
          msg:`Email format is invalid`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Password is required`
        },
        notEmpty: {
          msg: `Password is required`
        },
        lengthMin(value) {
          if (value.length < 5) {
            throw new Error('Password minimal 5 characters')
          }
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
    user.role='admin'
  })


  return User;
};