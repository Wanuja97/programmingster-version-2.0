import React from 'react'
import Head from 'next/head'
import Styles from '../styles/contact.module.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function contact() {
  return (
    <div>
        <Head>
        <title>Contact</title>
        <meta name="description" content="Welcome to programmingster.Sharing the knowledge is the best thing to learn" />
        
      </Head>
      <main className='commonpagestyles'>
      <div className={Styles.contactcontainer}>
          <div className={Styles.heading}>
            <h1 className="gradientcolor">Get In Touch</h1>
            <p>Have any questions? I would love to hear from you..</p>
            <p className={Styles.emailandtel}>Email: wanuja18@gmail.com <br />Tel: +9477 557 6412</p>
          </div>
          <div className={Styles.content}>
          <Form>
      
        <Form.Group className="mb-3"  controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" required/>
        </Form.Group>

        <Form.Group className="mb-3"  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required/>
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Enter subject" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Message" required />
      </Form.Group>

      

      <Button className={Styles.submitbtn} type="submit">
        Send Message
      </Button>
    </Form>
          </div>
        </div>
      </main>
    </div>
  )
}
