const cheerio = require('cheerio');
const request = require('request-promise');

class scheduleController{
    
    index(req, res, next){
        request('https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-anh-c48a466567.html', (error, response, html) => {
            if(!error && response.statusCode == 200) {

                let match = [];

                var patt_1 = /<table[^\>]*>(.*)<\/table>/gms            //Tach table
                var result_1 = html.match(patt_1);
                var patt_2 = /<tr[^\>]*>(.*?)<\/tr>/gms                 //Tach tr
                var result_2 = result_1.toString().match(patt_2);
                var patt_3 = /<td[^\>]*>(.*?)<\/td>/gms                 //Tach td
                var result_3 = result_2.toString().match(patt_3);
                
                //  TEAM-A
                var patt_get_team_a = /<td[^\>]*(class)*(team-a)(.*?)>(.*?)<\/td>/gms
                var team_a = result_3.toString().match(patt_get_team_a);
                var patt_4 = /<p[^\>]*>(.*?)<\/p>/gms                   //Tach p
                var result_4 = team_a.toString().match(patt_4);
                var patt_5 = /<b[^\>]*>(.*?)<\/b>/gms                   //Tach b
                var result_5 = result_4.toString().match(patt_5);
                var patt_6 = /<font[^\>]*>(.*?)<\/font>/gms             //Tach font
                var result_6 = result_5.toString().match(patt_6);
                var patt_7 = /(?<=\>)(.*?)(?=<)/gms                     //Tach noi dung trong the
                var result_7 = result_6.toString().match(patt_7);
                var teamA = result_7.toString().replace(/,,,/g, '\n');    //Format
                teamA = teamA.replace('&amp;', '&');
                //  TEAM-A

                //  TEAM-B
                var patt_get_team_b = /<td[^\>]*(class)*(team-b)(.*?)>(.*?)<\/td>/gms
                var team_b = result_3.toString().match(patt_get_team_b);
                patt_4 = /<p[^\>]*>(.*?)<\/p>/gms                   //Tach p
                result_4 = team_b.toString().match(patt_4);
                patt_5 = /<b[^\>]*>(.*?)<\/b>/gms                   //Tach b
                result_5 = result_4.toString().match(patt_5);
                patt_6 = /<font[^\>]*>(.*?)<\/font>/gms             //Tach font
                result_6 = result_5.toString().match(patt_6);
                patt_7 = /(?<=\>)(.*?)(?=<)/gms                     //Tach noi dung trong the
                result_7 = result_6.toString().match(patt_7);
                var teamB = result_7.toString().replace(/,,,/g, '\n');    //Format
                teamB = teamB.replace('&amp;', '&');
                //  TEAM-B

                //Match Day
                var patt_match_day = /<td[^\>]*(class)*(day)(.*?)>(.*?)<\/td>/gms
                var matchDay = result_3.toString().match(patt_match_day);
                patt_4 = /<p[^\>]*>(.*?)<\/p>/gms                   //Tach p
                result_4 = matchDay.toString().match(patt_4);
                patt_5 = /<b[^\>]*>(.*?)<\/b>/gms                   //Tach b
                result_5 = result_4.toString().match(patt_5);
                patt_6 = /<font[^\>]*>(.*?)<\/font>/gms             //Tach font
                result_6 = result_5.toString().match(patt_6);
                patt_7 = /(?<=\>)(.*?)(?=<)/gms                     //Tach noi dung trong the
                result_7 = result_6.toString().match(patt_7);
                var match_day = result_7.toString().replace(/,,,/g, '\n');    //Format
                //Match Day
                teamA = teamA.split('\n');
                teamA.shift();
                teamB = teamB.split('\n');
                teamB.splice(51,0,'TOTTENHAM HOSPUR');
                match_day = match_day.split('\n');
                var date = [];
                var time = [];
                var k = "";
                for(var i=0;i<match_day.length;i++){
                    if(match_day[i].includes(',')){
                        continue;
                    }
                    if(match_day[i].includes('/')){
                        if(k!=match_day[i]){
                            date.push(match_day[i]);
                            k=match_day[i];
                        }
                        else
                            date.push('');
                    }
                    if(match_day[i].includes(':')){
                        time.push(match_day[i]);
                    }
                    if(match_day[i].includes('-')){
                        date.push('');
                        time.push('');
                    }
                }
                date.splice(51,0,'22/3');
                time.splice(51,0,'02:30');
                for(var i=0;i<teamA.length;i++){
                    var team_A = teamA[i];
                    var team_B = teamB[i];
                    var datepr = date[i];
                    var timepr = time[i];
                    match.push({team_A,team_B,datepr,timepr});
                }

                res.render('schedule',{
                    match: match,
                    name: req.session.name
                })
            }
            else {
                console.log(error);
            }
        });
    }
    
}

module.exports = new scheduleController;