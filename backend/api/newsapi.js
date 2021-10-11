const express = require("express");
const { Router } = require("express");
const request = require("request");
const router = Router();
const newsModel = require("./news.model");
require("dotenv").config({ path: ".env" });

const API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES = `${API_URL}/top-headlines`;
const COUNTRY = 'us';
const PAGE_SIZE = '15';
const API_KEY = process.env.NEWS_API_KEY;

router.get('/top', async (req, res) => {
  let results = await request(`${TOP_HEADLINES}?country=${COUNTRY}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`, (error, response, body) => {
    if (!error && body != null) {
      res.json(JSON.parse(body))
    }
  })
})

module.exports = router;