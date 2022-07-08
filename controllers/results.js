// Import Packages
const express = require('express')
const router = express.Router()

// const filtering = require("../services/filtering.js")
const Results = require("../models/results.js")


router.get("/", (req, res) => {
    res.render("results")
})

// router.post("/", async (req, res) => {
//     let resultArray =  await Results.find({
//         title: req.body.search})
//     res.render("results", {results: resultArray})
// })

router.post("/", async (req, res) => {
    let reg = new RegExp(req.body.search)
    let resultArray = await Results.find({
                'title': {
                    $regex: reg,
                    $options: "i"
                }
            })
    console.log(resultArray)
    res.render("results", {results: resultArray})
})



// router.post("/", async (req, res) => {
//     let reg = new RegExp(req.body.search)
//     let resultArray = Results.find({
//         $or: [{
//                 title: {
//                     $regex: reg,
//                     $options: "gi"
//                 }
//             },
//             {
//                 description: {
//                     $regex: reg,
//                     $options: "gi"
//                 }
//             },
//             {
//                 url: {
//                     $regex: reg,
//                     $options: "gi"
//                 }
//             },
//             err => {
//                 console.log(err)
//             }
//         ]
//     })
//     console.log(resultArray)
//     res.render("results", {
//         results: resultArray
//     })
// })



module.exports = router