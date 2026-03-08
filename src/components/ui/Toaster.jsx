import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiX, FiAlertCircle, FiInfo } from 'react-icons/fi'

let toastId = 0
let listeners = []
const toasts = []

export function toast(msg, type = 'success') {
    const id = ++toastId
    const t = { id, msg, type }
    toasts.push(t)
    listeners.forEach((fn) => fn([...toasts]))
    setTimeout(() => {
        const i = toasts.findIndex((x) => x.id === id)
        if (i !== -1) toasts.splice(i, 1)
        listeners.forEach((fn) => fn([...toasts]))
    }, 3500)
}

const icons = {
    success: <FiCheckCircle />,
    error: <FiAlertCircle />,
    info: <FiInfo />,
}

const colors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#6366f1',
}

export default function Toaster() {
    const [list, setList] = useState([])

    useEffect(() => {
        listeners.push(setList)
        return () => { listeners = listeners.filter((fn) => fn !== setList) }
    }, [])

    return (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 99990, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <AnimatePresence>
                {list.map((t) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, x: 60, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 60, scale: 0.9 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '12px 18px', borderRadius: 12,
                            background: 'var(--bg-card)', backdropFilter: 'blur(20px)',
                            border: `1px solid ${colors[t.type]}40`,
                            color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500,
                            boxShadow: 'var(--shadow-glass)', minWidth: 240, maxWidth: 340,
                        }}
                    >
                        <span style={{ color: colors[t.type], display: 'flex', fontSize: '1.1rem' }}>
                            {icons[t.type]}
                        </span>
                        {t.msg}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
