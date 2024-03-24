function ContactForm() {
  return (
    <form action="#" method="post" className="row">
      <div className="col-md-6">
        <input type="text" name="f-name" placeholder="First Name" />
      </div>
      <div className="col-md-6">
        <input type="text" name="l-name" placeholder="Last Name" />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" placeholder="Email Address" />
      </div>
      <div className="col-md-6">
        <input type="number" name="phone" placeholder="Phone Number" />
      </div>
      <div className="col-md-12">
        <input type="text" name="suject" placeholder="Subject" />
      </div>
      <div className="col-md-12">
        <textarea name="message" placeholder="How can we help?"></textarea>
      </div>
      <div className="col-md-6">
        <div className="condition-check">
          <input id="terms-conditions" type="checkbox" />
          <label htmlFor="terms-conditions">
            I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <input type="submit" name="submit" value="Send Message" />
      </div>
    </form>
  );
}

export default ContactForm;
