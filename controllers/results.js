// Import Packages
const express = require('express')
const router = express.Router()

// const filtering = require("../services/filtering.js")
const Results = require("../models/results.js")


router.get("/", (req, res) => {
    res.render("results")
})

router.post("/", async (req, res, next) => {
    try {
        let reg = new RegExp(req.body.search)
        let resultArray = await Results.find({
            $or: [{
                    title: {
                        $regex: reg,
                        $options: "gi"
                    }
                },
                {
                    description: {
                        $regex: reg,
                        $options: "gi"
                    }
                },
                {
                    url: {
                        $regex: reg,
                        $options: "gi"
                    }
                }
            ]

        }, )
        res.render("results", {
            results: resultArray
        })
    } catch (err) {
        next(err)
    }
})

// router.post("/", async (req, res, next) => {
//     try {
//         let resultArray = await Results.aggregate([{
//             $search: { "text":{
//                 "query": req.body.search,
//                 "path": "description"
//             }}
//         }, ])
//     } catch (err) {
//         next(err)
//     }
// })


module.exports = router