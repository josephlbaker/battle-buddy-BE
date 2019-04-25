const mongoose = require('mongoose');

// mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/battle-buddy-BE',
  { useNewUrlParser: true })

module.exports = {
  User: require("./models/user"),
  Post: require("./models/post"),
  Event: require("./models/event"),
  Comment: require("./models/comment"),
  Like: require("./models/like")
};
