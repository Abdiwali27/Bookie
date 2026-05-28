import { Router } from "express";
import {  createBook, deleteBook, getBook, getBookById, updateBook } from "../controllers/book.controller.js";

const router = Router();


// get route all books
router.get("/", getBook );

// get route single book
router.get("/:id",  getBookById );

// create route  book
router.post("/", createBook);

// update route books
router.put("/:id", updateBook);

// delete route books
router.delete("/:id", deleteBook);

export default router;