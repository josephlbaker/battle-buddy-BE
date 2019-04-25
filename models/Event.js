const mongoose = require("mongoose");

Schema = mongoose.Schema;

const EventSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now(),
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  game: {
    type: String,
    required: true
  },
  players: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "post"
  }
});

module.exports = mongoose.model("event", EventSchema);
