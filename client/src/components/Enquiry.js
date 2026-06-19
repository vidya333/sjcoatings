import React, { useState } from 'react';
import axios from 'axios';
// 1. Import sober, professional icons from Lucide React
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';
import './Enquiry.css';

const services = [
  'Anti-Corrosion Coatings',
  'Marine Coatings',
  'Fire Retardant Coatings',
  'Epoxy Floor Coatings',
  'Tank Lining',
  'Thermal Spray Coatings',
  'Other / Not Sure',
];

const initialForm = {
  fullName: '', email: '', phone: '', company: '',
  service: '', projectLocation: '', surfaceArea: '', message: '',
};

export default function Enquiry() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Valid 10-digit Indian mobile required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please describe your requirement (min 20 chars)';
    return e;
  };

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/enquiry`, form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="enquiry" id="enquiry">
      <div className="enquiry__inner">
        <div className="enquiry__left">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Request a <span>Free Quote</span></h2>
          <p className="enquiry__desc">
            Tell us about your project and our technical team will reach out within 24 hours
            with a detailed proposal and site visit schedule.
          </p>

          <div className="enquiry__contact-items">
            {[
              { icon: <Phone size={20} className="enquiry__icon-svg" />, label: 'Call Us', value: '+91 98765 43210' },
              { icon: <Mail size={20} className="enquiry__icon-svg" />, label: 'Email', value: 'info@sjcoatings.com' },
              { icon: <MapPin size={20} className="enquiry__icon-svg" />, label: 'Office', value: 'Pimpri-Chinchwad, Pune - 411 018, Maharashtra' },
              { icon: <Clock size={20} className="enquiry__icon-svg" />, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 6:30 PM' },
            ].map(c => (
              <div className="enquiry__contact-item" key={c.label}>
                {/* Replaced text emoji with React Component */}
                <span className="enquiry__contact-icon">{c.icon}</span>
                <div>
                  <span className="enquiry__contact-label">{c.label}</span>
                  <span className="enquiry__contact-value">{c.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="enquiry__guarantee glass-card">
            {/* Replaced shield emoji */}
            <span className="enquiry__guarantee-icon">
              <ShieldCheck size={28} className="enquiry__icon-svg" />
            </span>
            <div>
              <strong>Our Promise</strong>
              <p>Free site inspection · No-obligation quotation · Response within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="enquiry__right">
          <div className="enquiry__form-card glass-card">
            {status === 'success' ? (
              <div className="enquiry__success">
                {/* Replaced checkmark emoji */}
                <div className="enquiry__success-icon">
                  <CheckCircle2 size={48} className="enquiry__success-svg" />
                </div>
                <h3>Enquiry Submitted!</h3>
                <p>Thank you! Our technical team will contact you within 24 hours.</p>
                <button className="btn-outline" onClick={() => setStatus(null)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="enquiry__form-title">Project Enquiry Form</h3>

                <div className="enquiry__row">
                  <div className="enquiry__field">
                    <label>Full Name *</label>
                    <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Rajesh Kumar" />
                    {errors.fullName && <span className="enquiry__error">{errors.fullName}</span>}
                  </div>
                  <div className="enquiry__field">
                    <label>Mobile Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="98765 43210" maxLength={10} />
                    {errors.phone && <span className="enquiry__error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="enquiry__row">
                  <div className="enquiry__field">
                    <label>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
                    {errors.email && <span className="enquiry__error">{errors.email}</span>}
                  </div>
                  <div className="enquiry__field">
                    <label>Company / Organisation</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Name" />
                  </div>
                </div>

                <div className="enquiry__row">
                  <div className="enquiry__field">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className="enquiry__error">{errors.service}</span>}
                  </div>
                  <div className="enquiry__field">
                    <label>Project Location</label>
                    <input name="projectLocation" value={form.projectLocation} onChange={handleChange} placeholder="City, State" />
                  </div>
                </div>

                <div className="enquiry__field">
                  <label>Approximate Surface Area (sq. ft / sq. m)</label>
                  <input name="surfaceArea" value={form.surfaceArea} onChange={handleChange} placeholder="e.g. 5000 sq. ft" />
                </div>

                <div className="enquiry__field">
                  <label>Project Details / Requirements *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the substrate, existing condition, environment, timeline, or any special requirements..."
                  />
                  {errors.message && <span className="enquiry__error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="enquiry__server-error">
                    {/* Replaced warning emoji */}
                    <AlertTriangle size={18} className="enquiry__error-svg" />
                    <span>Could not submit. Please call us directly at +91 98765 43210.</span>
                  </div>
                )}

                <button type="submit" className="btn-primary enquiry__submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Enquiry →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
