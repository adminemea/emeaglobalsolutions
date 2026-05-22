'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { prefixPath } from '@/lib/utils';
import styles from './Navbar.module.css';

const serviceDropdown = [
  { label: 'Engineering & Design', href: '/services/engineering', color: 'var(--div-engineering)' },
  { label: 'Manufacturing', href: '/services/manufacturing', color: 'var(--div-manufacturing)' },
  { label: 'Digital & Industry 4.0', href: '/services/digital-ai', color: 'var(--div-digital)' },
  { label: 'Consulting', href: '/services/consulting', color: 'var(--div-consulting)' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/');

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="main-nav">
        <div className={styles.navbar__inner}>
          {/* Logo */}
          <Link href="/" className={styles.navbar__logo}>
            <img src={prefixPath('/logo.png')} alt="EMEA Global Logo" className={styles['navbar__logo-image']} />
            <div className={styles['navbar__logo-text']}>
              <span>EMEA Global</span>
              <span>Engineering & Industrial Services</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className={styles.navbar__links}>
            <Link href="/" className={`${styles.navbar__link} ${pathname === '/' ? styles.active : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`${styles.navbar__link} ${isActive('/about') ? styles.active : ''}`}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className={styles['navbar__dropdown-wrapper']}>
              <Link href="/services" className={`${styles.navbar__link} ${styles['navbar__link--dropdown']} ${isActive('/services') ? styles.active : ''}`}>
                Services <ChevronDown />
              </Link>
              <div className={styles.navbar__dropdown}>
                {serviceDropdown.map((item) => (
                  <Link key={item.href} href={item.href} className={styles['navbar__dropdown-item']}>
                    <span className={styles['navbar__dropdown-dot']} style={{ background: item.color }} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/careers" className={`${styles.navbar__link} ${isActive('/careers') ? styles.active : ''}`}>
              Careers
            </Link>
            <Link href="/contact" className={`${styles.navbar__link} ${isActive('/contact') ? styles.active : ''}`}>
              Contact
            </Link>
          </div>

          <Link href="/contact" className={styles.navbar__cta}>
            Get Started
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`${styles['navbar__mobile-toggle']} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`${styles['navbar__mobile-overlay']} ${mobileOpen ? styles.open : ''}`}>
        <Link href="/" className={styles['navbar__mobile-link']}>Home</Link>
        <Link href="/about" className={styles['navbar__mobile-link']}>About</Link>
        <button
          className={styles['navbar__mobile-link']}
          onClick={() => setServicesOpen(!servicesOpen)}
          style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          Services
          <ChevronDown style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }} />
        </button>
        <div className={`${styles['navbar__mobile-sub']} ${servicesOpen ? styles.open : ''}`}>
          <Link href="/services" className={styles['navbar__mobile-sub-item']}>All Services</Link>
          {serviceDropdown.map((item) => (
            <Link key={item.href} href={item.href} className={styles['navbar__mobile-sub-item']}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/careers" className={styles['navbar__mobile-link']}>Careers</Link>
        <Link href="/contact" className={styles['navbar__mobile-link']}>Contact</Link>
        <Link href="/contact" className={styles['navbar__mobile-cta']}>Get Started</Link>
      </div>
    </>
  );
}
