var express = require('express')
var app = express()
app.use(express.static('.'))
 
    
   
    console.log("connected to the mongoDB !");
app.get('/', function (req, res) {
   
    
    
    
    
 res.sendFile(__dirname+'/contact.html');
})

app.get('/submit', function (req, res) {
     
 res.send(req.query.firstname+" "+req.query.lastname+" ");
    var MongoClient = require('mongodb').MongoClient;
 
var myCollection;
var db = MongoClient.connect('mongodb://sweetsathome:123456@ds145188.mlab.com:45188/sweetsathome', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('test_collection');
     myCollection.insert({fname:req.query.firstname, lname:req.query.lastname , description: "learn more than everyone"}, function(err, result) {
    if(err)
        throw err;
 
    console.log("entry saved");
});
});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
