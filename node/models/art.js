// Require mongoose module
const mongoose = require("mongoose");

// Define a ArtSchema. Note: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Mongoose v6.1.3: Schemas (mongoosejs.com)
const ArtSchema = mongoose.Schema({
    name: String, 
    category: String,
    description: String,
    image: String
});

// Create the model for ArtSchema


// Export the model.
const Art = (module.exports=mongoose.model("Art", ArtSchema))
