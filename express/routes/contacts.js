//import { Router } from "express";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("hi");
});

module.exports.router = router;
