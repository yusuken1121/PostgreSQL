import { Request, Response, Router } from "express";
import { pool } from "../db";

interface User {
  id: number;
  email: string;
  password: string;
}

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await pool.query<User>(`
        SELECT * FROM users
      `);
    res.status(200).json(data.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await pool.query(
      `
      INSERT INTO users(email, password)
      VALUES ($1, $2)
      RETURNING *
      ;
      `,
      [email, password]
    );
    res.status(201).json(data.rows[0]);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server error");
  }
});
