const express = require("express")

const routes = express.Router()


routes.get("/",(req,res)=>{
    return res.render("layoutRegular/index")
})

routes.get("/about",(req,res)=>{
    return res.render("layoutRegular/about")
})


routes.get("/recipes",(req,res)=>{
    return res.render("layoutRegular/recipe")
})

routes.get("/recipe/detailed-recipe",(req,res)=>{
    return res.render("layoutRegular/detailed-recipe")
})


module.exports = routes