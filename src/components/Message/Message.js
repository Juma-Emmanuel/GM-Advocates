import React from "react";
import "./Message.css";
function Message() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f43fbaa5-cc20-4848-9d64-3e5f97312773");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="message" className="message">
      <div className="header">
        <h1>Talk To Us</h1>
      </div>
      <div className="content">
        <div className="msgtext">
          <h>
            Have a legal question? Need expert advice? Get in touch with us
            today. Our experienced team is here to help you navigate through
            your legal matters with clarity and confidence.Get in touch!
          </h>
        </div>
        <div className="form">
          <form className="contactForm" onSubmit={onSubmit}>
            <input
              type="text"
              className="name"
              placeholder="Your name"
              name="name"
              autocomplete="off"
            ></input>
            <input
              type="email"
              className="email"
              placeholder="Your email"
              name="email"
              autocomplete="off"
            ></input>
            <textarea
              className="msg"
              name="message"
              placeholder="Your message"
              autocomplete="off"
            ></textarea>
            <button type="submit" className="submitBtn">
              Get In Touch
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
