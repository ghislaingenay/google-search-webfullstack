const mongoose = require('mongoose')

// Create the results moodel

const searchSchema = new mongoose.Schema({
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
}

const Search = mongoose.model("Search", searchSchema)

