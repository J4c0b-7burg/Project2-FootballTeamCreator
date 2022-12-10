////////////////////////////////////////
// Imported Dependencies
////////////////////////////////////////
const express = require("express");
const Player = require("../models/player");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  });
  
  router.get('/seed', (req, res) => {
  
      
  
})

//index
router.get("/", (req, res) => {
    Player.find({username: req.session.username}, (err, players) => {
      res.render("players/index.ejs", { players });
    });
});

router.get('/new', (req, res) => {
    res.render('players/new.ejs')
})

//create
router.post("/", (req, res) => {
    req.body.username = req.session.username
    Player.create(req.body, (err, player) => {
      res.redirect("/players");
    });
});

//edit route
router.get('/:id/edit', (req, res) => {

  const id = req.params.id
  Player.findById(id, (err, foundPlayer) => {
      res.render('players/edit.ejs', { fruit: foundPlayer })
  })
})

//update
router.put('/:id', (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedPlayer) => {
        console.log(updatedPlayer)

        res.redirect(`/players/${req.params.id}`)
        
    })
})

//show
router.get('/:id', (req, res)=>{
    Player.findById(req.params.id)
    .then((player)=> {
        res.render('players/show.ejs', {player})
    })
})

//delete
router.delete('/:id', async (req, res) => {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id)

    if(deletedPlayer){
        res.redirect('/players/')
    }
})

/////////////
///// Exporter
//////////////
module.exports = router