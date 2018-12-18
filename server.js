var express = require("express");
var app = express();
app.use(express.static(__dirname+"/dist/shop"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res)=> {
res.sendFile(__dirname + "/dist/shop/index.html");
});

var Product=require('./models/products');
app.get('/getproducts',(req,res)=>{
  Product.find((err,data)=>{
    res.send(data);
  })

});
app.post('/removeproduct', function(req, res){
  Product.remove({_id:req.body.id},(err,data)=>{
    res.send('delete product!');
  })
})
app.listen(process.env.PORT || 8080);
console.log("run server!");
