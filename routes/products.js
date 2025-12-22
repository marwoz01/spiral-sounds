import express from "express";
import { getProducts, getGenres } from "../controllers/productsControllers.js";

export const productsRouter = express.Router();

productsRouter.get("/api/products/genres", getGenres);
productsRouter.get("/api/products", getProducts);
