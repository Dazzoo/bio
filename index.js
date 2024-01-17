var fs = require('fs');
var https = require('https');
const express = require('express')
const app = express()
port = 80

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/yurii.shushanskyi.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/yurii.shushanskyi.com/fullchain.pem')
};

app.get("/", async (req, res) => {
    res.end(JSON.stringify({Test: "Test response."}))
})

https.createServer(options, app).listen(80, function () {
    console.log('HTTPS server listening on port 80');
    console.log(`press CTRL+C to stop server`)
});