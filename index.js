const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
//db


const pokemon = require('./routes/pokemon');

//pagers

const user = require('./routes/user');

//middleware owo

const aut = require('./middleware/auth')
const notFound = require('./middleware/notFound')

//not middleware uwu

const indexing= require('./routing/index')

//code use
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//vanillacode

app.get("/",indexing);
app.use("/user",user);
app.use(aut);
app.use("/pokemon",pokemon);

app.use(notFound );

app.listen(process.env.PORT || 3000 , ()=>{console.log('server running')});