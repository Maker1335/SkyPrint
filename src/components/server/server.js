const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Настройка транспортера для Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER, // Ваш Gmail
    pass: EMAIL_PASS, // Пароль приложения (не обычный пароль!)
  },
});

// Маршрут для обработки POST-запросов на отправку email
app.post('/api/send-email', (req, res) => {
  const { name, phone, email } = req.body;

  const mailOptions = {
    from: 'konstmakar133@gmail.com', // От кого письмо
    to: 'konstmakar133@gmail.com',  // Кому отправить
    subject: 'Новая заявка с формы',
    text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Ошибка при отправке письма');
    } else {
      console.log('Email отправлен: ' + info.response);
      res.status(200).send('Email успешно отправлен');
    }
  });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
