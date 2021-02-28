const cheerio = require('cheerio');
const request = require('request-promise');

class standingsController{
    
    index(req, res, next){
        request('https://www.24h.com.vn/bong-da/bang-xep-hang-bong-da-anh-c48a466585.html', (error, response, html) => {
            if(!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                let standings = [];
                var date_flag = '';
                $('.tblCustom tbody tr').each((index, el) => {
                    if(index > 1 && index < 22){
                        var team = $(el).find('.team').text();
                        var mp = $(el).find('.mp').text();
                        var won = $(el).find('.won').text();
                        var drawn = $(el).find('.drawn').text();
                        var lost = $(el).find('.lost').text();
                        var gf = $(el).find('.gf').text();
                        var ga = $(el).find('.ga').text();
                        var gd = $(el).find('.gd').text();
                        var points = $(el).find('.points').text();
                        index--;
                        standings.push({
                            team, index, mp, won, drawn, lost, gf, ga, gd, points
                        });



                        /*var date = $(el).find('.match-hour font').first().text();
                        var time = $(el).find('.match-hour font').last().text();
                        var team_a = $(el).find('.team-a font').first().text();
                        var team_b = $(el).find('.team-b font').first().text();
                        var match_day = $(el).find('.score-time.status p font b font').text();

                        if(date_flag == date) date = '';
                        else date_flag = date;

                        var match_day_check_1 = true;
                        var match_day_check_2 = false;
                        if(match_day != ''){
                            match_day_check_1 = false;
                            match_day_check_2 = true;
                        }

                        if(match_day == '' && team_a == ''){}
                        else
                        match.push({
                            date, time, team_a, team_b, match_day, match_day_check_1, match_day_check_2
                        });*/
                        
                    }
                })
                res.render('standings',{
                    standings: standings,
                    name: req.session.name
                })
            }
            else {
                console.log(error);
            }
        });
    }
    
}

module.exports = new standingsController;