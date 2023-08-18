const fs = require('fs');
const http=require('http');
const server = http.createServer(async function (req, res) { //http içerisindeki servera erişmiş oluyoruz.
    res.writeHead(200,{'Content-Type':'text/html'});
    // Sunucu açık tüm requestler buraya geliyor
    if(req.url == "/") req.url = "/giris.html"
    console.log(`${__dirname}${req.url}`);
    if (fs.existsSync(`${__dirname}${req.url}`) || fs.existsSync(`${__dirname}${req.url}.html`)) {
        // İstenilen url var
        if (fs.existsSync(`${__dirname}${req.url}.html`)) {
            // İstenilen url bir sayfa
            fs.readFile(`${__dirname}${req.url}.html`,function(err,data){
                if(err) throw err;
                res.write(data);
                return res.end();
            })
        } else {
            // İstenilen url bir sayfa değil
            fs.readFile(`${__dirname}${req.url}`, function(err, data) {
                if(err) throw err;
                res.write(data);
                return res.end();
            })
        }
    } else return res.end(); // İstenilen url yok response yok
})
server.listen(8080,'localhost'); 
    console.log('8080 portu dinleniyor');