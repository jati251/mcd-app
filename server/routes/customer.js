const router=require('express').Router()
const Controller =require('../controllers/customer')

router.get('/menu', Controller.getMenuAll)
router.get('/menu/:id', Controller.getMenuDetail)

module.exports=router