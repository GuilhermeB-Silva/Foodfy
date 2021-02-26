const { static } = require("express")
const express = require("express")
const nunjucks = require("nunjucks")
const adminRoutes = require("./routes/adminRoutes")
const regularRoutes = require("./routes/regularRoutes")


const server = express()

server.set('view engine','njk')

server.use(express.static("public"))
server.use(adminRoutes)
server.use(regularRoutes)


nunjucks.configure('src/app/View',{
    autoescape:true,
    noCache:true,
    express:server
})




server.listen(5000,()=> console.log("server is running"))