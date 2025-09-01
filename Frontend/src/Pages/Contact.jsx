import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiGrid } from "react-icons/fi";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", type: "" });

    try {
      const res = await fetch("https://microtechie-online-frontend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.ok) {
        setStatus({
          loading: false,
          msg: "Message sent successfully!",
          type: "success",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "web-development",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          msg: data.message || "Validation failed",
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, msg: "Network error", type: "error" });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtext">
          Whether you need a website, marketing, or design — we’re here to help.
        </p>

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="input-field">
              <FiUser className="icon" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder=" "
              />
              <label>Your Name</label>
            </div>

            <div className="input-field">
              <FiMail className="icon" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder=" "
              />
              <label>Email Address</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-field">
              <FiPhone className="icon" />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder=" "
              />
              <label>Phone (optional)</label>
            </div>

            <div className="input-field">
              <FiGrid className="icon" />
              <select name="service" value={form.service} onChange={onChange}>
                <option value="web-development">Web Development</option>
                <option value="web-design">Web Designing</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
              <label>Service</label>
            </div>
          </div>

          <div className="input-field textarea-field">
            <FiMessageSquare className="icon" />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows="5"
              required
              placeholder=" "
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="submit-btn" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>

          {status.msg && (
            <p className={`status-message ${status.type}`}>
              {status.type === "success" ? "✅" : "❌"} {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
