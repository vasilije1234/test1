var express = require("express");
var path = require("path");
var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);
// app.set("views",path.join(__dirname,"views"));
// app.set("view engine", "html");

app.use(routes);
app.use(express.static(__dirname + '/public'));

app.listen(app.get("port"), function (){
  console.log("Server started on port 3000");
});