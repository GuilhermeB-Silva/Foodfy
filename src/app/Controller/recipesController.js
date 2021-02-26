module.exports = {
    index(req,res){
        return res.render("layoutAdmin/index")

    },
    create(req,res){
        return res.render("layoutAdmin/create")
    },
    show(req,res){
        return res.render("layoutAdmin/detailed-recipe")
    },
    edit(req,res){
        return res.render("layoutAdmin/edit")
    }
}