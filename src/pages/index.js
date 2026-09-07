import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const languages = [
  {
    code: 'EN',
    title: 'Learn to use vcards',
    description: 'Guides and reference documentation in English.',
    link: '/en',
    label: 'Open English Academy',
  },
  {
    code: 'ES',
    title: 'Aprende a usar vcards',
    description: 'Guías y documentación de referencia en español.',
    link: '/es',
    label: 'Abrir academia en español',
  },
];

export default function Home() {
  return (
    <Layout title="TicTAP Help Academy" description="Documentation for vcards by TicTAP">
      <main className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>VCARDS BY TICTAP</p>
          <Heading as="h1">TicTAP Help Academy</Heading>
          <p className={styles.subtitle}>
            Everything you need to create, manage, customize, and understand vcards.
          </p>
          <div className={styles.languageGrid}>
            {languages.map((language) => (
              <Link className={styles.languageCard} to={language.link} key={language.code}>
                <span className={styles.languageCode}>{language.code}</span>
                <Heading as="h2">{language.title}</Heading>
                <p>{language.description}</p>
                <span className={styles.cardAction}>{language.label} →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
