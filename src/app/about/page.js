import Link from 'next/link';
import { ArrowRight, Globe, Shield, Target, Users, Award, Heart, Zap, MapPin, Calendar, Briefcase } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us',
  description: 'Learn about EMEA Global Services, our mission, vision, core values, and the leadership team driving our engineering excellence.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const team = [
    { name: 'Arjun', role: 'Co-Founder & CTO', desc: 'Drives technical excellence across all four divisions. Expert in digital transformation, Industry 4.0 implementation, and advanced simulation technologies.', color: '#5CC8D7' },
    { name: 'Santosh', role: 'Co-Founder & CEO', desc: 'Leads EMEA Global\'s strategic vision and client engagement across global markets. Over 15 years of experience in engineering services and industrial consulting.', color: '#3b60cdff' },
    { name: 'Madan', role: 'Manufacturing Services', desc: 'Manages tooling, fixture, and production engineering teams. Background in lean manufacturing and assembly automation for OEMs.', color: '#0F9B7D' },
    { name: 'Hemantha Kumar', role: 'Head AI & Software Technologies', desc: 'He leads our AI and software services division, driving innovation in digital transformation and Industry 4.0 solutions.', color: '#d9c25eff' },

  ];

  const values = [
    { icon: <Target size={24} />, title: 'Precision', desc: 'Every deliverable meets the exacting standards of the industries we serve — from GD&T compliance to regulatory certification.' },
    { icon: <Zap size={24} />, title: 'Innovation', desc: 'We invest continuously in Industry 4.0 capabilities — digital twins, AI, and automation — to keep our clients ahead of the curve.' },
    { icon: <Users size={24} />, title: 'Partnership', desc: 'We embed within your teams, adopt your processes, and measure our success by your outcomes — not just hours delivered.' },
    { icon: <Shield size={24} />, title: 'Safety & Quality', desc: 'Safety-critical engineering is in our DNA. Our processes are built around FMEA, HAZOP, and structured design review gates.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.hero__bg} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal className="reveal">
            <div className="section-label">About Us</div>
            <h1 className={styles.hero__title}>
              Engineering the Future of{' '}
              <span className="gradient-text">Industrial Excellence</span>
            </h1>
            <p className={styles.hero__subtitle}>
              EMEA Global Services is a professional engineering and industrial services firm headquartered in Bengaluru, India. We deliver precision-engineered solutions across mechanical design, manufacturing, automation, and digital transformation for the world&apos;s most demanding industries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className={styles.mission__grid}>
            <ScrollReveal className="reveal">
              <div className={styles.mission__card}>
                <div className={styles.mission__icon} style={{ background: 'var(--div-engineering-light)', color: 'var(--div-engineering)' }}>
                  <Briefcase size={24} />
                </div>
                <h3 className={styles.mission__title}>Our Mission</h3>
                <p className={styles.mission__desc}>To accelerate industrial innovation by delivering world-class engineering, manufacturing, and digital solutions that help our clients design better products, build more efficient factories, and embrace the digital future with confidence.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal" delay={100}>
              <div className={styles.mission__card}>
                <div className={styles.mission__icon} style={{ background: 'var(--div-digital-light)', color: 'var(--div-digital)' }}>
                  <Globe size={24} />
                </div>
                <h3 className={styles.mission__title}>Our Vision</h3>
                <p className={styles.mission__desc}>To be the most trusted engineering partner for industrial companies globally — known for technical depth, delivery excellence, and the ability to operate at the intersection of mechanical engineering, manufacturing, and digital technology.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--gray">
        <div className="container">
          <ScrollReveal className="reveal text-center">
            <div className="section-label mx-auto">Our Values</div>
            <h2 className="section-title">What Drives Us</h2>
          </ScrollReveal>
          <div className={styles.values__grid}>
            {values.map((v, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 100}>
                <div className={styles.values__card}>
                  <div className={styles.values__icon}>{v.icon}</div>
                  <h3 className={styles.values__title}>{v.title}</h3>
                  <p className={styles.values__desc}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline 
      <section className="section">
        <div className="container">
          <ScrollReveal className="reveal text-center">
            <div className="section-label mx-auto">Our Journey</div>
            <h2 className="section-title">Growing with Purpose</h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {[
              { year: '2020', title: 'Founded in Bengaluru', desc: 'EMEA Global Services established with a mission to deliver world-class engineering from India to global markets.' },
              { year: '2021', title: 'First Major Client', desc: 'Secured first enterprise engagement — delivering CAD and FEA services for a multinational OEM.' },
              { year: '2022', title: 'Digital Division Launched', desc: 'Expanded into Industry 4.0 with digital twin, PLC/SCADA, and industrial AI capabilities.' },
              { year: '2023', title: 'Global Delivery', desc: 'Grew to 30+ engineers with delivery across US, EMEA, and Australian markets.' },
              { year: '2024', title: '100+ Projects Milestone', desc: 'Crossed 100 completed projects and launched Consulting & Transformation division.' },
              { year: '2025', title: '170+ Projects & Growing', desc: 'Team of 40+ engineers serving clients across oil & gas,  aerospace, and heavy manufacturing.' },
            ].map((item, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 80}>
                <div className={styles.timeline__item}>
                  <div className={styles.timeline__year}>{item.year}</div>
                  <div className={styles.timeline__content}>
                    <h4 className={styles.timeline__title}>{item.title}</h4>
                    <p className={styles.timeline__desc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Team 
      <section className="section section--gray">
        <div className="container">
          <ScrollReveal className="reveal text-center">
            <div className="section-label mx-auto">Leadership</div>
            <h2 className="section-title">Team Behind Success</h2>
            <p className="section-subtitle mx-auto">Meet the experts driving EMEA Global&apos;s engineering excellence.</p>
          </ScrollReveal>
          <div className={styles.team__grid}>
            {team.map((member, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 100}>
                <div className={styles.team__card}>
                  <div className={styles.team__avatar} style={{ background: member.color }}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className={styles.team__name}>{member.name}</h3>
                  <p className={styles.team__role}>{member.role}</p>
                  <p className={styles.team__desc}>{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div className="container">
          <ScrollReveal className="reveal">
            <h2 className="section-title" style={{ color: 'black', marginBottom: '1rem' }}>Ready to Work Together?</h2>
            <p className="section-subtitle mx-auto" style={{ color: 'black', marginBottom: '2rem' }}>
              Let&apos;s discuss how EMEA Global can support your engineering and industrial challenges.
            </p>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
