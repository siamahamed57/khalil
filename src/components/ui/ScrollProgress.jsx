import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const [percent, setPercent] = useState(0);
    const { scrollYProgress } = useScroll();

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setPercent(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <div className="scroll-progress-container">
            <div className="scroll-progress-track">
                <motion.div
                    className="scroll-progress-bar"
                    style={{ scaleY, originY: 0 }}
                />
            </div>
            <div className="scroll-progress-percentage">
                {percent}%
            </div>

            <style jsx>{`
        .scroll-progress-container {
          position: fixed;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 100;
        }

        .scroll-progress-track {
          width: 4px;
          height: 180px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scroll-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, #06b6d4, #f59e0b, #fb7185);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
        }

        .scroll-progress-percentage {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-1);
          writing-mode: vertical-lr;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 0.1em;
          opacity: 0.8;
        }

        @media (max-width: 1024px) {
          .scroll-progress-container {
            display: none;
          }
        }
      `}</style>
        </div>
    );
};

export default ScrollProgress;
