// routes/dataRoutes.js
const express = require('express');
const router = express.Router();

// Define your route handlers here
router.get('/data', (req, res) => {
    res.json({ message: "Data from the server" });
});

module.exports = router;
