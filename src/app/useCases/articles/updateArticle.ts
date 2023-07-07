import { Request, Response } from "express";
import { Article } from "../../models/Article";
import { isValidObjectId } from "mongoose";

export async function updateArticle(req: Request, res: Response) {
  try {
    const { articleId } = req.params;
    const { name, url } = req.body;
    const imagePath = req.file?.filename;

    const isValidId = isValidObjectId(articleId);

    if (!isValidId) {
      return res.status(400).json({ error: "O Id informado não é válido!" });
    }

    await Article.findByIdAndUpdate(articleId, { name, url, imagePath });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

