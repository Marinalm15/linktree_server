import { Request, Response } from "express";
import { Article } from "../../models/Article";

export async function updateArticle(req: Request, res: Response) {
  try {
    const { articleId } = req.params;
    const { name, url } = req.body;

    await Article.findByIdAndUpdate(articleId, { name, url });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

