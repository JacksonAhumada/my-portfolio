import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";



const serviceId = "service_3dvzs5d";
const templateId = "template_1ab7waq";
const userId = "eIok2ul4E7xasCthH";

const Form = () => {
  const form = useRef();

  const clearForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        clearForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="user_subject"></input>
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
        />
        <button type="submit" value="Send" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
