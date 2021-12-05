const router = require('express')

UserRoutes = require('./user')
LangageRoutes = require('./langage')

router.use('/users' , UserRoutes)
router.use('/langages' , LangageRoutes)

module.exports = router

