var express=require("express");

var app=express();

app.get("/", function(req, res){
    res.send("node.js (Marliot.com)");
});

app.listen(3000);