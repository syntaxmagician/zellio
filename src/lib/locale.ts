import { cache } from "react";
import { headers } from "next/headers";

// Middleware derives this header from the URL and overwrites client input.
export const getRequestLocale = cache(async (): Promise<"id" | "en"> =>
  (await headers()).get("x-next-locale") === "en" ? "en" : "id"
);
