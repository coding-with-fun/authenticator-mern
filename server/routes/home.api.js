// For default home.

const express = require("express");

require("colors");

const router = express.Router();

/**
 * @route         GET /
 * @description   Default home
 * @access        Public
 */
router.get("/", (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      success: [
        {
          msg: "API is running.",
        },
      ],
    });
  } catch (error) {
    console.log(`${error.message}`.red);
    return res.status(500).json({
      status: false,
      error: [
        {
          msg: "Internal server error!!",
        },
      ],
    });
  }
});

module.exports = router;
