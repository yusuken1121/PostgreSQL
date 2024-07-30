import { Request, Response, Router } from "express";
import { pool } from "../db";

interface Product {
  id: number; // SERIAL -> number
  title: string; // TEXT -> string
  price: number; // INT -> number
  description: string; // TEXT -> string
  category: string; // VARCHAR(50) -> string
}

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await pool.query<Product>("SELECT * FROM products");
    const products = data.rows;
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, price, description, category } = req.body;
    const data = await pool.query(
      `
        INSERT INTO products (title, price, description, category)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `,
      [title, price, description, category]
    );
    res.status(201).json(data.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Server error");
  }
});
