const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").trim().notEmpty().withMessage("Message is required"),
    body("service").optional().isIn(["web-development","web-design","digital-marketing"])
      .withMessage("Invalid service"),
    body("phone").optional().isString(),
  ],
  async (req, res) => {
    console.log("📩 Received Contact Form:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok: false, errors: errors.array() });
    }

    const { name, email, phone, service = "web-development", message } = req.body;

    try {
      // 1) Save to DB
      const doc = await Contact.create({ name, email, phone, service, message });
      console.log("✅ Saved to Mongo:", doc._id.toString());

      // 2) Respond to client immediately (don’t block on email)
      res.json({ ok: true, message: "Message sent successfully!", id: doc._id });

      // 3) Prepare mailer
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Admin notification (goes to your inbox)
      const adminMail = {
        from: `"MicroTechie Contact" <${process.env.SMTP_USER}>`,
        to: process.env.ALERT_TO || process.env.SMTP_USER,
        subject: `New Inquiry from ${name}`,
        replyTo: email, // so you can reply directly to the user
        html: `
          <h2>New Contact Inquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Service:</b> ${service}</p>
          <p><b>Message:</b></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <small>Lead ID: ${doc._id}</small>
        `,
      };

      // User auto-reply (goes to the email they entered)
      const userMail = {
        from: `"MicroTechie" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We received your message ✅",
        html: `
          <div style="font-family: Arial, sans-serif; line-height:1.6">
            <h2>Hi ${name},</h2>
            <p>Thanks for reaching out to <b>MicroTechie</b>! We’ve received your message and our team will get back to you shortly.</p>
            <p><b>Your request summary:</b></p>
            <ul>
              <li><b>Service:</b> ${service}</li>
              <li><b>Phone:</b> ${phone || "N/A"}</li>
            </ul>
            <blockquote style="margin:12px 0;padding:12px;background:#f7f7f7;border-left:4px solid #00e0ff;">
              ${message.replace(/\n/g, "<br/>")}
            </blockquote>
            <p>Meanwhile, feel free to reply to this email if you want to add more details.</p>
            <p>— Team MicroTechie</p>
          </div>
        `,
      };

      // 4) Fire-and-forget both mails
      Promise.allSettled([
        transporter.sendMail(adminMail),
        transporter.sendMail(userMail),
      ]).then((results) => {
        results.forEach((r, i) =>
          console.log(i === 0 ? "📮 Admin mail:" : "📬 User mail:", r.status, r.reason?.message || "")
        );
      }).catch((e) => console.error("Mailer error:", e.message));

    } catch (err) {
      console.error("❌ Contact form DB error:", err);
      // Note: response already sent; we only log here
    }
  }
);

module.exports = router;
