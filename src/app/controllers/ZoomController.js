
class homeController{
    //[GET] 
    index(req, res){
        res.render('zoom',{
            name: req.session.name
        });
    }
}

module.exports = new homeController;
