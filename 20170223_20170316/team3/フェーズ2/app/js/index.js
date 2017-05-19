var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
    var url_parts = url.parse(req.url, false);
    var targetUrl = 'http://weather.livedoor.com/forecast/webservice/json/v1' + url_parts.search;

    http.get(targetUrl,
     
     (res2) => {
        res2.setEncoding('utf8');

        var body = '';
        res2.on('data', (chunk) => {
            body += chunk;
        });

        res2.on('end', (res3) => {
            res.writeHead(200, {
                'Content-Type': 'text/json',
                'Access-Control-Allow-Origin': '*'
            });
            res.write(body);
            res.end();
        });
    }).on('error', (err) => {
        console.log(err.message);
    });
});

server.listen(8080);