module.exports = {

    index(req,res){
        return res.render("layoutAdmin/chefs/index")
    },
    create(req,res){
        return res.render("layoutAdmin/chefs/create")
    },
    detailedChef(req,res){
        return res.render("layoutAdmin/chefs/detailed-chef")
    },
    editChef(req,res){
        return res.render('layoutAdmin/chefs/edit')
    }


}