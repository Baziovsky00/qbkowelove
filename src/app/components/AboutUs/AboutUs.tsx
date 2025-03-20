'use client'
import styles from '@/app/styles.module.css'
import { motion } from "motion/react"

const AboutUs = () => {
    return (
        <div className={styles.aboutUsPage}>
            <motion.h2
                id='onas'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} >O nas</motion.h2>
            <p className={styles.aboutUsPar}>Firma rodzinna, będąca tworem Taty dla córki.<br />
                Impulsem do powstania marki była Zuzia, która uwielbia różnego rodzaju gadżety. To nasza Królewna przyczyniła się do wyjścia z naszymi kubeczkami poza domową kuchenną szafkę i to ona jest naszym impulsem do działania.
                Wykonujemy kubki z własnym nadrukiem jak i nadrukiem od naszych klientów. Wszystkie kubeczki są unikatowe i niosą za sobą wiele radości. To wspaniały prezent dla bliskich, przyjaciół i wyjątkowych osób, którym chcecie powiedzieć, jak ważni są w Waszym życiu. Wszystkie prace wykonujemy z pasją przy asyście Królewny, która nadzoruje każdy etap pracy.
                Za każdym projektem kryją się wyjątkowe emocje Wasze i Nasze.</p>
        </div>
    );
}

export default AboutUs;