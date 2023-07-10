'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Ingredient, {
        foreignKey: 'itemId'
      })
      Item.belongsTo(models.User, { foreignKey: 'authorId' })
      Item.belongsTo(models.Category, { foreignKey: 'categoryId' })
    }

    static async createItemTransaction(data, Ingredient) {
      const t = await sequelize.transaction()
      const { ingredients, item } = data
      try {
        const newItem = await Item.create(item, { transaction: t })
        // console.log(newItem);
        ingredients.forEach(el => {
          el.itemId = newItem.id
        })
        // console.log(ingredients);
        const newIngredients = await Ingredient.bulkCreate(ingredients, { transaction: t })

        await t.commit()
        return {
          item,
          newIngredients
        }
      } catch (error) {
        console.log(error);
        await t.rollback()
        return error
      }
    }

    static async editItemTransaction(data, Ingredient) {
      const t = await sequelize.transaction()
      // console.log(Ingredient);
      const { ingredients, item, id } = data
      try {
        const updateItem = await Item.update(
          item,
          {
            where: {
              id,
            },
            transaction: t
          },
        )

        ingredients.forEach(el => {
          el.updatedAt = new Date()
        });

        const updateIngredients = await Ingredient.bulkCreate(ingredients, { updateOnDuplicate: ["name", "updatedAt"], transaction: t })

        await t.commit()
        return {
          item: updateItem,
          updateIngredients
        }

      } catch (error) {
        console.log(error);
        await t.rollback()
        return error
      }
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Name is required`,
        },
        notEmpty: {
          msg: `Name is required`,
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Description is required`,
        },
        notEmpty: {
          msg: `Description is required`,
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Price is required`,
        },
        notEmpty: {
          msg: `Price is required`,
        },
        priceMin(value) {
          if (value < 1000) {
            throw new Error("Price must be minimal 1000");
          }
        },
      },
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Image is required`,
        },
        notEmpty: {
          msg: `Image is required`,
        },
        isUrl: {
          msg: `Image must be a URL`,
        },
      },
    },
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });

  return Item;
};


