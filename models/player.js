//////////////////////////////////////////////
//////// Player Model
///////////////////////////////////////////////
const mongoose = require('./connection')

const { Schema, model } = mongoose


const playersSchema = new Schema({
    name: String,
    position: String,
    country: String,
    PAC: String,
    SHO: String,
    PAS: String,
    DRI: String,
    DEF: String,
    PHY: String,
    username: String
});

const Player = model('Player', playersSchema)

module.exports = Player