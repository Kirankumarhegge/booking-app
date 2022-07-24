import express  from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register )
router.use((req, res, next) => {
    console.log(`In router: ${req.method}:${req.originalUrl}`);
    next();
});
router.post("/login", login )


export default router;
