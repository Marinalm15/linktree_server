import { Request, Response } from "express";
import { Article } from "../../models/Article";

export async function deleteArticle(req: Request, res: Response) {
  try {
    const { articleId } = req.params;

    await Article.findByIdAndDelete(articleId);

    const articles = await Article.find();

    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

