import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiStar, FiGitBranch, FiCode, FiActivity } from 'react-icons/fi'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { portfolioData } from '../../data/portfolioData'
import styles from './GitHubStats.module.css'

const { stats, personal } = portfolioData

const StatCard = ({ icon, label, value, color = 'var(--accent-1)', delay = 0, inView }) => (
    <motion.div
        className={`glass-card ${styles.statCard}`}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay, duration: 0.6 }}
        whileHover={{ y: -5 }}
        style={{ borderTop: `2px solid ${color}` }}
    >
        <div className={styles.statIcon} style={{ color }}>{icon}</div>
        <div className={styles.statValue} style={{ color }}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
    </motion.div>
)

export default function GitHubStats() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="github-stats" className="section" ref={ref}>
            <div className="container">
                <div className="section-heading">
                    <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        Track Record
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
                        Stats & Achievements
                    </motion.h2>
                </div>

                {/* GitHub stats */}
                <motion.div
                    className={styles.sectionBlock}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className={styles.blockTitle}><FiGithub size={18} /> GitHub</h3>
                    <div className={styles.statsGrid}>
                        <StatCard icon={<FiCode size={22} />} label="Public Repos" value={stats.github.repos} color="#6366f1" delay={0.25} inView={inView} />
                        <StatCard icon={<FiStar size={22} />} label="Total Stars" value={`${stats.github.stars}+`} color="#f59e0b" delay={0.3} inView={inView} />
                        <StatCard icon={<FiActivity size={22} />} label="Contributions" value={`${stats.github.contributions}+`} color="#10b981" delay={0.35} inView={inView} />
                        <StatCard icon={<FiGitBranch size={22} />} label="Pull Requests" value={stats.github.pullRequests} color="#a855f7" delay={0.4} inView={inView} />
                    </div>
                </motion.div>

                {/* Competitive Programming */}
                <motion.div
                    className={styles.sectionBlock}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className={styles.blockTitle}>🏆 Competitive Programming</h3>
                    <div className={styles.cpGrid}>
                        {/* LeetCode */}
                        <CPCard
                            icon={<SiLeetcode size={28} />}
                            platform="LeetCode"
                            color="#ffa116"
                            stats={[
                                { label: 'Problems Solved', value: stats.competitive.leetcode.solved },
                                { label: 'Rank', value: stats.competitive.leetcode.rank },
                                { label: 'Daily Streak', value: `${stats.competitive.leetcode.streak} days` },
                            ]}
                            href={personal.leetcode}
                            inView={inView}
                            delay={0.55}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function CPCard({ icon, platform, color, stats, href, inView, delay }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-card ${styles.cpCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.6 }}
            whileHover={{ y: -6 }}
            style={{ borderTop: `3px solid ${color}` }}
        >
            <div className={styles.cpHeader}>
                <div className={styles.cpIcon} style={{ color }}>{icon}</div>
                <span className={styles.cpPlatform}>{platform}</span>
            </div>
            <div className={styles.cpStats}>
                {stats.map((s) => (
                    <div key={s.label} className={styles.cpStat}>
                        <span className={styles.cpVal} style={{ color }}>{s.value}</span>
                        <span className={styles.cpLabel}>{s.label}</span>
                    </div>
                ))}
            </div>
        </motion.a>
    )
}
