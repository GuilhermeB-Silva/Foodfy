const express = require("express")
const Recipes = require("../app/Controller/recipesController")


const routes = express.Router()

routes.get("/admin/recipes", Recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create",Recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/id",Recipes.show ); // Exibir detalhes de uma receita
routes.get("/admin/recipes/id/edit",Recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes",); // Cadastrar nova receita
routes.put("/admin/recipes", ); // Editar uma receita
routes.delete("/admin/recipes"); // Deletar uma receita


module.exports = routes 