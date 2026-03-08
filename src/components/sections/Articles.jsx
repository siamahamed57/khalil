import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowUpRight, FiClock, FiCalendar } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'
import styles from './Articles.module.css'

const { articles } = portfolioData

export default function Articles() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="articles" className="section" ref={ref}>
            <div className="container">
                <div className="section-heading">
                    <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        Writing
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
                        Articles & Blog
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
                        I share what I learn — deep dives on web dev, algorithms, and engineering.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {articles.map((article, i) => (
                        <motion.a
                            key={article.id}
                            href={article.url}
                            className={`glass-card ${styles.card}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            style={{ borderTop: `3px solid ${article.color}` }}
                        >
                            {/* Tags */}
                            <div className={styles.tags}>
                                {article.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className={styles.title}>{article.title}</h3>
                            <p className={styles.excerpt}>{article.excerpt}</p>

                            {/* Footer */}
                            <div className={styles.footer}>
                                <div className={styles.meta}>
                                    <span className={styles.metaItem}><FiCalendar size={12} /> {article.date}</span>
                                    <span className={styles.metaItem}><FiClock size={12} /> {article.readTime}</span>
                                </div>
                                <div className={styles.readMore}>
                                    Read More <FiArrowUpRight size={14} />
                                </div>
                            </div>

                            {/* Glow on hover */}
                            <div className={styles.glow} style={{ background: article.color }} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
