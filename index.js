const mongoose = require('mongoose');

// mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/battle-buddy-BE',
  { useNewUrlParser: true })

module.exports = {
  User: require("models/User"),
  Post: require("models/Post"),
  Event: require("models/Event"),
  Comment: require("models/Comment"),
  Like: require("models/Like")
};
