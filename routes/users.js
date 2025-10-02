const express = require('express')
const router = express.Router()
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const passport = require('passport')
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

//passport.authenticate is a middleware can be used for multiple strategies such as local or google or fb
router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', {failureFlash : true, failureRedirect:'/login',keepSessionInfo: true }),users.login)

router.get('/logout',users.logout)

module.exports= router
