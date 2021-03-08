const express = require("express")

const routes = express.Router()

const Chef = require("../../app/Controller/chefsController")



routes.get("/admin/chefs",Chef.index); // Mostrar a lista de receitas
routes.get("/admin/chef/create",Chef.create); // Mostrar formulário de nova receit
routes.get("/admin/chef/id",Chef.detailedChef); // Exibir detalhes de uma receita
routes.get("/admin/chef/id/edit",Chef.editChef,); // Mostrar formulário de edição de receita


routes.post("/admin/chefs",); // Cadastrar nova receita
routes.put("/admin/chefs", ); // Editar uma receita
routes.delete("/admin/chefs"); // Deletar uma receita


module.exports = routes 



module.exports = routes