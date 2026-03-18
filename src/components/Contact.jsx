import { useState } from 'react';
import styles from './Contact.module.css';
import { MdLocationOn, MdEmail, MdAccessTime, MdWork } from 'react-icons/md';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.rule}></div>
        <p className={styles.subtitle}>
          Have a project in mind or just want to say hi? My inbox is always open!
        </p>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <MdLocationOn size={18} />
              <div>
                <h4 className={styles.infoLabel}>Location</h4>
                <p className={styles.infoText}>Lalitpur, Nepal</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MdEmail size={18} />
              <div>
                <h4 className={styles.infoLabel}>Email</h4>
                <p className={styles.infoText}>smitamhz13@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MdAccessTime size={18} />
              <div>
                <h4 className={styles.infoLabel}>Response Time</h4>
                <p className={styles.infoText}>Within 24 hours</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MdWork size={18} />
              <div>
                <h4 className={styles.infoLabel}>Available For</h4>
                <p className={styles.infoText}>Freelance & Internships</p>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.successMsg}>
                <h3>Thank you!</h3>
                <p>Your message has been sent. I'll get back to you soon!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className={styles.textarea}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className={styles.btn}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;