import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown, FiExternalLink, FiGithub, FiUser, FiMapPin } from 'react-icons/fi'
import styles from './Navbar.module.css'
import { portfolioData } from '../../data/portfolioData'

const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about', hasSidebar: true, sidebarType: 'about' },
    { label: 'Skills', to: 'skills', hasSidebar: true, sidebarType: 'skills' },
    { label: 'Projects', to: 'projects', hasSidebar: true, sidebarType: 'projects' },
    { label: 'Experience', to: 'experience', hasSidebar: true, sidebarType: 'experience' },
    { label: 'Code', to: 'snippets' },
    { label: 'Articles', to: 'articles' },
    { label: 'Stats', to: 'github-stats' },
    { label: 'Contact', to: 'contact' },
]

const projects = portfolioData.projects
const skillCategories = portfolioData.skills ? Object.entries(portfolioData.skills).filter(([key]) => key !== 'radarData') : []
const personal = portfolioData.personal
const experiences = portfolioData.experience || []

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('hero')
    const [hoveredItem, setHoveredItem] = useState(null)
    const [activeSidebar, setActiveSidebar] = useState(null)

    // refs to track if cursor is over trigger zone OR sidebar
    const isOverTrigger = useRef(false)
    const isOverSidebar = useRef(false)
    const closeTimer = useRef(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close sidebar on outside click
    useEffect(() => {
        if (!activeSidebar) return
        const handleClick = (e) => {
            // If click is not inside the sidebar, close it
            if (!e.target.closest(`.${styles.sidebar}`) &&
                !e.target.closest(`.${styles.projectsTrigger}`)) {
                setActiveSidebar(null)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [activeSidebar])

    const handleTriggerEnter = (type) => {
        clearTimeout(closeTimer.current)
        isOverTrigger.current = true
        setActiveSidebar(type)
    }

    const handleTriggerLeave = () => {
        isOverTrigger.current = false
        // Give cursor time to travel to sidebar
        closeTimer.current = setTimeout(() => {
            if (!isOverTrigger.current && !isOverSidebar.current) {
                setActiveSidebar(null)
            }
        }, 320)
    }

    const handleSidebarEnter = () => {
        clearTimeout(closeTimer.current)
        isOverSidebar.current = true
    }

    const handleSidebarLeave = () => {
        isOverSidebar.current = false
        closeTimer.current = setTimeout(() => {
            if (!isOverTrigger.current && !isOverSidebar.current) {
                setActiveSidebar(null)
            }
        }, 150)
    }

    const closeSidebar = () => {
        isOverTrigger.current = false
        isOverSidebar.current = false
        setActiveSidebar(null)
    }

    return (
        <>
            <motion.nav
                className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className={styles.container}>
                    {/* Logo */}
                    <Link to="hero" smooth duration={520} className={styles.logo}>
                        <motion.span
                            className={styles.logoBox}
                            whileHover={{ scale: 1.1, rotate: 4 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                        >
                            IK
                        </motion.span>
                        <span className={styles.logoText}>
                            Ibrahim<span className="gradient-text"> Khalil</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <ul
                        className={styles.navLinks}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {navItems.map((item) => (
                            <li
                                key={item.to}
                                className={`${styles.navItem} ${hoveredItem !== null && hoveredItem !== item.to ? styles.navItemDimmed : ''}`}
                                onMouseEnter={() => setHoveredItem(item.to)}
                            >
                                {item.hasSidebar ? (
                                    // This wrapper must NOT fire mouseleave when cursor enters the sidebar
                                    // We use separate refs so nav z-index is irrelevant
                                    <div
                                        className={styles.projectsTrigger}
                                        onMouseEnter={() => handleTriggerEnter(item.sidebarType)}
                                        onMouseLeave={handleTriggerLeave}
                                    >
                                        <Link
                                            to={item.to}
                                            smooth
                                            duration={520}
                                            spy
                                            onSetActive={() => setActive(item.to)}
                                            className={`${styles.navLink} ${active === item.to ? styles.navLinkActive : ''} ${activeSidebar === item.sidebarType ? styles.navLinkOpen : ''}`}
                                        >
                                            <span className={styles.navLinkInner}>
                                                {item.label}
                                                <motion.span
                                                    className={styles.chevron}
                                                    animate={{ rotate: activeSidebar === item.sidebarType ? 180 : 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    <FiChevronDown size={12} />
                                                </motion.span>
                                            </span>
                                        </Link>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.to}
                                        smooth
                                        duration={520}
                                        spy
                                        onSetActive={() => setActive(item.to)}
                                        className={`${styles.navLink} ${active === item.to ? styles.navLinkActive : ''}`}
                                    >
                                        <span className={styles.navLinkInner}>{item.label}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <motion.button
                            className={styles.themeBtn}
                            onClick={toggleTheme}
                            whileTap={{ scale: 0.88 }}
                            whileHover={{ scale: 1.08 }}
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.span key="sun"
                                        initial={{ opacity: 0, rotate: -40 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 40 }}
                                        transition={{ duration: 0.18 }}
                                        style={{ display: 'flex' }}
                                    ><FiSun size={17} /></motion.span>
                                ) : (
                                    <motion.span key="moon"
                                        initial={{ opacity: 0, rotate: -40 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 40 }}
                                        transition={{ duration: 0.18 }}
                                        style={{ display: 'flex' }}
                                    ><FiMoon size={17} /></motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <a href="/resume.pdf" download className={styles.resumeBtn}>
                            Resume
                        </a>

                        <motion.button
                            className={styles.burger}
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.span key="x"
                                        initial={{ rotate: -45, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 45, opacity: 0 }}
                                        transition={{ duration: 0.16 }}
                                        style={{ display: 'flex' }}
                                    ><FiX size={20} /></motion.span>
                                ) : (
                                    <motion.span key="menu"
                                        initial={{ rotate: 45, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -45, opacity: 0 }}
                                        transition={{ duration: 0.16 }}
                                        style={{ display: 'flex' }}
                                    ><FiMenu size={20} /></motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* ══ About Bottom Panel ══ */}
            <AnimatePresence>
                {activeSidebar === 'about' && (
                    <motion.div
                        className={styles.aboutPanel}
                        initial={{ y: 50, x: '-50%', opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, x: '-50%', opacity: 1, scale: 1 }}
                        exit={{ y: 50, x: '-50%', opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={handleSidebarEnter}
                        onMouseLeave={handleSidebarLeave}
                    >
                        <div className={styles.aboutGlow} />
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutImageWrapper}>
                                <img src={personal.avatar} alt={personal.name} className={styles.aboutImage} />
                            </div>
                            <div className={styles.aboutInfo}>
                                <div className={styles.aboutHeader}>
                                    <h3 className={styles.aboutName}>{personal.name}</h3>
                                    <span className={styles.aboutLocation}>
                                        <FiMapPin size={10} /> {personal.location.split(',')[0]}
                                    </span>
                                </div>
                                <p className={styles.aboutTitle}>{personal.title}</p>
                                <p className={styles.aboutBio}>{personal.bio}</p>
                                <Link
                                    to="about"
                                    smooth
                                    duration={520}
                                    className={styles.aboutBtn}
                                    onClick={closeSidebar}
                                >
                                    <FiUser size={14} />
                                    <span>Read Full Story</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══ Experience Bottom Panel ══ */}
            <AnimatePresence>
                {activeSidebar === 'experience' && (
                    <motion.div
                        className={styles.expPanel}
                        initial={{ y: 50, x: '-50%', opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, x: '-50%', opacity: 1, scale: 1 }}
                        exit={{ y: 50, x: '-50%', opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={handleSidebarEnter}
                        onMouseLeave={handleSidebarLeave}
                    >
                        <div className={styles.expGlow} />
                        <div className={styles.expHeaderGroup}>
                            <span className={styles.expPanelBadge}>✧ Experience</span>
                            <p className={styles.expPanelSub}>My Professional Journey</p>
                        </div>

                        <div className={styles.expListContainer}>
                            {experiences.slice(0, 3).map((exp, i) => (
                                <motion.div
                                    key={exp.id}
                                    className={styles.expCard}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.3, ease: 'easeOut' }}
                                    style={{ '--exp-color': exp.color }}
                                >
                                    <div className={styles.expCardHeader}>
                                        <div className={styles.expCardDot} />
                                        <div className={styles.expCardTitleGroup}>
                                            <h4 className={styles.expCardRole}>{exp.role}</h4>
                                            <span className={styles.expCardCompany}>@ {exp.company}</span>
                                        </div>
                                    </div>
                                    <div className={styles.expCardMeta}>
                                        <span>{exp.period}</span>
                                        <span className={styles.expCardDotSep}>•</span>
                                        <span>{exp.type}</span>
                                    </div>
                                    <p className={styles.expCardDesc}>{exp.description}</p>

                                    <div className={styles.expTechStack}>
                                        {exp.tech.slice(0, 4).map(t => (
                                            <span key={t} className={styles.expTechChip}>{t}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className={styles.expFooter}>
                            <Link
                                to="experience"
                                smooth
                                duration={520}
                                className={styles.expAllBtn}
                                onClick={closeSidebar}
                            >
                                View Detailed Timeline →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══ Skills Right Sidebar ══ */}
            <AnimatePresence>
                {activeSidebar === 'skills' && (
                    <motion.aside
                        className={`${styles.sidebar} ${styles.sidebarRight}`}
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={handleSidebarEnter}
                        onMouseLeave={handleSidebarLeave}
                    >
                        <div className={styles.sidebarGlow} />

                        <div className={styles.sidebarHeader}>
                            <span className={styles.sidebarBadge}>✧ Skills</span>
                            <p className={styles.sidebarSub}>Tech Stack & Tools</p>
                        </div>

                        <div className={styles.sidebarList}>
                            {skillCategories.map(([category, items], i) => (
                                <motion.div
                                    key={category}
                                    className={styles.skillCategoryCard}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    <h4 className={styles.skillCategoryTitle}>{category}</h4>
                                    <div className={styles.skillChips}>
                                        {items.map(skill => (
                                            <span
                                                key={skill.name}
                                                className={styles.sidebarSkillChip}
                                                style={{ '--chip-color': skill.color }}
                                            >
                                                <span className={styles.sidebarSkillDot} style={{ background: skill.color }} />
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className={styles.sidebarFooter}>
                            <Link
                                to="skills"
                                smooth
                                duration={520}
                                className={styles.sidebarAllBtn}
                                onClick={closeSidebar}
                            >
                                View All Skills →
                            </Link>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* ══ Projects Left Sidebar — NO backdrop (backdrop was causing the flicker) ══ */}
            <AnimatePresence>
                {activeSidebar === 'projects' && (
                    <motion.aside
                        className={styles.sidebar}
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
                        onMouseEnter={handleSidebarEnter}
                        onMouseLeave={handleSidebarLeave}
                    >
                        <div className={styles.sidebarGlow} />

                        <div className={styles.sidebarHeader}>
                            <span className={styles.sidebarBadge}>✦ Projects</span>
                            <p className={styles.sidebarSub}>Click Live to preview · GitHub for source</p>
                        </div>

                        <div className={styles.sidebarList}>
                            {projects.map((project, i) => (
                                <motion.div
                                    key={project.id}
                                    className={styles.sidebarItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    <span
                                        className={styles.sidebarDot}
                                        style={{ background: project.color, boxShadow: `0 0 8px ${project.color}` }}
                                    />
                                    <div className={styles.sidebarInfo}>
                                        <span className={styles.sidebarTitle}>{project.title}</span>
                                        <span className={styles.sidebarCategory}>{project.category}</span>
                                        <span className={styles.sidebarDesc}>{project.shortDesc}</span>
                                    </div>
                                    <div className={styles.sidebarActions}>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.liveBtn}
                                        >
                                            <FiExternalLink size={12} />
                                            <span>Live</span>
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.ghBtn}
                                        >
                                            <FiGithub size={13} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className={styles.sidebarFooter}>
                            <Link
                                to="projects"
                                smooth
                                duration={520}
                                className={styles.sidebarAllBtn}
                                onClick={closeSidebar}
                            >
                                View All Projects →
                            </Link>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <ul className={styles.mobileLinks}>
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item.to}
                                    initial={{ opacity: 0, x: -14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04, duration: 0.22 }}
                                >
                                    <Link
                                        to={item.to}
                                        smooth
                                        duration={520}
                                        className={styles.mobileLink}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
