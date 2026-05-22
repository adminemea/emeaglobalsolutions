'use client';

import { useState, useEffect } from 'react';

export default function ObfuscatedEmail({
  emailUser = 'info',
  emailDomain = 'emeaglobalsolutions.com',
  subject = '',
  className = '',
  asSpan = false,
  children
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const emailText = `${emailUser}@${emailDomain}`;
  const obfuscatedText = `${emailUser} [at] ${emailDomain.replace('.', ' [dot] ')}`;

  if (asSpan) {
    return <span className={className}>{isMounted ? emailText : obfuscatedText}</span>;
  }

  if (!isMounted) {
    return <span className={className}>{children || obfuscatedText}</span>;
  }

  const href = subject
    ? `mailto:${emailText}?subject=${encodeURIComponent(subject)}`
    : `mailto:${emailText}`;

  return (
    <a href={href} className={className}>
      {children || emailText}
    </a>
  );
}
