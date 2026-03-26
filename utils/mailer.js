import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export const sendRecoveryMail = async (email, token) => {
    const link = `http://localhost:8080/reset-password?token=${token}`;

    await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: "Recuperar contraseña",
        html: `<a href="${link}">Restablecer contraseña</a>`
    });
};