require('dotenv').config();
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express();
app.use(bodyParser.json());
 app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));
// mongodb://127.0.0.1:27017/foodie-db mongosh show dbs 
 mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser: true,
        useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
app.post("/email",(req,res)=>{
    var email = req.body.email;  
    var data = {
        "email" : email,   
    }
    console.log(data)
    db.collection('email').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('index.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(4500);
console.log("listening on 4500");