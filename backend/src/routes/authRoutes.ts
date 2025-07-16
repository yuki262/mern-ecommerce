import express from "express";
import { login, logout, signup } from "../controllers/authController";

const authRoutes = express.Router();

authRoutes.get("/signup", signup);

authRoutes.get("/login", login);

authRoutes.get("/logout", logout);

export { authRoutes };
