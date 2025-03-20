'use client'
import { motion } from "motion/react"
import styles from '@/app/styles.module.css'

const Oferta = () => {
    return (
        <div className={styles.ofertaContainer}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                id='oferta' className={styles.title}>Oferta</motion.h2>
            <ul className={styles.ofertaList}>
                <li className={styles.ofertaItem}>
                    <b>Kubki ze zdjęciami</b>: Prześlij nam swoje fotografie, a my zadbamy o najwyższą jakość nadruku.
                </li>
                <li className={styles.ofertaItem}>
                    <b>Kubki z napisami i sentencjami</b>: Masz ulubiony cytat lub chcesz wyrazić ważną myśl? Z przyjemnością zaprojektujemy dla Ciebie unikatowy projekt.
                </li>
                <li className={styles.ofertaItem}>
                    <b>Kubki okolicznościowe</b>: Ślub, urodziny, rocznice, święta… Każda okazja jest dobra, by podarować coś spersonalizowanego.
                </li>
                <li className={styles.ofertaItem}>
                    <b>Pełna personalizacja</b>: Masz inny pomysł? Śmiało, jesteśmy otwarci na wyzwania – zaprojektujemy Twój kubek marzeń!
                </li>
            </ul>
        </div>
    );
}

export default Oferta;