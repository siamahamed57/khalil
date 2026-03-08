import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiX, FiSearch, FiStar } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'
import styles from './Projects.module.css'

const { projects } = portfolioData
const CATEGORIES = ['All', 'Paid', 'Personal', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML']

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [search, setSearch] = useState('')
    const [selectedProject, setSelectedProject] = useState(null)
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    const filtered = projects.filter((p) => {
        const matchCat = activeFilter === 'All' || p.category === activeFilter
        const matchSearch =
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
        return matchCat && matchSearch
    })

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                <div className="section-heading">
                    <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        Portfolio
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
                        Projects I've Built
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
                        From side-projects to production — each one taught me something new.
                    </motion.p>
                </div>

                {/* Filters + Search */}
                <motion.div
                    className={styles.controls}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 }}
                >
                    <div className={styles.filters}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className={styles.searchBox}>
                        <FiSearch className={styles.searchIcon} />
                        <input
                            className={styles.searchInput}
                            placeholder="Search by name or tech…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className={styles.grid}
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                className={`glass-card ${styles.card} ${project.featured ? styles.featured : ''}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedProject({ ...project, side: i % 2 === 0 ? 'left' : 'right' })}
                            >
                                {/* Card top */}
                                <div className={styles.cardTop}>
                                    <div className={styles.cardMeta}>
                                        {project.featured && <span className={styles.featuredBadge}>⭐ Featured</span>}
                                        <span className={styles.category}>{project.category}</span>
                                    </div>
                                    <div className={styles.cardLinks} onClick={(e) => e.stopPropagation()}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                                            <FiGithub />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                                            <FiExternalLink />
                                        </a>
                                    </div>
                                </div>

                                {/* Title & desc */}
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.shortDesc}</p>

                                {/* Tags */}
                                <div className={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                {/* Tech stack */}
                                <div className={styles.techStack}>
                                    {project.tech.slice(0, 5).map((t) => (
                                        <span key={t} className={styles.techChip}>{t}</span>
                                    ))}
                                    {project.tech.length > 5 && <span className={styles.techChip}>+{project.tech.length - 5}</span>}
                                </div>

                                {/* Stars */}
                                <div className={styles.cardFooter}>
                                    <span className={styles.stars}><FiStar size={13} /> {project.stars}</span>
                                    <span className={styles.viewMore}>View Details →</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filtered.length === 0 && (
                        <div className={styles.empty}>
                            <span>🔍</span>
                            <p>No projects match your search.</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                        side={selectedProject.side}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}

function ProjectModal({ project, onClose, side }) {
    return (
        <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className={`glass-card ${styles.modal}`}
                initial={{
                    opacity: 0,
                    x: side === 'left' ? -150 : 150,
                    scale: 0.95
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                }}
                exit={{
                    opacity: 0,
                    x: side === 'left' ? -150 : 150,
                    scale: 0.95
                }}
                transition={{
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1] // Custom snappy cubic-bezier
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader} style={{ borderBottom: `2px solid ${project.color}` }}>
                    <div>
                        <span className={styles.category}>{project.category}</span>
                        <h2 className={styles.modalTitle}>{project.title}</h2>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}><FiX size={20} /></button>
                </div>

                <div className={styles.modalBody}>
                    <p className={styles.modalDesc}>{project.description}</p>

                    <div className={styles.modalSection}>
                        <h4 className={styles.modalSectionTitle}>Tech Stack</h4>
                        <div className={styles.techStack}>
                            {project.tech.map((t) => (
                                <span key={t} className={styles.techChip} style={{ padding: '5px 12px', fontSize: '0.85rem' }}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.modalSection}>
                        <h4 className={styles.modalSectionTitle}>Tags</h4>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                    </div>

                    <div className={styles.modalActions}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FiGithub /> GitHub
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <FiExternalLink /> Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
