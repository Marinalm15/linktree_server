import { Request, Response } from "express";
import { Article } from "../../models/Article";
import { isValidObjectId } from "mongoose";

export async function listArticlesById(req: Request, res: Response) {
  try {
    const { articleId } = req.params;

    const isValidId = isValidObjectId(articleId);

    if (!isValidId) {
      return res.status(400).json({ error: "O Id informado não é válido!" });
    }

    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ error: "Artigo não encontrado!" });
    }

    res.status(202).json(article);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

