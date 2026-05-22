'use client';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { basePath } from '@/lib/utils';
import styles from './ProjectGallery.module.css';

const BASE_PATH = basePath;

export default function ProjectGallery({ images = [], accentColor = '#2E6FBF' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Need mounted state so createPortal works on client only
  useEffect(() => { setMounted(true); }, []);

  // Resolve paths with basePath
  const resolved = images.map(src =>
    src.startsWith('http') ? src : `${BASE_PATH}${src}`
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setLightboxIndex(null);
      setIsClosing(false);
      document.body.style.overflow = '';
    }, 220);
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex(i => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, prev, next]);

  if (!images || images.length === 0) return null;

  const lightboxMarkup = lightboxIndex !== null && (
    <div
      className={`${styles.lightbox} ${isClosing ? styles.lightbox__closing : ''}`}
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Project image lightbox"
    >
      {/* Close */}
      <button className={styles.lb__close} onClick={closeLightbox} aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Prev */}
      <button
        className={`${styles.lb__nav} ${styles.lb__prev}`}
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      {/* Image */}
      <div className={styles.lb__img_wrap} onClick={(e) => e.stopPropagation()}>
        <Image
          src={resolved[lightboxIndex]}
          alt={`Project reference ${lightboxIndex + 1}`}
          fill
          sizes="100vw"
          className={styles.lb__img}
          priority
        />
      </div>

      {/* Next */}
      <button
        className={`${styles.lb__nav} ${styles.lb__next}`}
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Counter */}
      <div className={styles.lb__counter}>
        <span style={{ color: accentColor }}>{lightboxIndex + 1}</span>
        <span className={styles.lb__counter_sep}>/</span>
        {images.length}
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span className={styles.label}>Our Work</span>
        <h2 className={styles.title}>
          Project <span style={{ color: accentColor }}>References</span>
        </h2>
        <div className={styles.titleBar} style={{ background: accentColor }} />
      </div>

      <div className={styles.grid}>
        {resolved.map((src, i) => (
          <button
            key={src + i}
            className={styles.tile}
            onClick={() => openLightbox(i)}
            aria-label={`View project image ${i + 1}`}
            style={{ '--accent': accentColor }}
          >
            <div className={styles.tile__inner}>
              <Image
                src={src}
                alt={`Project reference ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className={styles.tile__img}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              <div className={styles.tile__overlay}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Portal renders lightbox directly on <body> — escapes all stacking contexts */}
      {mounted && createPortal(lightboxMarkup, document.body)}
    </section>
  );
}
