import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'
import styles from './Footer.module.css'

const { personal } = portfolioData

const quickLinks = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            {/* Top wave */}
            <div className={styles.wave}>
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 40 C360 80 1080 0 1440 40 L1440 0 L0 0 Z" fill="var(--bg-primary)" />
                </svg>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <div className={styles.logoBox}>IK</div>
                            <span className={styles.logoName}>{personal.name}</span>
                        </div>
                        <p className={styles.tagline}>
                            Building elegant solutions to complex problems, one commit at a time.
                        </p>
                        <div className={styles.socials}>
                            <FooterSocial href={personal.github} icon={<FiGithub />} />
                            <FooterSocial href={personal.linkedin} icon={<FiLinkedin />} />
                            <FooterSocial href={personal.twitter} icon={<FiTwitter />} />
                            <FooterSocial href={`mailto:${personal.email}`} icon="✉" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>Quick Links</h4>
                        <ul>
                            {quickLinks.map((l) => (
                                <li key={l.to}>
                                    <Link to={l.to} smooth duration={520} className={styles.link}>
                                        → {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact fast */}
                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>Contact</h4>
                        <ul>
                            <li><a href={`mailto:${personal.email}`} className={styles.link}>{personal.email}</a></li>
                            <li><span className={styles.linkDisabled}>{personal.phone}</span></li>
                            <li><span className={styles.linkDisabled}>{personal.location}</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        © {year} {personal.name}. All rights reserved.
                    </p>
                    <p className={styles.made}>
                        Made with <FiHeart size={13} style={{ color: '#ec4899', display: 'inline' }} /> by{' '}
                        <span className="gradient-text" style={{ fontWeight: 700 }}>{personal.name}</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

function FooterSocial({ href, icon }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            whileHover={{ y: -3 }}
        >
            {icon}
        </motion.a>
    )
}
