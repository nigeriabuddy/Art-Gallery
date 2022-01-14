// All API calls are routed from this file for arts collection

// Create a router module
const express = require("express");
const router = express.Router();

// Require the art model
const Art = require("../models/art");

// Define the GET method on the router. 
router.get("/", (req, res) => {
    // Use find({}) query to retrieve the documents from the collection
    Art.find({}, (error, arts) => {
        if(error) console.log("Error in Arts " + error)
        // Display the response in json
        res.json(arts);
    }) // End of find
}) // End of get

router.post("/", (req, res) => {
    const name = req.fields.name;
    const category = req.fields.category;
    const description = req.fields.description;
    const image = req.fields.image;

    const art = new Art({
        name: name,
        category: category,
        description: description,
        image: image
    });



    art.save((error) => {
        if(error) console.log("Error in Art " + error)
        res.status(201).end();
    }) 
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.fields.name;
    const category = req.fields.category;
    const description = req.fields.description;
    const image = req.fields.image;

    Art.findById(id, (error, art) => {
        if(error) console.log("Error in art" + error)
        art.name = name;
        art.category = category;
        art.description = description;
        art.image = image;
        art.save((error) => {
            if(error) console.log("Error in Art " + error)
            res.status(201).end();
        }) 
    });
}); 

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Art.findByIdAndRemove(id, (error) => {
        if(error) console.log("Error in Art " + error)
        else {
            res.status(204).end();
        }
    });
});


// Export the router
module.exports = router;

