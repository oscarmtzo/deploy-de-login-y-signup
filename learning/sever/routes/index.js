const express = require('express');
const router  = express.Router();
const passport = require('../config/passport')
const { signup, login, logout, profile } = require('../controllers/auth.controllers')
const { verifyToken} = require('../config/jwt')
/* luego de importar passport y cors en app js creamos las rutas */
router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/logout',logout)

router.get('/profile', verifyToken, profile)

module.exports = router;
