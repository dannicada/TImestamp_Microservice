const http = require("http");

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello world');
};

const server = http.createServer(requestHandler);
server.listen(process.env.PORT || 4100, err => {
    if (err) throw err;

    console.log('Server running on PORT ${server.address().port}');
});