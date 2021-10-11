const express = require("express");
const cors = require("cors");
const app = express();
const NewsAPI = require('./api/newsapi');
require('./models/db');

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cross Origin for Angular Application.
app.use(cors());

// News API Route
app.use('/api/news', NewsAPI);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});