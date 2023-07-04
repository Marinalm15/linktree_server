import path from "node:path";
import { Router } from "express";
import multer from "multer";

import { listArticles } from "./app/useCases/articles/listArticles";
import { createArticle } from "./app/useCases/articles/createArticle";
import { updateArticle } from "./app/useCases/articles/updateArticle";
import { deleteArticle } from "./app/useCases/articles/deleteArticle";
import { listArticlesById } from "./app/useCases/articles/listArticlesById";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List articles
router.get("/article", listArticles);

// Create article
router.post("/article", createArticle);

// Update article
router.patch("/article/:articleId", updateArticle);

// Delete article
router.delete("/article/:articleId", deleteArticle);

// List by Id
router.get("/article/:articleId", listArticlesById);

