const express = require('express')
const router  = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(process.env.APP_NAME)
})

router.get('/me', function (req, res, next) {
  res.json({ message: 'About Me Syamsul' })
})

module.exports = router
