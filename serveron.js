const http = require('http');

let app = http.createServer((req, res) => {  
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('NodeJS Server Online!');
});

// Start the server on port 3000
app.listen(3000, 'localhost');
