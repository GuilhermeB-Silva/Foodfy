const { static } = require("express")
const express = require("express")
const nunjucks = require("nunjucks")
const recipesRoutes = require("./routes/adminRoutes/recipes")
const usersRoutes = require("./routes/adminRoutes/users")
const regularRoutes = require("./routes/regularRoutes/regularRoutes")


const server = express()

server.set('view engine','njk')

server.use(express.static("public"))
server.use(recipesRoutes)
server.use(usersRoutes)

server.use(regularRoutes)


nunjucks.configure('src/app/View',{
    autoescape:true,
    noCache:true,
    express:server
})




server.listen(5000,()=> console.log("server is running"))