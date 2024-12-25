const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Раздача статических файлов из папки dist
app.use(express.static(path.resolve(__dirname, 'dist')));

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
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`${PORT}`);
});

const PORT1 = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT1}`);
  console.log(`${PORT1}`);
});

const PORT2 = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT2}`);
  console.log(`${PORT2}`);
});
