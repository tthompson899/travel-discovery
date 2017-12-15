var mongoose = require("mongoose");

// USER SCHEMA
var userSchema = new mongoose.Schema({
	name: String,
	email: String
});

var User = mongoose.model("User", userSchema);

// EXPORTS
module.exports = User;