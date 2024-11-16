const mongoose  = require("mongoose");

const newsSchema = mongoose.Schema({
    news : { type : String },
    date : {type : String},
    category : { type : String},
    publishedby : {type : String }
});

const News = mongoose.model('News', newsSchema);

module.exports = { News };
