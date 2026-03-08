import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeLoader = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000); // Faster duration for a snappier feel

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="welcome-loader"
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="welcome-content"
      >
        <h1 className="welcome-message">Hi, I'm glad you're here!</h1>
        <div className="welcome-underline" />
      </motion.div>

      <style jsx>{`
        .welcome-loader {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #080808;
          z-index: 9999;
        }

        .welcome-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .welcome-message {
          font-family: var(--font-sans);
          font-size: clamp(1.25rem, 4vw, 2rem);
          font-weight: 500;
          color: #ffffff;
          letter-spacing: -0.01em;
          text-align: center;
        }

        .welcome-underline {
          width: 40px;
          height: 1px;
          background: var(--accent-1);
          opacity: 0.6;
        }
      `}</style>
    </motion.div>
  );
};

export default WelcomeLoader;
