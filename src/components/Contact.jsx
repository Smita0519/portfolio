import { useState } from 'react';
import styles from './Contact.module.css';
import { MdLocationOn, MdEmail, MdAccessTime, MdWork } from 'react-icons/md';

const infoItems = [
  { icon: <MdLocationOn size={18} />, label: "Location",       text: "Lalitpur, Nepal" },
  { icon: <MdEmail       size={18} />, label: "Email",          text: "smitamhz13@gmail.com" },
  { icon: <MdAccessTime  size={18} />, label: "Response Time",  text: "Within 24 hours" },
  { icon: <MdWork        size={18} />, label: "Available For",  text: "Freelance & Internships" },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted]  = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="container-xl">

        <h2 id="contact-title" className="section-title">Get In Touch</h2>
        <div className="section-rule"></div>
        <p className={styles.subtitle}>Have a project in mind or just want to say hi? My inbox is always open!</p>

        <div className="row g-5 align-items-start">

          {/* Info */}
          <div className="col-12 col-md-4">
            <address className={styles.info}>
              {infoItems.map(({ icon, label, text }) => (
                <div key={label} className={styles.infoItem}>
                  {icon}
                  <div>
                    <h4 className={styles.infoLabel}>{label}</h4>
                    <p className={styles.infoText}>{text}</p>
                  </div>
                </div>
              ))}
            </address>
          </div>

          {/* Form */}
          <div className="col-12 col-md-8">
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <h3>Thank you!</h3>
                  <p>Your message has been sent. I'll get back to you soon!</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  {[
                    { name: 'name',    type: 'text',  label: 'Name',    placeholder: 'Your name' },
                    { name: 'email',   type: 'email', label: 'Email',   placeholder: 'Your email' },
                  ].map(({ name, type, label, placeholder }) => (
                    <div key={name} className={styles.formGroup}>
                      <label className={styles.label} htmlFor={name}>{label}</label>
                      <input
                        id={name} type={type} name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={styles.input}
                        required
                      />
                    </div>
                  ))}
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className={styles.textarea}
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.btn}>Send Message</button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;