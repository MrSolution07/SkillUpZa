
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yehrrri', 'template_dddpkfq', form.current, {
        publicKey: "rlCbap33nERIZrDI3"
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Message sent successfuly!')
          form.current.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert('Failed to send the nessage')
        },
      );
  };

    return (
        <form ref={form}  onSubmit={sendEmail} className="row"> 
            <div className="col-md-6">
              <input type="text" name="fName" placeholder="First Name"  />
            </div>
            <div className="col-md-6">
              <input type="text" name="lName" placeholder="Last Name" />
            </div>
            <div className="col-md-6">
              <input type="email" name="email" placeholder="Email Address"  />
            </div>
            <div className="col-md-6">
              <input type="number" name="phone" placeholder="Phone Number" />
            </div>
            <div className="col-md-12">
              <input type="text" name="subject" placeholder="Subject"  />
            </div>
            <div className="col-md-12">
              <textarea name="message" placeholder="How can we help?"  ></textarea>
            </div>
            <div className="col-md-6">
              <div className="condition-check">
                <input id="terms-conditions" type="checkbox" />
                <label htmlFor="terms-conditions">
                      I agree to the <a href="/privacypolicy">Terms & Conditions</a>
                </label>
              </div>
            </div>
            <div className="col-md-6 text-right">
                <input type="submit" value="Send Message" />
            </div>
        </form>
    );

}

export default ContactForm;

