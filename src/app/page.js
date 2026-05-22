'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Star, Zap, Compass, Factory, Cpu, TrendingUp, Settings, Target, BarChart3, Layers, Wrench, Globe, Shield, Clock, Rocket, Sparkles, Box, MessageSquare, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { prefixPath } from '@/lib/utils';
import styles from './page.module.css';
import { divisions } from '@/data/services';

const iconMap = { Compass, Factory, Cpu, TrendingUp };

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeProject, setActiveProject] = useState(1);

  const faqs = [
    { q: 'What industries does EMEA Global Services serve?', a: 'We serve clients across Oil & Gas,  Aerospace, Heavy Manufacturing, Pharmaceuticals, and Energy sectors — delivering engineering, manufacturing, and digital solutions tailored to each industry\'s regulatory and operational requirements.' },
    { q: 'Where are your engineering centres located?', a: 'Our headquarters is in Bengaluru, India, with delivery capability across the United States, EMEA (UK, Germany, France, Middle East), and Australia. We operate as embedded engineering teams or managed service providers.' },
    { q: 'What CAD and simulation platforms do you support?', a: 'We work across all major platforms including CATIA V5/V6, NX (Siemens), SolidWorks, Creo, AutoCAD, ANSYS, Abaqus, and Nastran. Our PLM expertise covers Teamcenter, Windchill, and Enovia.' },
    { q: 'How do you ensure quality and compliance?', a: 'Our processes are aligned with ISO 9001, ISO 27001 , and GDPR standards. Every deliverable goes through structured review gates, and our teams are trained in FMEA, GD&T, and industry-specific regulations.' },
    { q: 'Can you scale teams up quickly for large projects?', a: 'Yes. Our engineering bench in Bengaluru allows us to ramp teams from 2–50+ engineers within 4–6 weeks, with full onboarding, tooling access, and QA processes in place from day one.' },
  ];

  const testimonials = [
    { quote: 'EMEA Global\'s engineering team integrated seamlessly with our product development group. Their FEA expertise helped us reduce prototype iterations by 60%.', name: 'James R.', role: 'VP Engineering, Precision Industries' },
    { quote: 'The automation team delivered a turnkey SCADA solution for our refinery expansion. On time, on budget, and fully compliant with our safety standards.', name: 'Sarah M.', role: 'Project Director, PetroFlow Energy' },
    { quote: 'Their digital twin implementation gave us real-time visibility into our production line. We\'ve seen a 23% improvement in OEE since deployment.', name: 'David K.', role: 'Plant Manager, AutoTech Manufacturing' },
  ];

  const projects = [
    { id: 1, label: 'PROJECT 1', num: '01', title: 'Refinery Expansion — Process Engineering', desc: 'Delivered complete FEED study and P&ID design for a 40,000 bpd refinery expansion, including HAZOP facilitation and equipment specifications.', metrics: [{ value: '40%', label: 'Faster delivery' }, { value: '22%', label: 'Cost reduction' }] },
    { id: 2, label: 'PROJECT 2', num: '02', title: 'Automotive OEM — Digital Twin', desc: 'Implemented production-line digital twin with real-time performance monitoring and predictive maintenance for a tier-1  manufacturer.', metrics: [{ value: '23%', label: 'OEE improvement' }, { value: '35%', label: 'Downtime reduction' }] },
    { id: 3, label: 'PROJECT 3', num: '03', title: 'Aerospace — Product Engineering', desc: 'Full product engineering support for composite aero-structure components, including FEA validation and DO-160 compliance documentation.', metrics: [{ value: '60%', label: 'Fewer prototypes' }, { value: '18%', label: 'Weight reduction' }] },
  ];

  const activeProjectData = projects.find(p => p.id === activeProject);

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
      {/* ═══ HERO ═══ */}
      <section className={styles.hero} id="hero">
        <div className={styles.hero__bg}>
          <div className={styles.hero__drop} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles['hero__wave-ring']} />
          ))}
        </div>
        <div className={styles.hero__content}>
          <ScrollReveal className="reveal">
            <div className={styles.hero__label}>
              <Sparkles size={13} /> Engineering & Industrial Services
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal" delay={100}>
            <div className={styles['hero__logo-group']}>
              {/* <img src="/logo.png" alt="EMEA Global Logo" className={styles['hero__logo-image']} />  */}
              <h1 className={styles['hero__brand-name']}>EMEA Global</h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal" delay={200}>
            <p className={styles.hero__subtitle}>
              Professional engineering, automation, and industrial solutions — built for the world&apos;s most demanding industries
            </p>
          </ScrollReveal>
          <ScrollReveal className="reveal" delay={300}>
            <div className={styles.hero__buttons}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get Started <ArrowUpRight size={16} />
              </Link>
              <Link href="/services" className="btn btn--secondary btn--lg">
                See Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className={styles.quote}>
        <div className="container">
          <ScrollReveal className="reveal">
            <p className={styles.quote__text}>
              &ldquo;We harness <strong>your engineering challenges</strong>, understand your industry, and deliver <strong>precision-engineered solutions</strong> that drive real results.&rdquo;
            </p>
            <div className={styles.quote__authors}>
              <div className={styles.quote__author}>
                <div className={styles.quote__avatar}>A</div>
                <div>
                  <div className={styles['quote__author-name']}>Arjun</div>
                  <div className={styles['quote__author-role']}>Co-Founder, EMEA Global</div>
                </div>
              </div>
              <div className={styles.quote__author}>
                <div className={styles.quote__avatar}>S</div>
                <div>
                  <div className={styles['quote__author-name']}>Santosh</div>
                  <div className={styles['quote__author-role']}>Co-Founder, EMEA Global</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className={styles.benefits} id="benefits">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1rem' }}>
              <Star size={13} /> Benefits
            </div>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle mx-auto">Partner with an engineering firm delivering precision solutions.</p>
          </ScrollReveal>
          <div className={styles.benefits__grid}>
            {[
              { icon: <Settings size={18} />, title: 'Automated Workflows', desc: 'Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.' },
              { icon: <TrendingUp size={18} />, title: 'Insightful Analytics', desc: 'Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.' },
              { icon: <Globe size={18} />, title: 'Global Delivery', desc: 'Connect with engineering teams across time zones, track progress, and receive updates in real time from anywhere.' },
            ].map((item, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 100}>
                <div className={styles.benefits__card}>
                  <div className={styles['benefits__card-icon']}>
                    {item.icon}
                  </div>
                  <h3 className={styles['benefits__card-title']}>{item.title}</h3>
                  <p className={styles['benefits__card-desc']}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <section className={styles.marquee}>
        <div className={styles.marquee__track}>
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {[
                { label: 'Faster Innovation', icon: <Rocket size={14} /> },
                { label: 'Virtual Assistance', icon: <Box size={14} /> },
                { label: 'Scalable Solutions', icon: <Layers size={14} /> },
                { label: 'Precision Engineering', icon: <Target size={14} /> },
                { label: 'Cost Effective', icon: <Settings size={14} /> },
                { label: 'Real-Time Insights', icon: <BarChart3 size={14} /> },
                { label: 'Automation', icon: <Zap size={14} /> },
              ].map(item => (
                <span key={`${i}-${item.label}`} className={styles.marquee__item}>
                  {item.icon} {item.label}
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className={styles.features} id="features">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1.25rem' }}>
              <Award size={13} /> Recognitions
            </div>
            <h2 className="section-title">Trusted Clients & Recognitions</h2>
            <p className="section-subtitle mx-auto">Proudly partnering with global leaders and recognized for outstanding innovation.</p>
          </ScrollReveal>
          <div className={styles.features__grid}>
            {/* Row 1: Full-width Client Marquee */}
            <ScrollReveal className="reveal" style={{ gridColumn: '1 / -1' }}>
              <div className={`${styles.features__card} ${styles['features__card--client-marquee']}`}>
                <div className={styles['client-marquee']}>
                  <div className={styles['client-marquee__track']}>
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className={styles['client-marquee__group']}>
                        {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                          <Image
                            key={`${i}-${num}`}
                            src={prefixPath(`/images/clients/client_${num}.png`)}
                            alt={`Client ${num}`}
                            className={styles['client-marquee__logo']}
                            width={160}
                            height={60}
                          />
                        ))}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            {/* Row 2: Award Card */}
            <ScrollReveal className="reveal" delay={100} style={{ gridColumn: '1 / -1' }}>
              <div className={`${styles.features__card} ${styles['features__card--wide']}`}>
                <div className={styles['features__card-image']}>
                  <Image src={prefixPath('/images/award.jpg')} alt="Karnataka State Urban Mobility Grand Challenge Winner" fill style={{ objectFit: 'contain', background: '#fff' }} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className={styles['features__card-content']}>
                  <div className={styles['features__card-icon-badge']}>
                    <Award size={24} />
                  </div>
                  <h3 className={styles['features__card-title-lg']}>Award-Winning Innovation</h3>
                  <p className={styles['features__card-desc-lg']}>
                    Recognized as the <strong>Winner of the Karnataka State Urban Mobility Grand Challenge 2022</strong> by the Department of Electronics, IT, Bt and S&T, Government of Karnataka. This achievement reflects our commitment to pioneering advanced mobility and engineering solutions.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className={styles.services} id="services">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1.75rem' }}>
              <Settings size={13} /> Services
            </div>
            <h2 className="section-title">Our Engineering Services</h2>
            <p className="section-subtitle mx-auto">Leverage engineering expertise that boosts performance across your business.</p>
          </ScrollReveal>
          <div className={styles.services__grid}>
            {divisions.map((div, i) => {
              const Icon = iconMap[div.icon];
              return (
                <ScrollReveal key={div.id} className="reveal" delay={i * 80}>
                  <Link href={`/services/${div.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.services__card}>
                      <div className={styles['services__card-icon']}>
                        {Icon && <Icon size={20} />}
                      </div>
                      <h3 className={styles['services__card-title']}>{div.title}</h3>
                      <p className={styles['services__card-desc']}>{div.intro}</p>
                      <div className={styles['services__card-tags']}>
                        {div.services.slice(0, 3).map(svc => (
                          <span key={svc.slug} className={styles['services__card-tag']}>{svc.title}</span>
                        ))}
                        {div.services.length > 3 && (
                          <span className={styles['services__card-tag']}>+{div.services.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal className="reveal" delay={200}>
            <div className={styles.services__buttons}>
              <Link href="/contact" className="btn btn--primary">Get Started <ArrowUpRight size={14} /></Link>
              <Link href="/services" className="btn btn--secondary">See All Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className={styles.process} id="process">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1.75rem' }}>
              <Layers size={13} /> Process
            </div>
            <h2 className="section-title">Simple & Scalable</h2>
            <p className="section-subtitle mx-auto">A transparent process of collaboration and feedback</p>
          </ScrollReveal>
          <div className={styles.process__grid}>
            {[
              { num: '01', title: 'Discovery & Assessment', desc: 'We begin by understanding your engineering challenge, existing workflows, and strategic goals to identify where our expertise delivers the greatest impact.' },
              { num: '02', title: 'Design & Engineering', desc: 'Our specialist teams develop tailored solutions — from product designs and simulations to automation systems and digital platforms — with rigorous quality gates.' },
              { num: '03', title: 'Deploy & Support', desc: 'We deliver production-ready outputs with full documentation, support your deployment, and provide ongoing engineering support to optimise performance.' },
            ].map((item, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 100}>
                <div className={styles.process__card}>
                  <div className={styles.process__number}>{item.num}</div>
                  <h3 className={styles['process__card-title']}>{item.title}</h3>
                  <p className={styles['process__card-desc']}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.stats__grid}>
            {[
              { value: '170+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years of Experience' },
              { value: '40+', label: 'Engineers Strong' },
            ].map((stat, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 80}>
                <div className={styles.stats__item}>
                  <div className={styles.stats__value}>{stat.value}</div>
                  <div className={styles.stats__label}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className={styles.testimonials} id="testimonials">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1.75rem' }}>
              <Star size={13} /> Customers
            </div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">Join companies who trust EMEA Global to transform their engineering operations.</p>
          </ScrollReveal>
          <div className={styles.testimonials__grid}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 100}>
                <div className={styles.testimonials__card}>
                  <div className={styles.testimonials__stars}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className={styles.testimonials__quote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.testimonials__author}>
                    <div className={styles.testimonials__avatar}>{t.name.charAt(0)}</div>
                    <div>
                      <div className={styles.testimonials__name}>{t.name}</div>
                      <div className={styles.testimonials__role}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section className={styles.projects} id="projects">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1.75rem' }}>
              <Wrench size={13} /> Projects
            </div>
            <h2 className="section-title">Proven Impact & Results</h2>
            <p className="section-subtitle mx-auto">Explore projects that reflect our engineering expertise & real world impact</p>
          </ScrollReveal>
          <ScrollReveal className="reveal-scale" delay={100}>
            <div className={styles.projects__card}>
              <div className={styles.projects__tabs}>
                {projects.map(p => (
                  <button key={p.id} className={`${styles.projects__tab} ${activeProject === p.id ? styles.active : ''}`} onClick={() => setActiveProject(p.id)}>
                    {p.label}
                  </button>
                ))}
              </div>
              <div className={styles.projects__content}>
                <div className={styles.projects__image}>
                  <Image src={prefixPath('/images/factory.png')} alt="Project showcase" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className={styles.projects__info}>
                  <div className={styles.projects__number}>{activeProjectData.num}</div>
                  <h3 className={styles.projects__title}>{activeProjectData.title}</h3>
                  <p className={styles.projects__desc}>{activeProjectData.desc}</p>
                  <div className={styles.projects__metrics}>
                    {activeProjectData.metrics.map((m, i) => (
                      <div key={i} className={styles.projects__metric}>
                        <div className={styles['projects__metric-value']}>{m.value}</div>
                        <div className={styles['projects__metric-label']}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className={styles.faq} id="faq">
        <div className="container">
          <ScrollReveal className="reveal">
            <div className="section-label mx-auto" style={{ margin: '0 auto 1.75rem' }}>
              <Sparkles size={13} /> FAQ
            </div>
            <h2 className="section-title">Questions? Answers!</h2>
            <p className="section-subtitle mx-auto">Find quick answers about our engineering services.</p>
          </ScrollReveal>
          <div className={styles.faq__list}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} className="reveal" delay={i * 50}>
                <div className={`${styles.faq__item} ${openFaq === i ? styles.open : ''}`}>
                  <button className={styles.faq__question} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={16} />
                  </button>
                  <div className={styles.faq__answer}><p>{faq.a}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta}>
        <div className="container">
          <ScrollReveal className="reveal">
            <h2 className={styles.cta__title}>Ready to Transform Your Engineering?</h2>
            <p className={styles.cta__subtitle}>
              Let&apos;s discuss how EMEA Global can accelerate your product development, optimise operations, or drive digital transformation.
            </p>
            <div className={styles.cta__buttons}>
              <Link href="/contact" className={styles['cta__btn-light']}>
                Contact Us <ArrowUpRight size={14} />
              </Link>
              <Link href="/services" className={styles['cta__btn-outline']}>
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
