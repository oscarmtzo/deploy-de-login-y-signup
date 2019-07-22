//json web token
const jwt = require('jsonwebtoken')
const User = require('../models/User')
exports.createToken = () => {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
      role: user.role
    },
    process.env.SECRET,
    { expiresIn: '24h' }
  ).split('.')//splitea el token en puntos un string lo requresa en un array
}

exports.login = (req, res, next) => {
  const { user } = req
  const [header, payload, signature] = createToken(user)//tres partes del token
  res.cookies()
}
exports.verifyToken = (req, res, next) => {
  const { headload, signature } = req.cookies
  if(!headload || !signature) return (res.status(401).json({ msg: 'Unauthorized, missing token'}))
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) res.status(401).json({ msg: 'Unauthorized, missing token'})
    User.findById(decoded.userId)
    .then(user=> {
      req.user = user
      next()
    })
    .catch(err => {
      res.status(401).json({err})
    })
  })
}