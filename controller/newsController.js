import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY;

//  @purpose: fetch all top-headline news
//  @access:  Public
//  @route:   GET /

export const fetchAllNews = async (req, res) => {
  try {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=in&" +
      `apiKey=${API_KEY}`;

    const news_get = await axios.get(url);
    res.render("news", { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
};

//  @purpose: fetch all news by category
//  @access:  Public
//  @route:   GET /:category

export const fetchCategoryNews = async (req, res) => {
  const category = req.params.category;

  try {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      `country=in&category=${category}&` +
      `apiKey=${API_KEY}`;

    const news_get = await axios.get(url);
    res.render("news", { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
};

//  @purpose:  search news
//  @access:  Public
//  @route:   POST /search

export const searchNews = async (req, res) => {
  const search = req.body.search;
  // console.log(req.body.search)

  try {
    var url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

    const news_get = await axios.get(url);
    res.render("news", { articles: news_get.data.articles });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
};
