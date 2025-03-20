'use client'
import styles from '@/app/styles.module.css'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { motion } from "motion/react"

const Contact = () => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                id='kontakt'>Kontakt</motion.h2>
            <div className={styles.contactSection}>
                <Image className={styles.contactImg} src={'/images/IMG-20250320-WA0003.jpg'} width={500} height={500} alt='QbkoweLove - zamów kubek już teraz!' />
                <div>
                    <h3>Skontaktuj się z nami!</h3>
                    <p>Chcesz zamówić kubek? Masz pytania? Skontaktuj się z nami – z przyjemnością odpowiemy na wszystkie Twoje pytania!</p>
                    <p className={styles.contactElement}><FaPhoneAlt /> 123 456 789</p>
                    <Link href={'mailto:qbkowelove@gmail.com'} className={styles.contactElement}><IoIosMail />qbkowelove@gmail.com</Link>
                    <Link href={'https://www.facebook.com/qbkowelove/'} className={styles.contactElement}><FaFacebook />/qbkowelove</Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;