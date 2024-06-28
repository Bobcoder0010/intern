const express = require("express");

const mogoose = require("mongoose");
const bodypraser = require("body-parser");
const bodyParser = require("body-parser");
const app = express ();

mongoose.connect('mongodb://localhost:2045/NODE',{
useNewUrlparse: true,
useUnifiedTopology: true

});
app.use (bodyParser.urlencoded({extended:true}));
app.use (express.static('public'));
app.set ('view engine','ejs');
 
const Item =    require ('./models/item');
 
app.get('/',async (req,res)=>{
    const items = await Item.find();
    res.render('index',{items:items    });
});








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

