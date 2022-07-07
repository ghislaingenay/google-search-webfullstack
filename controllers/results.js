// Import Packages
const express = require('express')
const router = express.Router()

const filtering = require("../services/filtering.js")
const Results = require("../models/results.js")


const searchResults = async () => {
    return Results.find({
        title: req.body.search,
        description: req.body.search,
        url: req.body.search,
    })
}

router.get("/", (req, res) => {
    res.render("results")
})

router.post("/", (req, res) => {
    res.render("results", searchResults)
})


// router.post("/", (req, res) => {
//     res.render("results", {
//         results: filtering(data, req.body.search)
//     })
// })

module.exports = router