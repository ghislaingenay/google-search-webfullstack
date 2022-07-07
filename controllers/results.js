// Import Packages
const express = require('express')
const router = express.Router()

// const filtering = require("../services/filtering.js")
const Results = require("../models/results.js")


router.get("/", (req, res) => {
    res.render("results")
})

router.post("/", async (req, res) => {
    let resultArray =  await Results.find({
        title: req.body.search})
    res.render("results", {results: resultArray})
})


module.exports = router