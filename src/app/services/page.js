import Link from 'next/link';
import { ArrowRight, Compass, Factory, Cpu, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { divisions } from '@/data/services';
import styles from './services.module.css';

export const metadata = {
  title: 'Our Services',
  description: 'Explore the B2B engineering and manufacturing services offered by EMEA Global Services across four key divisions.',
  alternates: {
    canonical: '/services',
  },
};

const iconMap = { Compass, Factory, Cpu, TrendingUp };

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__bg} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal className="reveal">
            <div className="section-label">Our Services</div>
            <h1 className={styles.hero__title}>
              Comprehensive Engineering &{' '}
              <span className="gradient-text">Industrial Solutions</span>
            </h1>
            <p className={styles.hero__subtitle}>
              Four specialised divisions delivering end-to-end capabilities across mechanical engineering, manufacturing, digital transformation, and strategic consulting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {divisions.map((div, di) => {
        const Icon = iconMap[div.icon];
        return (
          <section key={div.id} className={`section ${di % 2 === 1 ? 'section--gray' : ''}`} id={div.id}>
            <div className="container">
              <ScrollReveal className="reveal">
                <div className={styles.division__header}>
                  <div className={styles.division__icon} style={{ background: div.colorHex }}>
                    {Icon && <Icon size={28} />}
                  </div>
                  <div>
                    <div className={styles.division__label} style={{ color: div.colorHex }}>Division {String(di + 1).padStart(2, '0')}</div>
                    <h2 className={styles.division__title}>{div.title}</h2>
                    <p className={styles.division__desc}>{div.intro}</p>
                  </div>
                </div>
              </ScrollReveal>
              <div className={styles.division__grid}>
                {div.services.map((svc, si) => (
                  <ScrollReveal key={svc.slug} className="reveal" delay={si * 80}>
                    <Link href={`/services/${div.id}/${svc.slug}`} className={styles.service__card} style={{ '--accent': div.colorHex, '--accent-light': div.lightBg }}>
                      <div className={styles.service__card_top} style={{ borderColor: div.colorHex }}>
                        <h3 className={styles.service__title}>{svc.title}</h3>
                        <p className={styles.service__tagline}>{svc.tagline}</p>
                      </div>
                      <div className={styles.service__card_bottom}>
                        <span className={styles.service__link} style={{ color: div.colorHex }}>
                          Learn More <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div className="container">
          <ScrollReveal className="reveal">
            <h2 className="section-title" style={{ color: 'black' }}>Need a Custom Solution?</h2>
            <p className="section-subtitle mx-auto" style={{ color: 'black', marginBottom: '2rem' }}>
              Let&apos;s discuss your specific engineering challenge and design a tailored approach.
            </p>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
