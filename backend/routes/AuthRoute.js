// const { Signup } = require("../Controllers/AuthController");
// const router = require("express").Router();
import express from "express";
import { Login, Signup } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();
router.post('/',userVerification)
router.post("/login", Login);
router.post("/signup", Signup);

export default router;