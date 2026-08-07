"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { translations, TranslationKey } from "@/lib/translations";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname) {
      const firstSegment = pathname.split("/")[1] as Language;
      if (firstSegment === "en" || firstSegment === "id") {
        setLanguageState(firstSegment);
      }
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "id") {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }
    const newPathname = segments.join("/") || `/${lang}`;
    router.push(newPathname);
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
