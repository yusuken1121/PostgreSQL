import { Request, Response, Router } from "express";
import { pool } from "../db";

export const router = Router();

interface cartItem {
  userId: number;
  productId: number;
  quantity: number;
}

//get the cartItems that the user chose
router.get("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const data = await pool.query<cartItem>(
      `
      SELECT * FROM cartItems WHERE userId = $1;
      `,
      [userId]
    );
    res.status(201).json(data.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server error");
  }
});
