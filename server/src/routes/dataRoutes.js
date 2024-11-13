import { Router } from 'express';
const router = Router();

// Define your route handlers here
router.get('/data', (req, res) => {
    res.json({ message: "Data from the server" });
});

export default router; // Export the router, not dataRoutes
