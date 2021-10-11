const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema(
  {
    status: {
      type: String,
      require: true
    },
    totalResults: {
      type: Number,
      require: true
    },
    articles: 
    [
      {
        source: {
          id: {
            type: String || null,
            require: true
          },
          name: {
            type: String,
            require: true
          }
        },
        author: {
          type: String,
          require: true
        },
        title: {
          type: String, 
          require: true
        },
        description: {
          type: String, 
          require: true
        },
        url: {
          type: String, 
          require: true
        },
        urlToImage: {
          type: String,
          require: true
        },
        publishedAt: {
          type: String, 
          require: true
        },
        content: {
          type: String,
          require: true
        }
      }
    ]
  });

module.exports = mongoose.model("news", newsSchema, "news");