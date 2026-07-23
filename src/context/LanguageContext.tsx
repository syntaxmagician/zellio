"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey } from "@/lib/translations";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as Language;
    if (savedLang === "en" || savedLang === "id") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = (key: TranslationKey): string => {
    // Prevent hydration mismatch by using default "en" during SSR and before hydration.
    const activeLang = mounted ? language : "en";
    const keys = key.split(".") as string[];
    let current: any = translations[activeLang];
    
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English if translation is missing
        let englishFallback: any = translations["en"];
        for (const fallbackK of keys) {
          if (englishFallback && englishFallback[fallbackK] !== undefined) {
            englishFallback = englishFallback[fallbackK];
          } else {
            return key; // return key as fallback
          }
        }
        return typeof englishFallback === "string" ? englishFallback : key;
      }
    }
    
    return typeof current === "string" ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
