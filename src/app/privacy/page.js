import ScrollReveal from '@/components/ScrollReveal';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata = {
  title: 'Privacy Policy',
  description: 'EMEA Global Services privacy policy — how we collect, use, and protect your data.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as your name, email address, company name, phone number, and any messages you send through our contact forms. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, and pages visited.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to respond to your enquiries, provide engineering services, send relevant communications about our services, improve our website and user experience, and comply with legal obligations. We do not sell your personal information to third parties.' },
    { title: 'Data Security', content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our data handling practices comply with applicable data protection regulations including GDPR where relevant.' },
    { title: 'Cookies', content: 'Our website may use cookies and similar technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.' },
    { title: 'Third-Party Services', content: 'We may use third-party services for analytics, form processing, and communication tools. These services may collect information sent by your browser as part of their standard operations. Each third-party service has its own privacy policy governing the use of your information.' },
    { title: 'Your Rights', content: <>You have the right to access, correct, or delete your personal data that we hold. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at <ObfuscatedEmail />.</> },
    { title: 'Contact Us', content: <>If you have any questions about this Privacy Policy or our data practices, please contact us at <ObfuscatedEmail /> or call +91 99727 72682.</> },
  ];

  return (
    <>
      <section style={{ padding: '10rem 0 4rem', background: 'linear-gradient(165deg, #F0F4FA 0%, #FFFFFF 40%, #F0FAFB 100%)' }}>
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label">Legal</div>
            <h1 style={{ fontSize: 'var(--text-h2)', fontWeight: 900, marginBottom: '1rem' }}>Privacy Policy</h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: 600 }}>
              Last updated: May 2025. This privacy policy explains how EMEA Global Services collects, uses, and protects your information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {sections.map((section, i) => (
            <ScrollReveal key={i} className="reveal" delay={i * 50}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {i + 1}. {section.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {section.content}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
