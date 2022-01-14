// Require mongoose module
const mongoose = require("mongoose");

// Define a PageSchema. Note: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Mongoose v6.1.3: Schemas (mongoosejs.com)
const PageSchema = mongoose.Schema({
    name:  String, 
    slug: String,   //user-friendly name
    content:   String
});

// Create the model for PageSchema


// Export the model.
const Page = (module.exports=mongoose.model("Page", PageSchema))
