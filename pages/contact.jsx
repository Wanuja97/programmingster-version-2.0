import React, { useRef,useState } from "react";
import Head from "next/head";
import Styles from "../styles/contact.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Maintainenace from "../components/Maintainenace";
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
          toast.success('Message Sent Successfully!!', {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        },
        (error) => {
          console.log(error.text);
          toast('Internal Server Error! Please Try Again', {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
       <meta name="title" content="Contact - Programmingster"/>
         {/* Open Graph / Facebook  */}
         <meta property="og:type" content="website" />
        <meta property="og:url" content="https://programmingster.com/contact/" />
        <meta property="og:title" content="Contact - Programmingster" />
        <meta
          property="og:description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        {/* Twitter  */}
        <meta property="twitter:url" content="https://programmingster.com/contact/" />
        <meta property="twitter:title" content="Contact - Programmingster" />
        <meta
          property="twitter:description"
          content="Welcome to Programmingster. Sharing knowledge is the best thing to learn."
        />
        <link rel="canonical" href="https://programmingster.com/contact/" />
      </Head>
      <main className="commonpagestyles">
        <Maintainenace/>
        <div className={Styles.contactcontainer}>
        <ToastContainer />
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
