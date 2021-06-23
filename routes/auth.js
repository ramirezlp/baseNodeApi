var router = require('express').Router()
var authController = require ('../controllers/authController')


router.post('/login', function (req, res) {
  authController.login(req, res);
})

module.exports = router