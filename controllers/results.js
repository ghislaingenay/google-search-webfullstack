// Import Packages
const express = require('express')
const router = express.Router()

let results = [{
        title: 'JS tutorials',
        description: 'The best JavaScript tutorials in the galaxy!',
        url: 'https://www.w3schools.com',
        links: [{
            title: 'JS for Beginners',
            url: 'https://www.w3schools.com/js'
        }, {
            title: 'JS for the Web',
            url: 'https://www.w3schools.com/js'
        }]
    }, {
        title: 'JavaScript | MDN',
        description: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first - class ",
        url: 'developer.mozilla.org',
        links: [{
            title: 'JavaScript Operator',
            url: 'https://www.w3schools.com/js'
        }, {
            title: 'JS for the Web',
            url: 'https://www.w3schools.com/js'
        }]
    },
    {
        title: 'JavaScript - Wikipedia - Tortuga Coders',
        description: "JavaScript is often abbreviated as JS, is a programming language that conforms to the ECMAScript specification interpreted, or just-in-time compiled programming language with first - class ",
        url: 'en.wikipedia.org',
        links: [{
            title: 'JavaScript Operator',
            url: 'https://www.w3schools.com/js'
        }, {
            title: 'JS for the Web',
            url: 'https://www.w3schools.com/js'
        }]
    },

]




router.get("/results", (req, res) => {  
    res.render("results", {results})
})
// Create POST controller
// router.post("/results", (req, res) => {
//    let research = req.body.search
//    res.send("This is done")
//   })
// Export module
module.exports = router