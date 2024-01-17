var fs = require('fs');
var https = require('https');
const path = require('path');
const express = require('express')
const app = express()
port = 443

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/yurii.shushanskyi.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/yurii.shushanskyi.com/fullchain.pem')
};

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

https.createServer(options, app).listen(port, function () {
    console.log(`HTTPS server listening on port ${port}`);
    console.log(`press CTRL+C to stop server`)
});