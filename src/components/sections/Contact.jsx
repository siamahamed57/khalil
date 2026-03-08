import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'
import { toast } from '../ui/Toaster'
import styles from './Contact.module.css'

const { personal } = portfolioData

const SOCIALS = [
    { icon: <FiGithub size={20} />, href: personal.github, label: 'GitHub', color: '#6366f1' },
    { icon: <FiLinkedin size={20} />, href: personal.linkedin, label: 'LinkedIn', color: '#0077b5' },
    { icon: <FiTwitter size={20} />, href: personal.twitter, label: 'Twitter', color: '#1d9bf0' },
    { icon: <FiMail size={20} />, href: `mailto:${personal.email}`, label: 'Email', color: '#ec4899' },
]

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sending, setSending] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) {
            toast('Please fill in all required fields.', 'error')
            return
        }
        setSending(true)
        // Simulate sending (replace with EmailJS or backend call)
        await new Promise((r) => setTimeout(r, 1800))
        setSending(false)
        toast('Message sent! I\'ll get back to you soon. 🎉', 'success')
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container">
                <div className="section-heading">
                    <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        Get In Touch
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
                        Let's Work Together
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
                        Have a project in mind, a question, or just want to say hi? I'm all ears.
                    </motion.p>
                </div>

                <div className={styles.layout}>
                    {/* Left - Info */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        <div className={`glass-card ${styles.infoCard}`}>
                            <h3 className={styles.infoTitle}>Contact Info</h3>

                            <div className={styles.infoItems}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiMail /></div>
                                    <div>
                                        <p className={styles.infoLabel}>Email</p>
                                        <a href={`mailto:${personal.email}`} className={styles.infoVal}>{personal.email}</a>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiMapPin /></div>
                                    <div>
                                        <p className={styles.infoLabel}>Location</p>
                                        <p className={styles.infoVal}>{personal.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className={styles.socialsTitle}>Find me on</div>
                            <div className={styles.socials}>
                                {SOCIALS.map(({ icon, href, label, color }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialBtn}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        style={{ '--hover-color': color }}
                                    >
                                        {icon}
                                        <span>{label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Status card */}
                        <div className={`glass-card ${styles.statusCard}`}>
                            <div className={styles.statusDot} />
                            <div>
                                <p className={styles.statusTitle}>Open to Opportunities</p>
                                <p className={styles.statusSub}>Full-time, Contract & Freelance</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.35 }}
                    >
                        <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <FormField label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                                <FormField label="Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                            </div>
                            <FormField label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry…" />
                            <div className={styles.textareaWrap}>
                                <label className={styles.label}>Message *</label>
                                <textarea
                                    name="message"
                                    className={styles.textarea}
                                    rows={6}
                                    placeholder="Tell me about your project or just say hello…"
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className={`btn btn-primary ${styles.submitBtn}`}
                                disabled={sending}
                                whileTap={{ scale: 0.98 }}
                            >
                                {sending ? (
                                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                                        ⟳
                                    </motion.span>
                                ) : <FiSend />}
                                {sending ? 'Sending…' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function FormField({ label, name, type = 'text', value, onChange, placeholder }) {
    return (
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>
            <input
                type={type}
                name={name}
                className={styles.input}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete="off"
            />
        </div>
    )
}
