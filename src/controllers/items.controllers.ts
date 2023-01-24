import { Request, Response } from "express";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    res.status(500).send("❌get item");
  }
};

const getItems = (req: Request, res: Response) => {
    try {
    } catch (e) {
      res.status(500).send("❌get items");
    }
};

const updateItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
      res.status(500).send("❌update item");
    }
};

const postItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
      res.status(500).send("❌post item");
    }
};

const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
      res.status(500).send("❌ delete item");
    }
};

export { getItems, getItem, updateItem, postItem, deleteItem };
