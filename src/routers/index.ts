import { Router } from "express";
import { router as productsRouter } from "./products.router";

export const apiRouter = Router();

apiRouter.use("/products", productsRouter);
