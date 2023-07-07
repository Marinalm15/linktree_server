import { Request, Response } from "express";
import { Article } from "../../models/Article";
import { isValidObjectId } from "mongoose";
import fs from "fs";

export async function deleteArticle(req: Request, res: Response) {
  try {
    const { articleId } = req.params;

    const isValidId = isValidObjectId(articleId);

    if (!isValidId) {
      return res.status(400).json({ error: "O Id informado não é válido!" });
    }

    const article = await Article.findById(articleId);

    if (article) {
      const imagePath = article.imagePath;

      fs.unlink(`uploads/${imagePath}`, (err) => {
        if (err) {
          throw err;
        }
      });

      article.delete();
    }

    const articles = await Article.find();

    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

