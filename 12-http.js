const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url ==='/about'){
        res.end("I don't know shit about shit. Fuck off.");
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">back home<a>
    `);
})

server.listen(3000);