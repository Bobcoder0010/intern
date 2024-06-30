const express = require("express");

const mogoose = require("mongoose");
const bodypraser = require("body-parser");
const bodyParser = require("body-parser");
const app = express ();

mongoose.connect('mongodb://localhost:20455/NODE',{
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
app.get('/create',(req,res)=>{
    res.render('create');
})

app.post('/create',async(req,res)=>{
    const newitems = new item({name :req.body.name})
    await newitems.save();
    res.redirect('/')
})
app.get('/update/:id',async (req,res)=>{
    const item = await item.findbyid(req.params.id)
    res.render('update',{ item:item});
})

app.get('/update/:id',async (req,res)=>{
    await item.findbyidandupdate(req.params.id,{name:req.body.name})
    res.redirect('/');

});

app.post('./delete/:id',async (req,res)=>{
    await findbyidandremove(req.params.id);
   res.redirect('/')
 });













app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

