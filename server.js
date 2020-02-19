const express = require('express');

const exphbs  = require('express-handlebars');
 
const app = express();

const bodyParser = require('body-parser');

const productModel = require("./model/product");
const productHome = require("./model/home");
const productSell = require("./model/bestsell");
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req,res) =>{
    res.render("index",{
        title:"Home",
        style:`home.css`,
        home: productHome.getAllSection(),
        bestsell:productSell. getAllSection()
    });
});

app.get('/product', (req,res) =>{
    res.render("product",{
        title:"products",
        style:`products.css`,
        headingInfo: "All Electronics",
        products :productModel.getAllProducts()
    });
});

app.get('/registration', (req,res) =>{
    res.render("registration",{
        title:"Registration",
        headingInfo: "Registration",
        style:`info.css`
    });
});

app.get('/login', (req,res) =>{
    res.render("login",{
        title:"Login",
        headingInfo: "Sign-in",
        style:`info.css`
    });
});

const  PORT=process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server is working', 4000);
});