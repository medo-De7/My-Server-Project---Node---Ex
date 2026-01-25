//-Mongoose Init
const db = require('mongoose');
//--Schema Creating
const schema = db.Schema;
//--Schema Editing
const postSchema = new schema({
    title: String
,   paragraph: String
,   NoLikes: Number
,   Date: Date
})
//--Model Preparing

const post = db.model("Post",postSchema);

//-Exporting
module.exports = post;

