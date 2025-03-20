'use client'
import styles from '@/app/styles.module.css'
import { motion } from "motion/react"

const ExampleRealizations = () => {
    return (
        <div className={styles.aboutUsPage}>
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            id='przykladowerealizacje'>Jedne z naszych realizacji</motion.h2>
            <div className={styles.realizations}>
                <div>
                    <h3>Kubki dla Pana Sławomira</h3>
                    <p>Zaprojektowaliśmy dwa kubki z rodzinnymi zdjęciami i wybranymi sentencjami, tworząc wyjątkowe, spersonalizowane prezenty.</p>
                </div>
                <div>
                    <h3>Kubki druhnowo-świadkowe</h3>
                    <p>Stworzyliśmy unikalny motyw dla Druhny i Świadkowej – idealny jako podziękowanie lub zaproszenie do pełnienia tej roli. Pełna personalizacja i szczypta humoru to nasz przepis na sukces!</p>
                </div>
                <div>
                    <h3>Kubek Zięcia</h3>
                    <p>Otrzymaliśmy nietypowe zlecenie – „Kubek Zięcia” z wyjątkową treścią i luzacką grafiką. Efekt? Jedyny w swoim rodzaju prezent, który rozbawi każdego!</p>
                </div>
            </div>
        </div>
    );
}

export default ExampleRealizations;