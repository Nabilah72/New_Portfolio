import React from 'react';
import './contact.css';

const Contact = () => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   title: '',
  //   message: '',
  // });

  // const [validationErrors, setValidationErrors] = useState({});
  // const [successMessage, setSuccessMessage] = useState('');
  // const [warningMessage, setWarningMessage] = useState('');
  // const [isMessageSent, setIsMessageSent] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if ((name === 'name') && !/^[a-zA-Z\s]*$/.test(value)) {
  //     setValidationErrors({
  //       ...validationErrors,
  //       [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} must contain only alphabets.`,
  //     });

  //   } else {
  //     setValidationErrors({
  //       ...validationErrors,
  //       [name]: '',
  //     });
  //   }

  //   const uppercaseValue = name === 'title' ? value.toUpperCase() : value;
  //   setFormData({
  //     ...formData,
  //     [name]: uppercaseValue,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.values(validationErrors).every((error) => !error) &&
  //     Object.values(formData).every((value) => value.trim() !== '')) {

  //     setSuccessMessage('The form submitted successfully !');
  //     setWarningMessage('');

  //     setFormData({
  //       name: '',
  //       email: '',
  //       title: '',
  //       message: '',
  //     });
  //     setIsMessageSent(true);

  //     setTimeout(() => {
  //       setIsMessageSent(false);
  //     }, 5000);

  //   } else {
  //     setWarningMessage('Fix validation errors before submitting.');
  //     setSuccessMessage(''); 
  //   }
  // };

  // useEffect(() => {
  //   const clearMessages = setTimeout(() => {
  //     setSuccessMessage('');
  //     setWarningMessage('');
  //   }, 5000);

  //   return () => clearTimeout(clearMessages);
  // }, [successMessage, warningMessage]);

  return (
    <section id="contact">
      <h1>Get In Touch</h1>
      <p className='sub-para'>Feel free to get in touch! Drop me a message or send an email. I am always available.</p><br/>
        {/* <div className="contact3">
          <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                  id="name" placeholder=" NICKNAME" name="name" value={formData.name}
                  onChange={handleInputChange} required maxLength={50} />
                {validationErrors.name && <div className="invalid-feedback">{validationErrors.name}</div>}
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control input-field" id="email" placeholder=" EMAIL" name="email" value={formData.email}
                  onChange={handleInputChange} required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control input-field"
                  id="title" placeholder=" TITLE" name="title" value={formData.title}
                  onChange={handleInputChange} required maxLength={50} />
                {validationErrors.title && <div className="invalid-feedback">{validationErrors.title}</div>}
              </div>
            </div>

            <textarea className="form-control" rows="5" placeholder=" MESSAGE" name="message" value={formData.message}
              onChange={handleInputChange} style={{ maxHeight: "20em", minHeight: "10em" }} required></textarea>

            <button className="send-button" id="submit" type="submit" value="SEND" disabled={isMessageSent}>
              <span className="send-text">
                {isMessageSent ? 'Message Sent' : 'SEND '}
              </span>
            </button>
          </form>

          {warningMessage && (
            <div className="warning-message">
              {warningMessage}
            </div>
          )}

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}
        </div> */}

        <div className="contact4">
          <ul className="phone-list">
            <li className="list-item"><i className='bx bxs-map' ><span className="phone-text place">Selangor</span></i></li>
            <li className="list-item"><i className='bx bx-phone' ><span className="phone-text phone">+60 12-3456789</span></i></li>
            <li className="list-item"><i className='bx bxs-envelope' ><span className="phone-text gmail">nabilah123@gmail.com</span></i></li>
          </ul>
          <p className='small-text'><br/>For more information, do follow me on social media.</p>
          <ul className="social-media-list">
            <li>
              <a href="https://github.com/Nabilah72" target="_blank" rel="noopener noreferrer">
                <button className="phone-icon">
                  <i className="bx bxl-github" aria-hidden="true"></i>
                </button>
              </a>
              <a href='https://www.facebook.com/bella.a.fauzi?mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer">
                <button className="phone-icon">
                  <i className='bx bxl-facebook' aria-hidden="true"></i>
                </button>
              </a>
              <a href="https://instagram.com/nblhmdfz?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <button className="phone-icon">
                  <i className='bx bxl-instagram' aria-hidden="true"></i>
                </button>
              </a>
              <a href='https://x.com/starlight21s?t=TZf6nWPk8ixYtlkuWuY9Fg&s=09' target="_blank" rel="noopener noreferrer">
                <button className="phone-icon">
                  <i className='bx bxl-twitter' aria-hidden="true"></i>
                </button>
              </a>
            </li>
          </ul >
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div >
    </section >
  )
}

export default Contact