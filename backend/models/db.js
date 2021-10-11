const mongoose = require("mongoose");
const mongourl = "mongodb://127.0.0.1:27017/newsapi";
mongoose.connect(mongourl, { useNewUrlParser : true, useUnifiedTopology : true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));