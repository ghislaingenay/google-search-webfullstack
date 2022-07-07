// Import Packages
const express = require('express')
const router = express.Router()

const filtering = require("../services/filtering.js")
const Results = require("../models/results.js")


const searchResults = async (search) => {
   let resultArray =  await Results.find({}, err => {
        console.log(err)
    })
    console.log(resultArray)
    return {results: resultArray}
}


router.get("/", (req, res) => {
    res.render("results")
})

router.post("/", async (req, res) => {
    res.render("results", searchResults(req.body.search))
})

// router.post("/", (req, res) => {
//     res.render("results", {
//         results: filtering(data, req.body.search)
//     })
// })

module.exports = router