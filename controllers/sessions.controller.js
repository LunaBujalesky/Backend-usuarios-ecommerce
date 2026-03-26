import UserDAO from "../dao/UserDAO.js";
import UserRepository from "../repositories/UserRepository.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";
import { sendRecoveryMail } from "../utils/mailer.js";

const userRepository = new UserRepository(new UserDAO());

export const register = async (req, res) => {
    const user = req.body;
    user.password = createHash(user.password);
    const result = await userRepository.createUser(user);
    res.send(result);
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await userRepository.getUserByEmail(email);

    if (!user || !isValidPassword(user, password)) {
        return res.status(400).send("Error login");
    }

    const token = generateToken({
        id: user._id,
        email: user.email,
        role: user.role
    });

    res.send({ token });
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    await sendRecoveryMail(email, token);

    res.send("Mail enviado");
};

export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userRepository.getUserByEmail(decoded.email);

        if (isValidPassword(user, newPassword)) {
            return res.send("No podés usar la misma contraseña");
        }

        const hashed = createHash(newPassword);

        await userRepository.updatePassword(user._id, hashed);

        res.send("Contraseña actualizada");
    } catch {
        res.status(400).send("Token inválido");
    }
};