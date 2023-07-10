const {authentication,authorization}=require('../middlewares/auth')
const router=require('express').Router()
const Controller =require('../controllers/admin')

router.post('/login', Controller.login)

router.use(authentication)

router.post('/register', Controller.register)

router.get('/categories',Controller.getCategory)
router.get('/category/:id',Controller.findCategory)
router.post('/category/add',Controller.createCategory)
router.delete('/category/delete/:id', Controller.deleteCategory)
router.put('/category/edit/:id', Controller.editCategory)

router.post('/item/add',Controller.createItem)
router.get('/item',Controller.getItems)
router.get('/item/:id',Controller.getItem)
router.delete('/item/delete/:id',Controller.deleteItem)
router.put('/item/edit/:id',Controller.editItem)

module.exports=router