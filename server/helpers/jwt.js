const { verify, sign } = require('jsonwebtoken')

const secretKey = 'sangatrahasia'

module.exports = {
    signToken: (payload) =>
        sign(payload, secretKey),

    verifyToken: (payload) =>
        verify(payload, secretKey)
}