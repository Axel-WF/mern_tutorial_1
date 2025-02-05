import express from "express";
import { createProperty, deleteProperty, getProperty, updatedProperty } from "../controllers/property.controller.js";

const router = express.Router();

router.get("/", getProperty);

router.post("/", createProperty);

router.patch("/:id", updatedProperty);

router.delete("/:id", deleteProperty);

export default router;