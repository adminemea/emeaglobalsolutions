import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { prefixPath } from '@/lib/utils';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footer__grid}>
        {/* Brand Column */}
        <div className={styles.footer__brand}>
          <div className={styles.footer__logo}>
            <img src={prefixPath('/logo.png')} alt="EMEA Global Logo" className={styles['footer__logo-image']} />
            <div className={styles['footer__logo-text']}>
              <span>EMEA Global</span>
              <span>Engineering & Industrial Services</span>
            </div>
          </div>
          <p>
            Professional engineering and industrial services for mechanical, automation,
            and Oil & Gas sectors. Delivering precision-engineered solutions worldwide from Bengaluru, India.
          </p>
          <div className={styles['footer__contact-row']}>
            <Mail size={14} />
            <ObfuscatedEmail />
          </div>
          <div className={styles['footer__contact-row']}>
            <Phone size={14} />
            <a href="tel:+919900827125">+91 99727 72682</a>
          </div>
          <div className={styles['footer__contact-row']}>
            <MapPin size={14} style={{ flexShrink: 0, marginTop: '4px' }} />
            <span style={{ lineHeight: '1.4' }}>#235, 13th Cross, 2nd Stage, Indiranagar,<br />Bangalore, India - 560038</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className={styles.footer__heading}>Services</h4>
          <Link href="/services/engineering" className={styles.footer__link}>Engineering & Design</Link>
          <Link href="/services/manufacturing" className={styles.footer__link}>Manufacturing</Link>
          <Link href="/services/digital-ai" className={styles.footer__link}>Digital & Industry 4.0</Link>
          <Link href="/services/consulting" className={styles.footer__link}>Consulting</Link>
          <Link href="/services" className={styles.footer__link}>All Services</Link>
        </div>

        {/* Company */}
        <div>
          <h4 className={styles.footer__heading}>Company</h4>
          <Link href="/about" className={styles.footer__link}>About Us</Link>
          <Link href="/contact" className={styles.footer__link}>Contact</Link>
          <Link href="/privacy" className={styles.footer__link}>Privacy Policy</Link>
        </div>

        {/* Industries */}
        <div>
          <h4 className={styles.footer__heading}>Industries</h4>
          <span className={styles.footer__link}>Oil & Gas</span>
          <span className={styles.footer__link}>Energy</span>
          <span className={styles.footer__link}>Aerospace</span>
          <span className={styles.footer__link}>Manufacturing</span>
          <span className={styles.footer__link}>Pharmaceuticals</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footer__bottom}>
        <div className={styles['footer__bottom-inner']}>
          <span>© {new Date().getFullYear()} EMEA Global Services. All rights reserved.</span>
          <div className={styles['footer__bottom-links']}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
