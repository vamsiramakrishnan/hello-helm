var express = require('express');
var pjson = require('./package.json');
var version_string = pjson.version.toString()
var app = express();
var toolchain = {toolchain:["Oracle + Wercker","Kubernetes","Docker","Oracle Kubernetes Engine","Oracle Container Registry"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(toolchain));
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
