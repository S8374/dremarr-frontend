"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

type Language = "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en");

  React.useEffect(() => {
    const savedLanguage = window.localStorage.getItem("dreamer-language");

    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("dreamer-language", nextLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageTransition({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0, filter: "blur(12px)", scale: 0.97 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, filter: "blur(12px)", scale: 1.03 }}
        transition={{
          duration: 0.35,
          ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for a crisp snap
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
