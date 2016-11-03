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

moudle.exports = {

    open: open,
    get: get,
    MongoClient: MongoClient

};