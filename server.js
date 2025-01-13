// import express from 'express';
// import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Проверка всех полей
// app.post('/api/send-email', async (req, res) => {
//     const { name, phone, email } = req.body;

//     if (!name || !phone || !email) {
//         return res.status(400).json({ error: 'Заполните все поля формы.' });
//     }

//     try {
//         // Конфигурация SMTP-транспорта
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER, // Ваша почта
//                 pass: process.env.EMAIL_PASS, // Пароль или App Password
//             },
//         });

//         // Настройка письма
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER, // Можно указать email получателя
//             subject: 'Новая заявка',
//             text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`,
//         };

//         // Отправка письма
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email отправлен: ', info.response);

//         res.status(200).json({ message: 'Письмо успешно отправлено.' });
//     } catch (error) {
//         console.error('Ошибка отправки:', error);
//         res.status(500).json({ error: 'Ошибка при отправке письма.' });
//     }
// });

// // Запуск сервера
// app.listen(PORT, () => {
//     console.log(`Сервер запущен на порту ${PORT}`);
// });


import nodemailer from 'nodemailer';

// Создание транспортера для подключения к Mailtrap
// const transport = nodemailer.createTransport({
//   host: 'sandbox.smtp.mailtrap.io', // SMTP сервер Mailtrap
//   port: 25 , // Порт Mailtrap
//   auth: {
//     user: '503a3a7e4301df', // Ваш username, предоставленный Mailtrap
//     pass: '2b372aa6d573fa' // Ваш пароль, предоставленный Mailtrap
//   }
// });

// // Настройка письма
// const mailOptions = {
//   from: 'konstmakar133@gmail.com', // От кого (можно использовать вашу почту)
//   to: 'konstmakar133@gmail.com', // Кому отправить
//   subject: 'Тема письма', // Тема письма
//   text: 'Это тело письма.', // Тело письма
//   html: '<h1>Это HTML тело письма</h1>' // Если нужно отправить HTML
// };

// // Отправка письма
// transport.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log('Ошибка отправки письма: ', error);
//   }
//   console.log('Письмо отправлено: ', info.response);
// });


<script src="https://smtpjs.com/v3/smtp.js">
</script>
import nodemailer from 'nodemailer';  

Email.send({
  SecureToken: "94ab65e1-56d7-4cc1-82c5-f8afc60ff9fd", // Уникальный токен SMTP.js
  To: "konstmakar133@gmail.com", // Кому отправить
  From: "konstmakar133@gmail.com", // От кого отправить
  Subject: `Новый запрос от ${name}`,
  Body: `
<strong>Имя:</strong> ${name}<br/>
<strong>Телефон:</strong> ${phone}<br/>
<strong>Email:</strong> ${email}<br/>
`,
});