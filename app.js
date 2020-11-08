var express = require("express");
var htmlroutes = require("./routes/html-routes");
var apiroutes = require("./routes/api-routes");
var app = express()
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiroutes);
app.use("/", htmlroutes);
app.listen(PORT, function() {
    console.log(`App listening on PORT: 
    ${PORT}`);
}) 

