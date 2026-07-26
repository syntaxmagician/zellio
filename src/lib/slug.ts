/**
 * Route slug for a service, derived from its title.
 *
 * Single source for the services index, the detail route and the sitemap — the
 * logic used to be copy-pasted into all three, so a tweak in one would have
 * quietly produced 404s in the others.
 */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[\s&/]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
