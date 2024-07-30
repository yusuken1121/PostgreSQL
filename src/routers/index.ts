import { Router } from "express";
import { router as productsRouter } from "./products.router";
import { router as usersRouter } from "./users.router";

export const apiRouter = Router();

const ROUTER = [
  { url: "/products", router: productsRouter },
  { url: "/users", router: usersRouter },
];

ROUTER.forEach((r) => apiRouter.use(r.url, r.router));
