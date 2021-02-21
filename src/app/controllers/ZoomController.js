
class homeController{
    //[GET] 
    index(req, res){
        res.render('zoom');
    }
}

module.exports = new homeController;
