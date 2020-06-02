const express = require('express');
const router = express.Router();
const app = express();
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
let userModel = require('./models/users');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user_router');

const PORT = 3000;
const URI = "mongodb+srv://heads:heads@cluster0-v6kuo.mongodb.net/test?retryWrites=true&w=majority"

//middle ware
app.set(cors());
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

//database connection
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true});
let connection = mongoose.connection;
connection.once('open',() => {
    console.log('db connection established');
})
mongoose.set('useFindAndModify',false);

//routes
app.get('/',(req,res)=>{
    res.render('index');
})

app.use('/users',userRouter);


//listener
app.listen(PORT,()=>{
    console.log('listing on port 3000');
})

