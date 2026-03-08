import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiMail, FiPhone, FiX, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './FloatingContact.module.css'

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false)

    const contactInfo = {
        email: "siamahamedab@gmail.com",
        whatsapp: "01304984437",
        whatsappLink: "https://wa.me/8801304984437"
    }

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop for mobile to close easily */}
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            className={styles.popup}
                            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                            <div className={styles.header}>
                                <div>
                                    <h3 className={styles.title}>Let's Connect</h3>
                                    <p className={styles.subtitle}>I usually respond within an hour</p>
                                </div>
                                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                                    <FiX size={18} />
                                </button>
                            </div>

                            <div className={styles.options}>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className={styles.option}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className={styles.iconBox} style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' }}>
                                        <FiMail size={20} />
                                    </div>
                                    <div className={styles.optionInfo}>
                                        <span className={styles.optionLabel}>Email Me</span>
                                        <span className={styles.optionValue}>{contactInfo.email}</span>
                                    </div>
                                    <FiArrowRight className={styles.arrow} />
                                </a>

                                <a
                                    href={contactInfo.whatsappLink}
                                    className={styles.option}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className={styles.iconBox} style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                                        <FaWhatsapp size={22} />
                                    </div>
                                    <div className={styles.optionInfo}>
                                        <span className={styles.optionLabel}>WhatsApp</span>
                                        <span className={styles.optionValue}>{contactInfo.whatsapp}</span>
                                    </div>
                                    <FiArrowRight className={styles.arrow} />
                                </a>
                            </div>

                            <div className={styles.footer}>
                                <span className={styles.available}>● Available for projects</span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <motion.button
                className={`${styles.fab} ${isOpen ? styles.fabActive : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiX size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiMessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <span className={styles.fabGlow} />
            </motion.button>
        </div>
    )
}
