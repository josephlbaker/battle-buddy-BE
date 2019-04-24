const mongoose = require('mongoose');

// mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/battle-buddy-BE',
  { useNewUrlParser: true })

module.exports = {
  User: require("./user"),
  Post: require("./post"),
  Event: require("./event"),
  Comment: require("./comment"),
  Like: require("./like")
};
