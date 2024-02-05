import React from "react";
import "./Contact.css";
import Underline from "../Underline/Underline";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact animate__animated animate__fadeIn">
      <div>
        <h2>Contact</h2>
        <Underline />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          className="form-control name"
          autoComplete="name"
        />
        <span className="name-span">Name</span>

        <input
          type="number"
          name="age"
          required
          className="form-control age"
          autoComplete="age"
        />
        <span className="age-span">Age</span>

        <input
          type="email"
          name="email"
          required
          className="form-control email"
          autoComplete="email"
        />
        <span className="email-span">Email</span>

        <input
          type="password"
          name="password"
          required
          className="form-control password"
          autoComplete="current-password"
        />
        <span className="password-span">Password</span>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
