// For default home.

const express = require("express");
const userAuth = require("../middleware/auth");

require("colors");

const router = express.Router();

/**
 * @route         GET /verify
 * @description   Verify user
 * @access        Private
 */
router.get("/", userAuth, (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      success: [
        {
          msg: "User verified.",
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
