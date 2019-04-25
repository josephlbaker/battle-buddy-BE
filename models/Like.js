const mongoose = require("mongoose");

Schema = mongoose.Schema;

const LikeSchema = new Schema({
  selectedUser: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  currentUser: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  Like: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("like", LikeSchema);
