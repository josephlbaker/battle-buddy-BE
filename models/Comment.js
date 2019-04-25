const mongoose = require("mongoose");

Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now(),
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "post"
  }
});

module.exports = mongoose.model("comment", CommentSchema);
