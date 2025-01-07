import express from "express";
const router = express.Router();
import Brain from "../models/brain.mjs";
import entryController from "../controllers/brain.mjs";

//seed route

//take this out before deployment
router.get("/seed", entryController.seed);

//index route
//get brain dump
//note: if number of entries gets too LargestContentfulPaint//this may me updated to limit the number of returns

router.get("/", entryController.getEntries);

//toto: post new entry
//todo: get individual entry
//todo: get based on criteria
//todo: edit
//todo: delete

export default router;
