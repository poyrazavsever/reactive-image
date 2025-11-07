import { docs } from "@/.velite";

export function getDocs(locale: string) {
  return docs
    .filter((d: any) => d.locale === locale)
    .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0));
}
