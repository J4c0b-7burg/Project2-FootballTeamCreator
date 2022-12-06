require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = process.env.PORT

const app = express()

//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////

app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("mainIndex.ejs")
});

app.listen(PORT, ()=> console.log(`I know something you do not, I am on port ${PORT}`))