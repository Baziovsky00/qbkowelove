import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { IoIosMail } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h4>QbkoweLove</h4>
            <p>Miłość od pierwszego użycia... Kubki na każdą okazje!</p>
            {/* <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div> */}
          </div>

          <div className={styles.footerColumn}>
            <h4>Linki</h4>
            <ul className={styles.footerList}>
              <li><Link href="/#onas">O nas</Link></li>
              <li><Link href="/#galeria">Przykładowe Realizacje</Link></li>
              <li><Link href="/#galeria">Galeria</Link></li>
              <li><Link href="/#galeria">Oferta</Link></li>
              <li><Link href="/#kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Kontakt</h4>
            <ul className={styles.footerContact}>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Artura Grottera 28/3<br />44-102 Gliwice</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+48 795 932 124</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} QbkoweLove. Wszystkie prawa zastrzeżone.</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1.4em'}}>
            <Link style={{fontSize: '1.4em'}} href={'mailto:qbkowelove@gmail.com'} className={styles.contactElement}><IoIosMail /></Link>
            <Link href={'https://www.facebook.com/qbkowelove/'} className={styles.contactElement}><FaFacebook /></Link>
          </div>
          {/* <div className={styles.footerLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;