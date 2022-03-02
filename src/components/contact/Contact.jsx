import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xsdtr1s",
        "template_gz2gmxq",
        formRef.current,
        "user_P3rnva7AM8SvuSBKmpjx3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && "Thank you..."}
        </form>
      </div>
    </div>
  );
}
