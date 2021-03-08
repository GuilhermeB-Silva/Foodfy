module.exports = {
    index(req,res){
        return res.render("layoutAdmin/recipes/index")

    },
    create(req,res){
        return res.render("layoutAdmin/recipes/create")
    },
    show(req,res){
        return res.render("layoutAdmin/recipes/detailed-recipe")
    },
    edit(req,res){
        return res.render("layoutAdmin/recipes/edit")
    }
}