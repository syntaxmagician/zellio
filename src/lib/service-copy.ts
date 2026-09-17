import { translations } from "./translations";
import { slugify } from "./slug";

export function serviceCopy(service: { title: string; description: string }, locale: "id" | "en") {
  const slug = slugify(service.title);
  const copy = translations[locale].service;
  const descriptions: Record<string, string> = copy.desc;
  const titles = copy as unknown as Record<string, unknown>;
  return {
    title: typeof titles[slug] === "string" ? titles[slug] as string : service.title,
    description: descriptions[slug] || service.description,
  };
}
