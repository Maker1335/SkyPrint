import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Раздача статических файлов из папки dist
app.use(express.static(path.resolve('dist')));

// API-эндпоинты
app.post('/api/send-email', (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).send('Заполните все поля формы.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Новая заявка',
    text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка отправки:', error);
      return res.status(500).send('Ошибка при отправке письма.');
    }
    console.log('Письмо отправлено:', info.response);
    res.status(200).send('Письмо успешно отправлено.');
  });
});

// Перенаправление всех запросов на index.html (для SPA)
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`${PORT}`);
});