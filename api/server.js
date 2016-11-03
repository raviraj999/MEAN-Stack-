var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://localhost:2701/meanhotel";

var _connection = null;

var open = function () {
    MongoClient.connect(dburl, function (err, db) {

        if (err) {
            console.log("DB connection failed");
            return;
        }
        _connection = db;
        console.log("Db connection open", db);
    });
};

var get = function () {
    return _connection;

};


//require("./api/data/dbconnection.js").open();

var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
app.set("port", 8000);


var routes = require("./api/routes");

app.use(function (req, res, next) {

    console.log(req.method, req.url);
    next();
});
app.use( express.static(path.join(__dirname, "Public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);




app.listen(8000, function () {
    console.log("Server is running on port 8000");
});








/*var express = require("express");
var bodyParser = require("body-parser");
var app = express()
app.use(bodyParser.json());
app.get("/", function (req, res) {
    
    res.send(201);
});
app.listen(3000, function () {
    console.log("Server listening on", 3000);
});

*/