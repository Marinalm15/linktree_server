import { Request, Response } from "express";

import { Article } from "../../models/Article";

export async function createArticle(req: Request, res: Response) {
  try {
    const { url, name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    } else if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const article = await Article.create({ url, name });
    res.status(201).json(article);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

