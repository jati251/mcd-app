const { verifyToken } = require("../helpers/jwt")
const {User,Item} = require("../models")

module.exports={
    authentication:async (req,res,next)=>{
        try {
            let token= req.headers.access_token
            let{id}=verifyToken(token)
            let user=await User.findByPk(id)
            req.user={
                id:user.id,
                email:user.email
            }
            next()
        } catch (error) {
            next(error)
        }
    },
    authorization: async (req,res,next)=>{
        try {
            const{id}=req.params
            const menu=await Item.findByPk(id)
            if(!menu) throw { name: 'NotFound' }

            const authorId=req.user.id
            if(menu.authorId !== authorId) throw{name: 'unathorized'}

            next()
        } catch (error) {
            next(error)
        }
    }
}