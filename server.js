console.log("server.js started...");


console.log('merge this to that')

var express = require('express');

var path = require('path');

var app = express();

const publicPath  = path.join(__dirname,'../public');
app.use(express.static(publicPath));

// app.get('/',(req,res)=>{

//     res.render('index.html')
// })


app.listen(3000);