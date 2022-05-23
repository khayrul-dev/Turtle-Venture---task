const mongoose = require("mongoose")

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  chanel: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const Station = mongoose.model('Station', stationSchema)
module.exports = Station;