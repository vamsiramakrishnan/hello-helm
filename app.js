var express = require('express');
var app = express();
var pjson = require('./package.json');
var toolchain = {toolchain:["Oracle + Wercker","Kubernetes","Docker","Oracle Kubernetes Engine","Oracle Container Registry", pjson.version]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(toolchain));
    res.end();
});

var port = process.env.PORT || 80;
app.listen(port);

module.exports = app;
