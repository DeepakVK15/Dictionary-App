//express module 
var express = require('express');
//express app
var app = express();

//view engine is set to ejs
app.set('view engine','ejs');

//setting the directory of views
app.set('views','./views');

//path of static directory
app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
    res.render('index');
});

var server = app.listen(8080, function () {
    console.log("Server listening on port 8080");
});
