require('dotenv').config()
const mongoose = require('./connection')
const Player = require('./player')


mongoose.connection.on('open', () => {


    const startingPlayers =  [
        { name: "Casillas", postition: "GK", country: 'Spain', PAC: '80', SHO: '80', PAS: '80', DRI: '80', DEF: '80', PHY: '80'},
        { name: "Modric", postition: "CDM", country: 'Croatia', PAC: '80', SHO: '80', PAS: '80', DRI: '80', DEF: '80', PHY: '80'},
        { name: "Messi", postition: "ST", country: 'Argentina', PAC: '80', SHO: '80', PAS: '80', DRI: '80', DEF: '80', PHY: '80'},
      ]
      

      Player.deleteMany({}, (err, data) => {

        Player.create(startingPlayers, (err, data) =>{

            console.log(data)
            
        })

      })
      
})