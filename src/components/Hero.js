import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroData from "../data/about.json";

const Hero = () => {
  const headingRef = useRef(null);

  const truncateText = (element, maxWidth) => {
    if (element) {
      const originalText = element.textContent;
      let truncatedText = originalText;

      while (element.scrollWidth > maxWidth && truncatedText.length > 0) {
        truncatedText = truncatedText.substring(
          0,
          truncatedText.lastIndexOf(" ")
        );
        element.textContent = truncatedText;
      }
    }
  };

  useEffect(() => {
    const headingElement = headingRef.current;

    if (headingElement) {
      const headingWidth = headingElement.clientWidth;
      truncateText(headingElement, headingWidth);
    }

    const handleResize = () => {
      if (headingElement) {
        headingElement.textContent = heroData.name; // Reset text before truncating
        const headingWidth = headingElement.clientWidth;
        truncateText(headingElement, headingWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heroData.name}
      </motion.h1>
      <p className="subtitle">{heroData.subtitle}</p>
    </section>
  );
};

export default Hero;
