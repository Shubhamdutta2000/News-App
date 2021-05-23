import express from "express";
const router = express.Router();
import {
  fetchAllNews,
  searchNews,
  fetchCategoryNews,
} from "../controller/newsController.js";

// routes
router.get("/", fetchAllNews);
router.get("/category", fetchCategoryNews);
router.post("/search", searchNews);

export default router;
