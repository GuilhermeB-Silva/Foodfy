const express = require("express")
const routes = express.Router()

const Recipes = require("../../app/Controller/recipesController")


// nao tem roda /admin
routes.get("/admin/recipes", Recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create",Recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/id",Recipes.show ); // Exibir detalhes de uma receita
routes.get("/admin/recipes/id/edit",Recipes.edit); // Mostrar formulário de edição de receita
routes.get("/admin/chefs"); // Mostrar a lista de chefs



routes.post("/admin/recipes",); // Cadastrar nova receita
routes.put("/admin/recipes", ); // Editar uma receita
routes.delete("/admin/recipes"); // Deletar uma receita


module.exports = routes 