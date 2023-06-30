import { Request, Response } from "express";
import { Article } from "../../models/Article";

export async function deleteArticle(req: Request, res: Response) {
  try {
    const { articleId } = req.params;

    await Article.findByIdAndDelete(articleId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

