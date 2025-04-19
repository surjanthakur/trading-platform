const mongoose = require("mongoose")
const Holding = require("../models/holdings")
const Position = require("../models/positions")
const WatchList = require("../models/watchList")
const { positions, holdings, watchlist } = require("./data")

//data-base
mongoose.connect('mongodb://127.0.0.1:27017/trading-platform')
    .then(() => console.log('db is Connected!'))
    .catch((err) => {
        console.log(err)
    })


const initDB = async () => {
    await Holding.deleteMany({})
    await Position.deleteMany({})
    await WatchList.deleteMany({})


    let newHolding = holdings.map((obj) => ({ ...obj }))
    let newPosition = positions.map((obj) => ({ ...obj }))
    let newWatchList = watchlist.map((obj) => ({ ...obj }))

    await Holding.insertMany(newHolding)
    await Position.insertMany(newPosition)
    await WatchList.insertMany(newWatchList)
    console.log("data is save in db !")
}

initDB();
