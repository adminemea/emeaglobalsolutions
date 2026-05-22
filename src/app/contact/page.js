'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ChevronDown, Send, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import styles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || 'https://script.google.com/macros/s/AKfycbz5IlCT9tpOWF7gEsObOP3IjO44C4rjCWIdAql6nYb0L8byncqa74j1Gp-zbEO9O_tRkQ/exec';

    const formData = new URLSearchParams();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      setStatus('sent');
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const faqs = [
    { q: 'What is the typical engagement timeline?', a: 'For staff augmentation, we can have engineers onboarded within 2–4 weeks. Managed projects typically begin within 3–6 weeks depending on scope complexity and resource requirements.' },
    { q: 'Do you provide on-site engineers?', a: 'Yes, we offer both on-site and remote delivery models. For on-site requirements, our engineers travel to your facility. Our Bengaluru centre handles the majority of design, simulation, and digital engineering work.' },
    { q: 'What are your engagement models?', a: 'We offer three primary models: Staff Augmentation (dedicated engineers embedded in your team), Managed Services (outcome-based delivery), and Project-Based (fixed-scope, fixed-timeline engagements).' },
    { q: 'How do you handle IP and confidentiality?', a: 'We execute NDAs and IP assignment agreements as standard practice. All data is handled through secure, audited channels. Our teams are trained in client IP protection protocols.' },
    { q: 'Can you scale teams quickly?', a: 'Yes. Our engineering bench in Bengaluru allows us to scale from 2 to 50+ engineers within 4–6 weeks with full onboarding, tooling access, and quality processes in place.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className={styles.hero}>
        <div className={styles.hero__bg} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal className="reveal">
            <div className="section-label">Contact</div>
            <h1 className={styles.hero__title}>Get in Touch</h1>
            <p className={styles.hero__subtitle}>Have a project in mind or need engineering support? We&apos;re here to help.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contact__grid}>
            {/* Contact Info Cards */}
            <div className={styles.contact__info}>
              <ScrollReveal className="reveal">
                <div className={styles.info__card}>
                  <div className={styles.info__icon}><Mail size={20} /></div>
                  <h3 className={styles.info__title}>Email Us</h3>
                  <p className={styles.info__desc}>Feel free to email us for any enquiries or project discussions.</p>
                  <ObfuscatedEmail className={styles.info__link} />
                </div>
              </ScrollReveal>

              <ScrollReveal className="reveal" delay={100}>
                <div className={styles.info__card}>
                  <div className={styles.info__icon}><Phone size={20} /></div>
                  <h3 className={styles.info__title}>Call Us</h3>
                  <p className={styles.info__desc}>Speak directly with our team for immediate assistance.</p>
                  <a href="tel:+919900827125" className={styles.info__link}>
                    +91 99727 72682
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal className="reveal" delay={200}>
                <div className={styles.info__card}>
                  <div className={styles.info__icon}><MapPin size={20} /></div>
                  <h3 className={styles.info__title}>Visit Us</h3>
                  <p className={styles.info__desc}>Our headquarters and engineering centre.</p>
                  <span className={styles.info__link} style={{ lineHeight: '1.4' }}>
                    #235, 13th Cross, 2nd Stage,<br />Indiranagar, Bangalore, India - 560038
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal className="reveal" delay={300}>
                <div className={styles.info__card}>
                  <div className={styles.info__icon}><Clock size={20} /></div>
                  <h3 className={styles.info__title}>Business Hours</h3>
                  <p className={styles.info__desc}>We operate across time zones to support global clients.</p>
                  <span className={styles.info__link}>Mon – Fri: 9:00 AM – 6:00 PM IST</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal className="reveal" delay={100}>
              <div className={styles.form__wrapper} id="contact-form">
                <h2 className={styles.form__title}>Send Us a Message</h2>
                <p className={styles.form__subtitle}>Fill out the form and our team will get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.form__row}>
                    <div className={styles.form__group}>
                      <label htmlFor="contact-name" className={styles.form__label}>Full Name</label>
                      <input id="contact-name" type="text" className={styles.form__input} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className={styles.form__group}>
                      <label htmlFor="contact-email" className={styles.form__label}>Email Address</label>
                      <input id="contact-email" type="email" className={styles.form__input} placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className={styles.form__row}>
                    <div className={styles.form__group}>
                      <label htmlFor="contact-company" className={styles.form__label}>Company</label>
                      <input id="contact-company" type="text" className={styles.form__input} placeholder="Your company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div className={styles.form__group}>
                      <label htmlFor="contact-subject" className={styles.form__label}>Subject</label>
                      <input id="contact-subject" type="text" className={styles.form__input} placeholder="Subject of interest" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                    </div>
                  </div>
                  <div className={styles.form__group}>
                    <label htmlFor="contact-message" className={styles.form__label}>Message</label>
                    <textarea id="contact-message" className={styles.form__textarea} placeholder="Tell us about your project or requirements..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <button type="submit" className={`btn btn--primary btn--lg ${styles.form__submit}`} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : status === 'error' ? 'Error. Try Again' : <>Send Message <Send size={16} /></>}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--gray">
        <div className="container">
          <ScrollReveal className="reveal text-center">
            <div className="section-label mx-auto">FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className={styles.faq__list}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 50}>
                <div className={`${styles.faq__item} ${openFaq === i ? styles.open : ''}`}>
                  <button className={styles.faq__question} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={18} />
                  </button>
                  <div className={styles.faq__answer}><p>{faq.a}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
