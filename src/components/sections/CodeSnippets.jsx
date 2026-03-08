import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'
import { useTheme } from '../../context/ThemeContext'
import styles from './CodeSnippets.module.css'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('cpp', cpp)

const { codeSnippets } = portfolioData

export default function CodeSnippets() {
    const [active, setActive] = useState(0)
    const [copied, setCopied] = useState(false)
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const { isDark } = useTheme()

    const snippet = codeSnippets[active]

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet.code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="snippets" className="section" ref={ref}>
            <div className="container">
                <div className="section-heading">
                    <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        Code Quality
                    </motion.span>
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
                        Code Snippets
                    </motion.h2>
                    <motion.p className="section-subtitle" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
                        Reusable, battle-tested pieces of code I've written and love.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.layout}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {/* Sidebar */}
                    <div className={styles.sidebar}>
                        {codeSnippets.map((s, i) => (
                            <button
                                key={s.id}
                                className={`${styles.sidebarItem} ${i === active ? styles.sidebarActive : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <span className={styles.sidebarLang}>{s.language}</span>
                                <span className={styles.sidebarTitle}>{s.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Code Panel */}
                    <div className={`glass-card ${styles.panel}`}>
                        {/* Top bar */}
                        <div className={styles.panelHeader}>
                            <div className={styles.windowDots}>
                                <span style={{ background: '#ef4444' }} />
                                <span style={{ background: '#f59e0b' }} />
                                <span style={{ background: '#10b981' }} />
                            </div>
                            <span className={styles.filename}>{snippet.title}</span>
                            <button className={styles.copyBtn} onClick={handleCopy}>
                                {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>

                        {/* Description */}
                        <p className={styles.description}>{snippet.description}</p>

                        {/* Code */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={snippet.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className={styles.codeWrapper}
                            >
                                <SyntaxHighlighter
                                    language={snippet.language}
                                    style={isDark ? oneDark : oneLight}
                                    showLineNumbers
                                    customStyle={{
                                        background: 'transparent',
                                        fontSize: '0.85rem',
                                        lineHeight: '1.65',
                                        margin: 0,
                                        padding: 0,
                                        fontFamily: 'var(--font-mono)',
                                    }}
                                    lineNumberStyle={{ color: 'var(--text-muted)', minWidth: '2rem' }}
                                >
                                    {snippet.code}
                                </SyntaxHighlighter>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
