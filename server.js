const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // console.log(req.url);
    // res.write('Hello');
    // res.end();

    if( req.url === '/' || req.url === '/home'){
        // res.write('Home Page');
        // res.end();

        fs.readFile( __dirname + '/home.html', 'utf8', (err, data) => {
            if(err){
                res.writeHead(404);
                res.end();
                return console.log(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
        
    } else if ( req.url === '/about' ) {
        fs.readFile( __dirname + '/about.html', 'utf8', (err, data) => {
            if(err){
                res.writeHead(404);
                res.end();
                return console.log(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ( req.url === '/contact' ) {
        fs.readFile( __dirname + '/contact.html', 'utf8', (err, data) => {
            if(err){
                res.writeHead(404);
                res.end();
                return console.log(err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else{
        res.writeHead( 404 );
        res.end();
    }
}).listen(3030, () => {
    console.log('Running on 3030');
}); 