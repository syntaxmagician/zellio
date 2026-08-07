const BASE_URL = "https://zellio.id";

/** Public canonical paths use the /en locale prefix (middleware rewrite). */
export function canonicalPath(path = ""): string {
  const normalized = path.replace(/^\//, "");
  return normalized ? `/en/${normalized}` : "/en";
}

export function absoluteUrl(path = ""): string {
  return `${BASE_URL}${canonicalPath(path)}`;
}
