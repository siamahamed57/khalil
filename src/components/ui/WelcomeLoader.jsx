import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeLoader = ({ onLoadingComplete }) => {
  const message = "Hi, I'm glad you're here!";
  const characters = message.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const panelVariants = {
    initial: { y: 0 },
    exit: (custom) => ({
      y: custom === 'top' ? '-100%' : '100%',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2
      }
    })
  };

  const charVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.04,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      }
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div className="welcome-loader-wrapper">
      {/* Split Panels */}
      <motion.div
        className="panel top-panel"
        variants={panelVariants}
        custom="top"
        initial="initial"
        exit="exit"
      />
      <motion.div
        className="panel bottom-panel"
        variants={panelVariants}
        custom="bottom"
        initial="initial"
        exit="exit"
      />

      <div className="welcome-content">
        <div className="text-container">
          {characters.map((char, i) => (
            <motion.span
              key={i}
              className="welcome-char"
              variants={charVariants}
              custom={i}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="welcome-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          exit={{ opacity: 0 }}
        />
      </div>

      <style jsx>{`
        .welcome-loader-wrapper {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .panel {
          position: absolute;
          left: 0;
          width: 100%;
          height: 50.5%; /* Slight overlap to prevent gaps */
          background: #080808;
          z-index: 5;
        }

        .top-panel {
          top: 0;
        }

        .bottom-panel {
          bottom: 0;
        }

        .welcome-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          z-index: 10;
        }

        .text-container {
          display: flex;
          overflow: hidden;
        }

        .welcome-char {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: clamp(1.5rem, 6vw, 2.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }

        .welcome-line {
          width: 60px;
          height: 2px;
          background: var(--accent-1);
          opacity: 0.8;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }
      `}</style>
    </motion.div>
  );
};

export default WelcomeLoader;
