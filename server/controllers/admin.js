const { hashPassword, comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User, Item, Category, Ingredient } = require('../models')

class Controller {

    static async register(req, res, next) {
        // console.log('disini');
        try {
            const user = await User.create(req.body)
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            console.log(req.body);
            // console.log(req.body);
            if (!email) throw ({ name: "emailEmpty" })
            if (!password) throw { name: "passwordEmpty" }

            const user = await User.findOne({
                where: {
                    email,
                }
            })

            if (!user || !comparePassword(password, user.password)) throw { name: "Unauthenticated" }
            let token = signToken({ id: user.id })

            res.status(200).json({
                access_token: token,
                userId: user.id,
                email: user.email
            })
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }

    static async getCategory(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json({
                message: 'success get all data',
                categories
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async findCategory(req, res, next) {
        const { id } = req.params
        try {
            const category = await Category.findByPk(id)
            if (!category) throw { name: "NotFound" }
            res.status(200).json({
                message: 'success get all data',
                category
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async createCategory(req, res, next) {
        try {
            const newCategory = await Category.create(req.body)
            res.status(201).json({
                message: 'new category is created',
                category: newCategory
            })
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }

    static async deleteCategory(req, res, next) {
        const { id } = req.params
        try {
            const category = await Category.findByPk(id);
            if (!category) throw { name: "NotFound" }
            await Category.destroy({
                where: {
                    id,
                }
            })
            res.status(200).json({
                message: 'Category is deleted',
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async editCategory(req, res, next) {
        const { id } = req.params
        const { name } = req.body
        try {
            const { id } = req.params;
            const findCategory = await Category.findByPk(id);
            if (!findCategory) throw { name: "NotFound" }
            const category = await Category.update(
                {
                    name,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            res.status(200).json({
                message: "success update category",
                category,
            });
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async createItem(req, res, next) {
        let payload = req.body
        payload.item.authorId=req.user.id
        try {
            const newItem = await Item.createItemTransaction(payload, Ingredient)
            if (newItem.errors) throw newItem
            res.status(201).json({
                message: 'New item is created',
                item: newItem
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getItems(req, res, next) {
        try {
            const items = await Item.findAll({
                include: [{
                    model: User,
                    attributes: ['email']
                }, {
                    model: Category,
                    attributes: ['name']
                }, {
                    model: Ingredient,
                    attributes: ['id', 'name']
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

    static async getItem(req, res, next) {
        const { id } = req.params
        try {
            const item = await Item.findOne({
                where: { id },
                include: {
                    model: Ingredient,
                    attributes: ['id', 'name']
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            if (!item) throw { name: "NotFound" };
            res.status(200).json({
                message: 'success get data',
                item
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async deleteItem(req, res, next) {
        const { id } = req.params;
        try {
            const item = await Item.findByPk(id);
            if (!item) throw { name: "NotFound" };
            await Item.destroy({
                where: {
                    id,
                },
            });

            res.status(200).json({
                message: `${item.name} Success to delete`,
                item,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async editItem(req, res, next) {
        const { id } = req.params
        let payload = req.body
        payload.id = id
        try {
            const updateItem = await Item.editItemTransaction(payload, Ingredient)

            res.status(200).json({
                message: "success update data",
                name: updateItem,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }


}

module.exports = Controller