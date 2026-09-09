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
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname) {
      if (pathname === "/en" || pathname.startsWith("/en/")) {
        setLanguageState("en");
      } else {
        setLanguageState("id");
      }
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    if (!pathname) return;

    if (lang === "en") {
      if (pathname === "/en" || pathname.startsWith("/en/")) return;
      // Convert / or /portfolio to /en or /en/portfolio
      const cleanPath = pathname.replace(/^\/id(\/|$)/, "$1");
      const target = cleanPath === "/" || cleanPath === "" ? "/en" : `/en${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`;
      router.push(target);
    } else {
      // lang === "id" -> clean path without /en or /id prefix
      if (!pathname.startsWith("/en") && !pathname.startsWith("/id")) return;
      let cleanPath = pathname.replace(/^\/(en|id)(\/|$)/, "$2");
      if (!cleanPath || !cleanPath.startsWith("/")) {
        cleanPath = `/${cleanPath}`;
      }
      router.push(cleanPath);
    }
  };

  const t = (key: TranslationKey): string => {
    const activeLang = mounted ? language : "id";
    const keys = key.split(".") as string[];
    let current: any = translations[activeLang];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to Indonesian if missing in current, then English
        let fallback: any = translations["id"];
        for (const fallbackK of keys) {
          if (fallback && fallback[fallbackK] !== undefined) {
            fallback = fallback[fallbackK];
          } else {
            let enFallback: any = translations["en"];
            for (const enK of keys) {
              if (enFallback && enFallback[enK] !== undefined) {
                enFallback = enFallback[enK];
              } else {
                return key;
              }
            }
            return typeof enFallback === "string" ? enFallback : key;
          }
        }
        return typeof fallback === "string" ? fallback : key;
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
