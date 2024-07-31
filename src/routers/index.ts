import { Router } from "express";
import { router as productsRouter } from "./products.router";
import { router as usersRouter } from "./users.router";
import { router as cartItemRouter } from "./cartItems.router";

export const apiRouter = Router();

const ROUTER = [
  { url: "/products", router: productsRouter },
  { url: "/users", router: usersRouter },
  { url: "/carts", router: cartItemRouter },
];

ROUTER.forEach((r) => apiRouter.use(r.url, r.router));
