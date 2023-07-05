import path from "node:path";
import { Router } from "express";
import multer from "multer";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

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
router.post("/article", ClerkExpressRequireAuth({}), createArticle);

// Update article
router.patch("/article/:articleId", ClerkExpressRequireAuth({}), updateArticle);

// Delete article
router.delete(
  "/article/:articleId",
  ClerkExpressRequireAuth({}),
  deleteArticle
);

// List by Id
router.get(
  "/article/:articleId",
  ClerkExpressRequireAuth({}),
  listArticlesById
);

