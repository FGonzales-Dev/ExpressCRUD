import express from "express";
import {
  postNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controller/CRUDcontroller.js";
export const router = express.Router();

router.post("/v1/note/new", postNote);
router.get("/v1/notes", getNotes);
router.put("/v1/note/:id", updateNote);
router.delete("/v1/note/:id", deleteNote);
