// Import Packages
const express = require('express')
const router = express.Router()

router.get("/results", (req, res) => {
    res.send("results")
})
// Create POST controller
// router.post("/results", (req, res) => {
//    let research = req.body.search
//    res.send("This is done")
//   })
// Export module
module.exports = router
