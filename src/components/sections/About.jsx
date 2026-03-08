import { portfolioData } from '../../data/portfolioData'
import styles from './About.module.css'

const { personal, timeline } = portfolioData

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">The Story So Far</h2>
                    <p className="section-subtitle">
                        From a curious learner to a professional engineer — here's my journey.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Left - Text & Stats */}
                    <div className={styles.left}>
                        <div className={`glass-card ${styles.bioCard}`}>
                            {/* Code-style avatar label */}
                            <div className={styles.codeLabel}>
                                <span className={styles.codeDot} style={{ background: '#ef4444' }} />
                                <span className={styles.codeDot} style={{ background: '#f59e0b' }} />
                                <span className={styles.codeDot} style={{ background: '#10b981' }} />
                                <span className={styles.codeFile}>about.md</span>
                            </div>

                            <p className={styles.bioText}>{personal.bio}</p>
                            <p className={styles.bioText} style={{ marginTop: 16 }}>{personal.bioExtended}</p>

                            <div className={styles.infoRows}>
                                <InfoRow label="Location" value={personal.location} />
                                <InfoRow label="Email" value={personal.email} />
                                <InfoRow label="Phone" value={personal.phone} />
                                <InfoRow label="Status" value="Open to work" />
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className={styles.statsGrid}>
                            {portfolioData.stats.general.map((stat) => (
                                <div key={stat.label} className={`glass-card ${styles.statCard}`}>
                                    <span className={styles.statValue}>
                                        {stat.value}{stat.suffix}
                                    </span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Timeline */}
                    <div className={styles.right}>
                        <h3 className={styles.timelineTitle}>My Timeline</h3>
                        <div className={styles.timeline}>
                            {timeline.map((item, i) => (
                                <div key={i} className={styles.timelineItem}>
                                    <div className={styles.timelineLeft}>
                                        <div className={styles.timelineIcon}></div>
                                        {i < timeline.length - 1 && <div className={styles.timelineLine} />}
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <span className={styles.timelineYear}>{item.year}</span>
                                        <h4 className={styles.timelineItemTitle}>{item.title}</h4>
                                        <p className={styles.timelineDesc}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function InfoRow({ label, value }) {
    return (
        <div className={styles.infoRow}>
            <span className={styles.infoLabel}>{label}:</span>
            <span className={styles.infoValue}>{value}</span>
        </div>
    )
}
