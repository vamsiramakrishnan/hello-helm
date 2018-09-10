var express = require('express');
var app = express();
var toolchain = {cities:["Oracle + Wercker","Kubernetes","Docker","Oracle Kubernetes Engine","Oracle Container Registry"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
