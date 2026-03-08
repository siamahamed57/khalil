import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { TypeAnimation } from 'react-type-animation'
import {
    FiGithub, FiLinkedin, FiTwitter, FiArrowDown,
    FiMapPin, FiCode, FiDownload, FiExternalLink
} from 'react-icons/fi'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import { Link } from 'react-scroll'
import { portfolioData } from '../../data/portfolioData'
import { useTheme } from '../../context/ThemeContext'
import styles from './Hero.module.css'

const { personal } = portfolioData

const socialLinks = [
    { icon: <FiGithub />, href: personal.github, label: 'GitHub' },
    { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn' },
    { icon: <FiTwitter />, href: personal.twitter, label: 'Twitter' },
    { icon: <SiLeetcode />, href: personal.leetcode, label: 'LeetCode' },
    { icon: <SiCodeforces />, href: personal.codeforces, label: 'Codeforces' },
]

const quickStats = [
    { value: '45+', label: 'Projects' },
    { value: '1.8k', label: 'Stars' },
    { value: '1200+', label: 'CP' },
]

const techStack = [
    { label: 'React', color: '#61DAFB' },
    { label: 'Node.js', color: '#68D391' },
    { label: 'TypeScript', color: '#667EEA' },
    { label: 'MongoDB', color: '#48BB78' },
    { label: 'GSAP', color: '#88CE02' },
]

export default function Hero() {
    const { isDark } = useTheme()
    const heroRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const [mounted, setMounted] = useState(false)

    // Smooth mouse spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 55, damping: 18 })
    const springY = useSpring(mouseY, { stiffness: 55, damping: 18 })

    // Mouse tracking
    useEffect(() => {
        const handleMouse = (e) => {
            if (!heroRef.current) return

            const rect = heroRef.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        }
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    // Initialization
    useEffect(() => {
        setMounted(true)
    }, [])

    const initParticles = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    const particlesOptions = {
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 90, duration: 0.4 } },
        },
        particles: {
            color: { value: ['#06b6d4', '#6366f1', '#a855f7'] },
            links: { color: '#6366f1', distance: 110, enable: true, opacity: isDark ? 0.07 : 0.04, width: 0.6 },
            move: { enable: true, speed: 0.35, outModes: { default: 'bounce' } },
            number: { density: { enable: true, area: 1200 }, value: 40 },
            opacity: { value: { min: 0.04, max: isDark ? 0.35 : 0.18 } },
            shape: { type: 'circle' },
            size: { value: { min: 0.8, max: 2.1 } },
        },
        detectRetina: true,
    }

    const typeSequence = personal.taglines.flatMap((t) => [t, 2400])
    const nameWords = personal.name.split(' ')

    return (
        <section id="hero" className={styles.hero} ref={heroRef}>

            {/* ── Particles ── */}
            <div className={styles.particles}>
                <Particles id="tsparticles" init={initParticles} options={particlesOptions} />
            </div>

            {/* ── Grid lines ── */}
            <div className={styles.gridLines} />

            {/* ── Ambient light orbs ── */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />

            {/* ── Corner glows ── */}
            <div className={styles.cornerTL} />
            <div className={styles.cornerBR} />

            {/* ── Vertical neon accent lines ── */}
            <div className={styles.vline1} />
            <div className={styles.vline2} />

            {/* ── Mouse spotlight ── */}
            {mounted && (
                <motion.div
                    className={styles.spotlight}
                    style={{ left: springX, top: springY }}
                />
            )}

            {/* ── Main content — same width as navbar ── */}
            <div className={styles.content}>

                {/* ─ LEFT ─ */}
                <div className={styles.left} ref={leftRef}>

                    {/* Status row */}
                    <div data-g className={styles.topRow}>
                        <span className={styles.badge}>
                            <span className={styles.dot} />
                            Available for hire
                        </span>
                        <span className={styles.location}>
                            <FiMapPin size={11} />
                            Bashundhara R/A, Dhaka, Bangladesh
                        </span>
                    </div>

                    {/* Label */}
                    <p data-g className={styles.overline}>
                        <span className={styles.overlineLine} />
                        Full-Stack Developer & Wordpress Expert
                        <span className={styles.overlineLine} />
                    </p>

                    {/* Name */}
                    <h1 data-g className={styles.name}>
                        {nameWords.map((word, i) => (
                            <span key={i} className={i === 1 ? styles.nameAccent : ''}>
                                {word}
                                {i < nameWords.length - 1 && ' '}
                            </span>
                        ))}
                    </h1>

                    {/* Typing */}
                    <div data-g className={styles.typing}>
                        <span className={styles.typingBar} />
                        <TypeAnimation
                            sequence={typeSequence}
                            wrapper="span"
                            speed={55}
                            repeat={Infinity}
                            className={styles.typingText}
                        />
                    </div>

                    {/* Bio */}
                    <p data-g className={styles.bio}>
                        {personal.bio}
                    </p>

                    {/* Stats */}
                    <div data-g className={styles.statsRow}>
                        {quickStats.map((s, i) => (
                            <StatPill key={i} {...s} />
                        ))}
                        <div className={styles.statDivider} />
                        <div className={styles.cpRating}>
                            <span className={styles.cpRatingVal}>1900<span>+</span></span>
                            <span className={styles.cpRatingLabel}>CF Rating</span>
                        </div>
                    </div>

                    {/* Stack chips */}
                    <div data-g className={styles.stackRow}>
                        {techStack.map((t) => (
                            <span
                                key={t.label}
                                className={styles.stackChip}
                                style={{ '--chip-color': t.color }}
                            >
                                <span className={styles.chipDot} style={{ background: t.color }} />
                                {t.label}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div data-g className={styles.ctas}>
                        <Link to="projects" smooth duration={520} className={styles.btnPrimary}>
                            <FiCode size={14} />
                            View My Work
                        </Link>
                        <a href={personal.resumeUrl} download className={styles.btnOutline}>
                            <FiDownload size={14} />
                            Resume
                        </a>
                        <Link to="contact" smooth duration={520} className={styles.btnGhost}>
                            Let&apos;s Talk →
                        </Link>
                    </div>

                    {/* Socials */}
                    <div data-g className={styles.socials}>
                        {socialLinks.map(({ icon, href, label }) => (
                            <SocialBtn key={label} icon={icon} href={href} label={label} />
                        ))}
                        <span className={styles.socialsLine} />
                        <span className={styles.socialsText}>@ibrahimkhalil</span>
                    </div>
                </div>

                {/* ─ RIGHT ─ */}
                <div className={styles.right} ref={rightRef}>
                    <div className={styles.proCardWrapper} data-card>

                        {/* Glowing backdrop */}
                        <div className={styles.proCardGlow} />

                        {/* Main Card */}
                        <div className={styles.proCard}>
                            <div className={styles.proCardInner}>
                                <div className={styles.proImageContainer}>
                                    <img src={personal.avatar} alt={personal.name} className={styles.proImage} />
                                    <div className={styles.proImageOverlay} />
                                </div>

                                <div className={styles.proInfo}>
                                    <div className={styles.proStatusBadge}>
                                        <div className={styles.proPulseDot} />
                                        <span>Open to Work</span>
                                    </div>
                                    <h3 className={styles.proName}>{personal.name}</h3>
                                    <p className={styles.proTitle}>Software Engineer</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Tech Badges */}
                        <motion.div
                            className={`${styles.proFloat} ${styles.proFloat2}`}
                            animate={{ y: [8, -8, 8], rotateZ: [2, -2, 2] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >
                            <div className={styles.proFloatIcon} style={{ color: '#48BB78' }}>
                                <SiCodeforces size={16} />
                            </div>
                            <span className={styles.proFloatText}>CF Expert</span>
                        </motion.div>

                        <motion.div
                            className={`${styles.proFloat} ${styles.proFloat3}`}
                            animate={{ y: [-5, 5, -5], rotateZ: [-1, 1, -1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        >
                            <div className={styles.proFloatIcon} style={{ color: '#F56565' }}>
                                <FiDownload size={16} />
                            </div>
                            <span className={styles.proFloatText}>Full-Stack</span>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                className={styles.scrollDown}
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Link to="about" smooth duration={520} style={{ cursor: 'none' }}>
                    <span className={styles.scrollLine} />
                    <FiArrowDown size={15} />
                    <span>Scroll</span>
                </Link>
            </motion.div>

            <div className={styles.bottomFade} />
        </section>
    )
}

/* ─── StatPill ─ */
function StatPill({ value, label }) {
    return (
        <motion.div
            className={styles.statPill}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
            <span className={styles.statVal}>{value}</span>
            <span className={styles.statLbl}>{label}</span>
        </motion.div>
    )
}

/* ─── SocialBtn ─ */
function SocialBtn({ icon, href, label }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label={label}
            title={label}
            whileHover={{ y: -4, scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
            {icon}
        </motion.a>
    )
}
