import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'
import styles from './Experience.module.css'

const { experience } = portfolioData

export default function Experience() {
    const containerRef = useRef(null)
    const [viewRef, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const pathHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])

    return (
        <section id="experience" className="section" ref={containerRef}>
            <div className="container" ref={viewRef}>
                <div className="section-heading">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        Pathway
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        My Professional Journey
                    </motion.h2>
                </div>

                <div className={styles.pathwayContainer}>
                    {/* The drawing path line */}
                    <div className={styles.mainPath}>
                        <motion.div
                            className={styles.pathFill}
                            style={{ height: pathHeight }}
                        />
                    </div>

                    {experience.map((exp, i) => (
                        <div key={exp.id} className={`${styles.milestone} ${i % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.milestoneMarker}>
                                <div className={styles.milestoneDot} style={{ background: exp.color, boxShadow: `0 0 15px ${exp.color}` }} />
                                <div className={styles.milestoneYear} style={{ color: exp.color }}>{exp.period.split(' – ').pop()}</div>
                            </div>

                            <motion.div
                                className={`glass-card ${styles.card}`}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
                                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div>
                                        <div className={styles.roleMeta}>
                                            <span className={styles.type} style={{ borderColor: exp.color, color: exp.color }}>
                                                {exp.type}
                                            </span>
                                            <span className={styles.period}>{exp.period}</span>
                                        </div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <p className={styles.company}>
                                            <span className={styles.companyName}>{exp.company}</span>
                                            <span className={styles.separator}>·</span>
                                            <span className={styles.location}>{exp.location}</span>
                                        </p>
                                    </div>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                <div className={styles.achievements}>
                                    {exp.achievements.map((a, j) => (
                                        <div key={j} className={styles.achievement}>
                                            <span className={styles.bullet} style={{ background: exp.color }} />
                                            {a}
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.techStack}>
                                    {exp.tech.map((t) => (
                                        <span key={t} className={styles.techChip}>{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
