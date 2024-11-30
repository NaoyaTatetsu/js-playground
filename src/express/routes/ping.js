import express from "express";

const router = express.Router();

/**
 * ping
 */
router.get("/ping", (req, res) => {
  try {
    console.log("success GET request");
    return res.json({ message: "pong" });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
