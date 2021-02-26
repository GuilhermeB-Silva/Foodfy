const express = require("express")
const recipes = require("../app/Controller/recipesController")


const routes = express.Router()

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create",recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", ); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", ); // Mostrar formulário de edição de receita

routes.post("/admin/recipes",); // Cadastrar nova receita
routes.put("/admin/recipes", ); // Editar uma receita
routes.delete("/admin/recipes"); // Deletar uma receita


module.exports = routes 