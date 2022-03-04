const mongoose = require("mongoose");

const { Schema } = mongoose;

const ThemeSchema = new Schema({
  name: { required:true, type: String },
  avatar: { required:true, type: String },
});

const Theme = mongoose.model("Theme", ThemeSchema);

module.exports = Theme;
