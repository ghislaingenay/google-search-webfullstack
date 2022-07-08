const mongoose = require('mongoose')

// Create the results moodel

const resultSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  links: [{
    title: String,
    url: String,
  }]
})

module.exports = mongoose.model("results", resultSchema)

