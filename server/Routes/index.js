const express = require("express");
const { employee } = require("../controller/index.js");
const router = express.Router();
exports.Route = () => {
  router.get("/data", employee);
  return router;
};
