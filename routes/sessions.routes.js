import { Router } from "express";
import passport from "passport";
import UserDTO from "../dto/UserDTO.js";
import { register, login, forgotPassword, resetPassword } from "../controllers/sessions.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/current",
    passport.authenticate("current", { session: false }),
    (req, res) => {
        res.send(new UserDTO(req.user));
    }
);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;