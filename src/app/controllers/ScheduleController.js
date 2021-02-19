const cheerio = require('cheerio');
const request = require('request-promise');

class allFootballClubController{
    // [GET] /all-fb-club
    index(req, res, next){
        request('https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-anh-c48a466567.html', (error, response, html) => {
            if(!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                let match = [];
                $('.tblCustom tbody tr').each((index, el) => {
                    if(index != 0){
                        var date = $(el).find('.match-hour font').first().text();
                        var time = $(el).find('.match-hour font').last().text();
                        var team_a = $(el).find('.team-a font').first().text();
                        var team_b = $(el).find('.team-b font').first().text();
                        var match_day = $(el).find('.score-time.status p font b font').text();
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
                        });
                    }
                })
                res.render('schedule',{
                    match: match
                })
            }
            else {
                console.log(error);
            }
        });
    }
    
}

module.exports = new allFootballClubController;