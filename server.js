import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve("dist")));

app.post("/api/send-email", async (req, res) => {
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
        return res.status(400).send("Заполните все поля формы.");
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Новая заявка с сайта",
            text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Письмо отправлено:", info.response);
        res.status(200).send("Письмо успешно отправлено.");
    } catch (error) {
        console.error("Ошибка отправки:", error.message);
        res.status(500).send("Ошибка при отправке письма.");
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
