import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import rajat from '../../assets/rajat.png';
import calling from '../../assets/calling.png';
import message from '../../assets/message.png';
import location from '../../assets/location.png';
import HomeNavbar from "../../Common/HomeNavbar";
import Footer from '../../Common/Footer';
import './contact.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone must be 10 digits').required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

export default function More() {
  const handleEmailSend = (values, { setSubmitting, resetForm }) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert("Message sent successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert("Failed to send message. Error: " + error.text);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <HomeNavbar />
      <div className="header">
        <img src={rajat} alt="Contact Header" className="header-image" />
        <div className="header-overlay">
          <h1>Get in Touch With Us</h1>
        </div>
      </div>

      <div className="contact-info">
        <div className="vikas">
          <a href="tel:+911244330450">
            <img src={calling} alt="Phone" className="icon-img" />
          </a>
          <div className="info-box green">
            <p className="info-title">Phone Number</p>
            <a href="tel:+911244330450" className="info-title1">+91 124 4330450</a>
          </div>
        </div>
        <div className="vikas">
          <a href="https://www.google.com/maps/search/?api=1&query=Gurugram,+India" target="_blank" rel="noopener noreferrer">
            <img src={location} alt="Location" className="icon-img" />
          </a>
          <div className="info-box blue">
            <p className="info-title">Location</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Gurugram,+India" target="_blank" rel="noopener noreferrer" className="info-title1">
              3rd Floor, 288A, Udyog Vihar, Phase IV, Sector 18, Gurugram, HR – 122 015
            </a>
          </div>
        </div>
        <div className="vikas">
          <a href="mailto:contact@appliedenergytechnologies.com">
            <img src={message} alt="Email" className="icon-img" />
          </a>
          <div className="info-box green">
            <p className="info-title">Email</p>
            <a href="mailto:contact@appliedenergytechnologies.com" className="info-title1">
              contact@appliedenergytechnologies.com
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="contact-container">
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleEmailSend}
        >
          {({ isSubmitting }) => (
            <Form className="contact-form">
              <h2>SEND US A MESSAGE</h2>

              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />

              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />

              <Field type="text" name="phone" placeholder="Phone number" />
              <ErrorMessage name="phone" component="div" className="error" />

              <Field as="textarea" name="message" placeholder="Write something" />
              <ErrorMessage name="message" component="div" className="error" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'SEND'}
              </button>
            </Form>
          )}
        </Formik>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.399003709379!2d77.07667647515007!3d28.49764077573865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196a9cda1ad5%3A0x2e1b11a5c3fcb87!2s3rd%20Floor%2C%20288A%2C%20Phase%20IV%2C%20Udyog%20Vihar%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122015!5e0!3m2!1sen!2sin!4v1743559534206!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
