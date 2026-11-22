import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import { profile } from '../data/portfolioData.js';

const emptyForm = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  email: '',
  message: '',
};

/**
 * Contact page: contact details panel plus an interactive form.
 * The form validates inline, saves the submission in localStorage (so it can
 * be inspected without a backend) and then redirects the visitor to Home.
 */
export default function Contact() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
    // Clear the error for this field as soon as the visitor starts fixing it.
    setErrors((previous) => ({ ...previous, [name]: '' }));
  };

  /** Basic client-side validation for the fields required by the brief. */
  const validateForm = () => {
    const nextErrors = {};

    if (!formValues.firstName.trim()) nextErrors.firstName = 'Please enter your first name.';
    if (!formValues.lastName.trim()) nextErrors.lastName = 'Please enter your last name.';

    const digitsOnly = formValues.contactNumber.replace(/[\s()+-]/g, '');
    if (!formValues.contactNumber.trim()) {
      nextErrors.contactNumber = 'Please enter a contact number.';
    } else if (!/^\d{7,15}$/.test(digitsOnly)) {
      nextErrors.contactNumber = 'Use 7–15 digits, e.g. +86 138 0000 0000.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formValues.email)) {
      nextErrors.email = 'That email address looks incomplete.';
    }

    if (!formValues.message.trim()) {
      nextErrors.message = 'Please add a short message.';
    } else if (formValues.message.trim().length < 10) {
      nextErrors.message = 'A little more detail helps — at least 10 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Store the submission locally. A real deployment would POST this to an API.
    // Reading the previous list is wrapped in try/catch: private browsing modes
    // and a corrupted value both throw instead of returning an array.
    let savedMessages = [];
    try {
      const storedMessages = JSON.parse(
        localStorage.getItem('portfolioMessages') || '[]'
      );
      if (Array.isArray(storedMessages)) savedMessages = storedMessages;
    } catch {
      savedMessages = [];
    }

    savedMessages.push({ ...formValues, submittedAt: new Date().toISOString() });

    try {
      localStorage.setItem('portfolioMessages', JSON.stringify(savedMessages));
    } catch {
      // Storage may be unavailable (quota or private mode); the redirect still runs.
    }

    setFormValues(emptyForm);

    // Hand control back to the Home page with a confirmation message.
    navigate('/', {
      state: { messageSent: true, visitorName: formValues.firstName.trim() },
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build"
        highlight="something."
        description="Whether it is an internship, a small website or a question about a project — the form below reaches me directly."
      />

      <section className="section contact-section">
        <div className="contact-grid">
          <aside className="contact-panel">
            <span className="eyebrow eyebrow-light">Contact details</span>
            <h2>Say hello.</h2>
            <p className="contact-intro">
              I usually reply within two working days. For urgent matters, call
              or message the number below.
            </p>

            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <em>Email</em>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <em>Phone</em>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                    {profile.phone}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <em>Location</em>
                  <span>{profile.location}</span>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="spark" size={20} />
                </span>
                <div>
                  <em>Availability</em>
                  <span>Internships &amp; freelance · 2027</span>
                </div>
              </li>
            </ul>

            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={18} />
                GitHub
              </a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <h2>Send a message</h2>
              <p>All fields are required.</p>
            </div>

            <div className="form-row two-columns">
              <div className="form-field">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Your first name"
                  value={formValues.firstName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                  <span className="field-error" id="firstName-error" role="alert">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Your last name"
                  value={formValues.lastName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                />
                {errors.lastName && (
                  <span className="field-error" id="lastName-error" role="alert">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row two-columns">
              <div className="form-field">
                <label htmlFor="contactNumber">Contact number</label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+86 138 0000 0000"
                  value={formValues.contactNumber}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.contactNumber)}
                  aria-describedby={
                    errors.contactNumber ? 'contactNumber-error' : undefined
                  }
                />
                {errors.contactNumber && (
                  <span className="field-error" id="contactNumber-error" role="alert">
                    {errors.contactNumber}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  value={formValues.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span className="field-error" id="email-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me what you’re working on, your timeline, and how I can help…"
                value={formValues.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span className="field-error" id="message-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="form-footer">
              <button className="btn btn-primary" type="submit">
                Send message
                <Icon name="arrow" size={18} />
              </button>
              <p className="form-note">
                Your message is stored locally, then you’ll be redirected to
                the Home page.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
