const { Item, User, Ingredient, Category } = require('../models')

class Controller {
    static async getMenuAll(req, res, next) {
        try {
            const items = await Category.findAll({
                include: [{
                    model: Item,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json({
                message: 'success get all data',
                items
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async getMenuDetail(req, res, next) {
        const { id } = req.params
        try {
            const menu = await Item.findOne({
                where: { id },
                include: [{
                    model: Category,
                    attributes: ['id','name']
                },{
                    model: User,
                    attributes: ['id','email']
                }, {
                    model: Ingredient,
                    attributes: ['id', 'name']
                }],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
            });
            res.status(200).json({
                message: "success get menu",
                result: menu,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller