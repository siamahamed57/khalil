import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
} from 'recharts'
import { portfolioData } from '../../data/portfolioData'
import { useTheme } from '../../context/ThemeContext'
import styles from './Skills.module.css'

const { skills } = portfolioData

const CATEGORIES = [
    { key: 'languages', label: 'Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'databases', label: 'Databases' },
    { key: 'devops', label: 'DevOps' },
]

const COLORS = ['#6366f1', '#a855f7', '#ec4899', '#38bdf8', '#10b981']

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('languages')
    const [ref, inView] = useInView({ threshold: 0.5 })
    const { isDark } = useTheme()

    const currentSkills = skills[activeCategory] || []

    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
    const textColor = isDark ? '#a0a0c0' : '#44446a'
    const radarFill = 'rgba(99, 102, 241, 0.15)'
    const radarStroke = '#6366f1'

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container">
                <div className="section-heading">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Technical Arsenal
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        Skills & Expertise
                    </motion.h2>
                </div>

                <div className={styles.layout}>
                    {/* Left: Radar Chart */}
                    <motion.div
                        className={`glass-card ${styles.radarCard}`}
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className={styles.chartTitle}>Skill Radar</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={skills.radarData} cx="50%" cy="50%" outerRadius="75%">
                                <PolarGrid stroke={gridColor} />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: textColor, fontSize: 12, fontWeight: 600 }}
                                />
                                <Radar
                                    name="Skills"
                                    dataKey="A"
                                    stroke={radarStroke}
                                    fill={radarFill}
                                    fillOpacity={1}
                                    strokeWidth={2}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Right: Skill Bars */}
                    <motion.div
                        className={styles.barsSection}
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        {/* Skill bars */}
                        <div className={styles.skillList}>
                            {currentSkills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    className={styles.skillItem}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.07 }}
                                >
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={styles.skillLevel}>{skill.level}%</span>
                                    </div>
                                    <div className={styles.progressBg}>
                                        <motion.div
                                            className={styles.progressFill}
                                            style={{ background: skill.color || 'var(--gradient-primary)' }}
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.07, ease: 'easeOut' }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>


            </div>

            {/* Bottom Category Panel */}
            <AnimatePresence>
                {inView && (
                    <motion.div
                        className={styles.bottomPanelWrapper}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50, transition: { duration: 0 } }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    >
                        <div className={styles.bottomCategoryPanel}>
                            <div className={styles.categoryPanelGlow} />
                            <div className={styles.categoryContainer}>
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.key}
                                        className={`${styles.categoryBtn} ${activeCategory === cat.key ? styles.categoryBtnActive : ''}`}
                                        onClick={() => setActiveCategory(cat.key)}
                                    >
                                        <span className={styles.categoryLabel}>{cat.label}</span>
                                        {activeCategory === cat.key && (
                                            <motion.div
                                                layoutId="activeCategoryBg"
                                                className={styles.categoryBtnBg}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}
