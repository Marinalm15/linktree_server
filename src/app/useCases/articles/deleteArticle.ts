import { Request, Response } from "express";
import { Article } from "../../models/Article";
import { isValidObjectId } from "mongoose";

export async function deleteArticle(req: Request, res: Response) {
  try {
    const { articleId } = req.params;

    const isValidId = isValidObjectId(articleId);

    if (!isValidId) {
      return res.status(400).json({ error: "O Id informado não é válido!" });
    }

    await Article.findByIdAndDelete(articleId);

    const articles = await Article.find();

    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

