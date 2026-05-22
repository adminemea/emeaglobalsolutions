import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase, Building } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import styles from './careers.module.css';

export const metadata = {
  title: 'Careers - EMEA Global Services',
  description: 'Join EMEA Global Services. Explore our current job openings for engineering, manufacturing, and digital transformation professionals.',
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Mechanical Design Engineer',
      department: 'Engineering & Design',
      type: 'Full-Time',
      location: 'Bengaluru, India',
      wfo: true,
      desc: 'Lead the design and validation of complex mechanical components for automotive and aerospace clients using CATIA and SolidWorks.',
    },
    {
      id: 2,
      title: 'Manufacturing Process Engineer',
      department: 'Manufacturing',
      type: 'Full-Time',
      location: 'Bengaluru, India',
      wfo: true,
      desc: 'Develop robust process plans, PFMEA, and control plans to ensure seamless production launches for heavy machinery components.',
    },
    {
      id: 3,
      title: 'Industrial Automation Specialist',
      department: 'Digital & Industry 4.0',
      type: 'Full-Time',
      location: 'Bengaluru, India',
      wfo: true,
      desc: 'Design and implement PLC/SCADA systems and automated workflows to optimize factory floor operations.',
    },
    {
      id: 4,
      title: 'CFD Simulation Specialist',
      department: 'Engineering & Design',
      type: 'Full-Time',
      location: 'Bengaluru, India',
      wfo: true,
      desc: 'Perform advanced fluid dynamics simulations and thermal analysis to optimize product performance in the energy sector.',
    },
    {
      id: 5,
      title: 'Digital Twin Solutions Architect',
      department: 'Digital & Industry 4.0',
      type: 'Full-Time',
      location: 'Bengaluru, India',
      wfo: true,
      desc: 'Architect and deploy predictive maintenance and digital twin solutions for tier-1 manufacturing clients.',
    }
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal className="reveal">
            <div className="section-label">Join Our Team</div>
            <h1 className={styles.hero__title}>
              Engineer Your <span className="gradient-text">Future</span>
            </h1>
            <p className={styles.hero__subtitle}>
              At EMEA Global Services, we are looking for passionate engineers and digital innovators to build world-class solutions for the most demanding industries. Explore our open roles below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <ScrollReveal className="reveal">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle mx-auto">We are currently hiring for the following roles.</p>
          </ScrollReveal>

          <div className={styles.jobs__grid}>
            {jobs.map((job, i) => (
              <ScrollReveal key={job.id} className="reveal" delay={i * 80}>
                <div className={styles.job__card}>
                  <div className={styles.job__info}>
                    <h3 className={styles.job__title}>{job.title}</h3>
                    <div className={styles.job__meta}>
                      <span className={styles.job__tag}>
                        <Building size={14} /> {job.department}
                      </span>
                      <span className={styles.job__tag}>
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className={styles.job__tag}>
                        <Briefcase size={14} /> {job.type}
                      </span>
                      {job.wfo && (
                        <span className={`${styles.job__tag} ${styles['job__tag--wfo']}`}>
                          WFO (Work From Office)
                        </span>
                      )}
                    </div>
                    <p className={styles.job__desc}>{job.desc}</p>
                  </div>
                  <ObfuscatedEmail
                    subject={`Job Application: ${job.title}`}
                    className={`btn btn--secondary btn--sm ${styles.apply__btn}`}
                  >
                    <span className={styles['apply__btn-desktop']}>
                      <ObfuscatedEmail asSpan />
                    </span>
                    <span className={styles['apply__btn-mobile']}>Apply Now</span>
                    <ArrowRight size={16} />
                  </ObfuscatedEmail>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
