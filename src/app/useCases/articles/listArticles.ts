import { Request, Response } from "express";
import { Article } from "../../models/Article";

export async function listArticles(req: Request, res: Response) {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

