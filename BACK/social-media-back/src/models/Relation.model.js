const mongoose = require("mongoose");

const { Schema } = mongoose;

const RelationSchema = new Schema({
  USER_ID: { type: Schema.Types.ObjectId, ref: "User" },
  subscribers:[{ type: Schema.Types.ObjectId, ref: "User" }],
  subscriptions:[{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Relation = mongoose.model("Relation", RelationSchema);

module.exports = Relation;
