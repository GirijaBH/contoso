var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Pvt. Ltd.</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Contoso is a multinational company has their 12 Offices all over world.</li>"+
                    " <li>They want to deploy business application on cloud application with the help of Platform-as-a-Service </li>"+
                    " <li>Contoso has public Cloud subscription to use it as Infrastructure as a Service (I-a-a-S) and Platform As AService</li>"+
                    
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
