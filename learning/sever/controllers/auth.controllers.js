const User = require('../models/User')

exports.signup = (req, res, next) => {
  User.register({...req.body, role: 'USER'}, req.body.password)
  .then(user => res.status(201).json({ user}))
  .catch(err => res.status(500).json({ err}) )
}
exports.login = (req, res, next) => {
  const { user } =req
  const [header, payload, signature] = createToken(user)
  res.cookie('headload', `${header}.${payload}.`, {
    // expires: 1000 * 60 * 30,
    // secure: true
  })//quitar el comentario cuando hagamos deploy
  res.cookie('signature', signature, {
    // httpOnly: true,
    // secure: true
  })//quitar el comentario cuando hagamos deploy
  res.status(200).json({ user })
}

exports.logout = (req, res) => {
  res.clearCookie('headload')
  res.clearCookie('signature')
  res.status(200).json({ msg:  'Logged out'})
}

exports.profile = (req, res) =>{
  res.status.json( { user: req.user, msg: 'oh señor tienes el poder'})
}