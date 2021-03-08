const express = require("express")

const routes = express.Router()


routes.get("/",(req,res)=>{
    return res.render("layoutRegular/index")
})

routes.get("/about",(req,res)=>{
    return res.render("layoutRegular/about")
})

routes.get("/chefs", (req,res)=>{
    return res.render("layoutRegular/chefs")
})

routes.get("/recipes",(req,res)=>{
    return res.render("layoutRegular/recipes")
})

routes.get("/founded", (req,res)=>{
   return  res.render("layoutRegular/founded-recipe")
})

routes.get("/recipes/id",(req,res)=>{
    return res.render("layoutRegular/detailed-recipe")
})


module.exports = routes