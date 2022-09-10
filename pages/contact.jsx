import React, { useRef,useState } from "react";
import Head from "next/head";
import Styles from "../styles/contact.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Welcome to programmingster.Sharing the knowledge is the best thing to learn"
        />
      </Head>
      <main className="commonpagestyles">
        <div className={Styles.contactcontainer}>
          <div className={Styles.heading}>
            <h1 className="gradientcolor">Get In Touch</h1>
            <p>Have any questions? I would love to hear from you..</p>
            <p className={Styles.emailandtel}>
              Email: wanuja18@gmail.com <br />
              Tel: +9477 557 6412
            </p>
          </div>
          <div className={Styles.content}>
            <Form ref={form} onSubmit={handleSubmit} method="POST">
              <Form.Group className="mb-3" controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Enter subject" required name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Message"
                  required
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <Button className={Styles.submitbtn}  type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}
