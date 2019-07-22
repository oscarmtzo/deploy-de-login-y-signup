//sigue esto en tercer paso despues de user
const passport = require('passport')
const User = require('../models/User')
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
module.exports = passport