module.exports = {
    index(req,res){
        return res.render("layoutAdmin/index")

    },
    create(req,res){
        return res.render("layoutAdmin/create")
    }
}