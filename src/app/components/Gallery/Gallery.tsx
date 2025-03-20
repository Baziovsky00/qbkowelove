'use client'
import { useState } from 'react'
import styles from '@/app/styles.module.css'
import { motion } from "motion/react"

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = Array.from({ length: 29 }, (_, i) => `/images/galeria${i + 1}.jpg`);

    const getSpanClass = (index: number) => {
        // Make every 7th image span 2 columns and rows
        if ((index + 1) % 7 === 0) {
            return styles.large;
        }
        // Make every 5th image span 2 columns
        if ((index + 1) % 5 === 0) {
            return styles.wide;
        }
        // Make every 3rd image span 2 rows
        if ((index + 1) % 3 === 0) {
            return styles.tall;
        }
        return '';
    };

    return (
        <div className={styles.galleryContainer}>
            <motion.h2
                id='galeria'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}>Galeria</motion.h2>

            <div className={styles.imageGrid}>
                {images.map((src, index) => (
                    <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.02 * index }}
                        key={src}
                        className={`${styles.imageItem} ${getSpanClass(index)}`}
                        onClick={() => setSelectedImage(src)}
                    >
                        <img src={src} alt={`Gallery image ${index + 1}`} />
                    </motion.div>
                ))}
            </div>

            {selectedImage && (
                <div className={styles.modal} onClick={() => setSelectedImage(null)}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged view"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

export default Gallery;