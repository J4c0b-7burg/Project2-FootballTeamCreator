require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = process.env.PORT
const PlayerRouter = require('./controllers/player')
const UserRouter = require('./controllers/user')
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express()

//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
}))

app.get("/", (req, res) => {
    res.render("mainIndex.ejs")
});

app.use('/players', PlayerRouter)
app.use('/user', UserRouter)

app.listen(PORT, ()=> console.log(`I know something you do not, I am on port ${PORT}`))