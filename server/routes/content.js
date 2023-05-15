import express from "express";
import { createContent, getContent } from "../controllers/content.js";

const router = express.Router();

//read

router.get("/:editor", getContent);

//post

router.post("/", createContent);

export default router;
