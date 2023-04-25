const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("api is run");
});

app.post("/sendmail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.whitetransport.net",
      port: 465,

      auth: {
        user: "info@whitetransport.net", // generated ethereal user
        pass: "B2hgrLr2GAna", // generated ethereal password
      },
    });

    const mailOptions = {
      from: "info@whitetransport.net",
      to: "fredrick3smith33@gmail.com",
      subject: "New message from your website!",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server in on "5000"`));
