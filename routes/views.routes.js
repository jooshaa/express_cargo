const { create } = require('express-handlebars')
const { createViewPage } = require('../helpers/create.veiw.page')

const router = require('express').Router()

router.get("/", (req, res) => {
    res.render(createViewPage("index", {
         title: "Asosiy sahifa",
          isHome: true
         }))
})
router.get("/admin", (req, res) => {
    res.render(createViewPage("admin", {
         title: "admin sahifa",
          isAdmin: true
         }))
})
router.get("/order", (req, res) => {
    res.render(createViewPage("order", {
         title: "order sahifa",
          isOrder: true
         }))
})

router.get("/oper", (req, res) => {
    res.render(createViewPage("oper", {
         title: "operation sahifa",
          isOper: true
         }))
})
router.get("/login", (req, res) => {
    res.render(createViewPage("login", {
         title: "Asosiy sahifa",
          isLogin: true
         }))
})


module.exports = router